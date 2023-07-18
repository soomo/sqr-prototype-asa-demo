import { Fragment } from 'react';

import dynamic from 'next/dynamic';

import shuffle from '@soomo/lib/utils/shuffle';

import { FAKE_USER_ID, getOrCreateQuizResponse } from '../fixtures/database';

import type { PageElement, RedactedMCChoice } from '../types';
import StudentViewQuestionPool from './sqr/StudentViewQuestionPool';
import InstructorViewQuestionPool from './sqr/InstructorViewQuestionPool';

const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});
const SQRQuestionDeck = dynamic(() => import('./sqr').then((m) => m.SQRQuestionDeck), {
	ssr: false
});

interface Props {
	elements: PageElement[];
	isInstructorView?: boolean;
}

/**
 * Emulates a Haml template / Ruby helper for pages#show. "Server-side-only" code is fine here,
 * as when we actually implement this the code here will instead be in a Ruby helper and thus hidden from the client.
 */
const PageElements: React.VFC<Props> = ({ elements, isInstructorView }) => {
	let inQuestionDeck = false;
	const qdQuestions = [];
	return (
		<>
			{elements.map((el) => {
				let component = <Fragment key={el.familyId} />;
				switch (el.type) {
					case 'NG::Soomo::MC::QuestionPool': {
						if (inQuestionDeck) {
							qdQuestions.push(el);
						} else {
							if (isInstructorView) {
								component = <InstructorViewQuestionPool key={el.familyId} poolElement={el} />;
							} else {
								const qr = getOrCreateQuizResponse(el.familyId);
								const poolIndex = qr != null ? qr.reset_count % el.questions.length : 0;
								const shuffledQuestions = shuffle({
									list: el.questions,
									key: el.familyId,
									seed: FAKE_USER_ID
								});
								const currentQuestion = shuffledQuestions[poolIndex];
								const redactedChoices = currentQuestion.choices.map((ch) => ({
									body: ch.body,
									familyId: ch.familyId
									// excluding `correct` and `rejoinder`
								})) as RedactedMCChoice[];
								const shuffledChoices = isInstructorView
									? redactedChoices
									: shuffle({
											list: redactedChoices,
											key: '',
											seed: FAKE_USER_ID
									  });
								const initialQuestion = { ...currentQuestion, choices: shuffledChoices };
								component = (
									<StudentViewQuestionPool key={el.familyId} initialQuestion={initialQuestion} />
								);
							}
						}
						break;
					}
					case 'NG::Soomo::Text':
						component = (
							<Text
								key={el.familyId}
								online
								element={{
									body: el.body
								}}
							/>
						);
						break;
					case 'NG::Soomo::QuestionDeck': {
						// if (el.direction === 'in') {
						// 	inQuestionDeck = true;
						// } else {
						// 	inQuestionDeck = false;
						// 	component = (
						// 		<SQRQuestionDeck
						// 			key={el.familyId}
						// 			questions={qdQuestions}
						// 			isInstructorView={isInstructorView}
						// 		/>
						// 	);
						// }
						break;
					}
				}
				return component;
			})}
		</>
	);
};
export default PageElements;
