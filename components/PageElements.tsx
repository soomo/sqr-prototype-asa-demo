import { Fragment, useContext } from 'react';

import dynamic from 'next/dynamic';

import shuffle from '@soomo/lib/utils/shuffle';
import { Figure } from '@soomo/lib/components/pageElements';

import { FAKE_USER_ID } from '../fixtures/constants';
import { getOrCreateQuizResponse } from '../fixtures/database';
import StudentViewStandaloneQuestionPool from './sqr/StudentViewStandaloneQuestionPool';
import InstructorViewStandaloneQuestionPool from './sqr/InstructorViewStandaloneQuestionPool';
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
								component = (
									<InstructorViewStandaloneQuestionPool key={el.familyId} poolElement={el} />
								);
							} else {
								const qr = getOrCreateQuizResponse(el.familyId);
								const poolIndex = qr.reset_count % el.questions.length;

								// shuffle pool items using `${poolFamilyId}${userId}`
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

								// shuffle choices using the QR seed (initially `userId`)
								const shuffledChoices = isInstructorView
									? redactedChoices
									: shuffle({
											list: redactedChoices,
											key: '',
											seed: qr.seed
									  });
								const initialQuestion = { ...currentQuestion, choices: shuffledChoices };
								component = (
									<StudentViewStandaloneQuestionPool
										key={el.familyId}
										initialQuestion={initialQuestion}
										initialQuizResponse={qr}
									/>
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
					case 'NG::Soomo::Figure':
						component = (
							<Figure
								figureOptions={{
									...el,
									figure_position: el.figurePosition
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
								const poolIndex = qr.reset_count % pool.questions.length;
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
											seed: qr.seed
									  });
								const initialQuestion = { ...currentQuestion, choices: shuffledChoices };
								return initialQuestion;
							});
							const quizResponses = deckedQuestionPools.map((pool) =>
								getOrCreateQuizResponse(pool.familyId)
							);
							component = (
								<QuestionDeck
									key={el.familyId}
									poolElements={[...deckedQuestionPools]}
									initialQuestions={initialQuestions}
									initialQuizResponses={quizResponses}
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
