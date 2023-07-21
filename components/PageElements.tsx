import { Fragment, useContext } from 'react';

import dynamic from 'next/dynamic';

import shuffle from '@soomo/lib/utils/shuffle';

import { FAKE_USER_ID, getOrCreateQuizResponse } from '../fixtures/database';
import StudentViewQuestionPool from './sqr/StudentViewQuestionPool';
import InstructorViewQuestionPool from './sqr/InstructorViewQuestionPool';
import QuestionDeck from './sqr/QuestionDeck';
import { PageContext } from './Layout';

import type { MCQuestionPool, PageElement, RedactedMCChoice } from '../types';

const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});

interface Props {
	elements: PageElement[];
}

/**
 * Emulates a Haml template / Ruby helper for pages#show. "Server-side-only" code is fine here,
 * as when we actually implement this the code here will instead be in a Ruby helper and thus hidden from the client.
 */
const PageElements: React.VFC<Props> = ({ elements }) => {
	const { isInstructorView } = useContext(PageContext);
	let inQuestionDeck = false;
	let deckedQuestionPools: MCQuestionPool[] = [];
	return (
		<>
			{elements.map((el) => {
				let component = <Fragment key={el.familyId} />;
				switch (el.type) {
					case 'NG::Soomo::MC::QuestionPool': {
						if (inQuestionDeck) {
							deckedQuestionPools.push(el);
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
						if (el.direction === 'in') {
							inQuestionDeck = true;
						} else {
							inQuestionDeck = false;
							const initialQuestions = deckedQuestionPools.map((pool) => {
								const qr = getOrCreateQuizResponse(pool.familyId);
								const poolIndex = qr != null ? qr.reset_count % pool.questions.length : 0;
								const shuffledQuestions = shuffle({
									list: pool.questions,
									key: pool.familyId,
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
								return initialQuestion;
							});
							component = (
								<QuestionDeck
									key={el.familyId}
									poolElements={[...deckedQuestionPools]}
									initialQuestions={initialQuestions}
								/>
							);
							deckedQuestionPools = [];
						}
						break;
					}
				}
				return component;
			})}
		</>
	);
};
export default PageElements;
