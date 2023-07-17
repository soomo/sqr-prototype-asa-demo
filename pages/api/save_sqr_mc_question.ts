/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getOrCreateQuizResponse, updateQuizResponse } from '../../fixtures/database';
import pooledPage from '../../fixtures/pooledPage';

import type { NextApiHandler } from 'next';
import type { MCQuestion, MCQuestionPool, SQRSavePayload, SQRSaveResponse } from '../../types';

const handler: NextApiHandler<SQRSaveResponse> = (req, res) => {
	if (req.method === 'POST') {
		const { questionFamilyId, choiceFamilyId } = JSON.parse(req.body) as SQRSavePayload;

		const containingPage = pooledPage; // TODO this will later have to determine if it's `pooledPage` or `unpooledPage`

		const parentQuestionPool = containingPage.elements
			.filter((el) => el.type === 'NG::Soomo::MC::QuestionPool')
			.find(
				(el: MCQuestionPool) => el.questions.find((el) => el.familyId === questionFamilyId) != null
			) as MCQuestionPool;

		const respondableFamilyId = parentQuestionPool.familyId;
		const qr = getOrCreateQuizResponse(respondableFamilyId);

		const el = containingPage.elements
			.flatMap((el) => (el.type === 'NG::Soomo::MC::QuestionPool' ? el.questions : el))
			.find((el) => el.familyId === questionFamilyId) as MCQuestion;

		const choice = el.choices.find((ch) => ch.familyId === choiceFamilyId)!;
		const correctChoice = el.choices.find((ch) => ch.correct)!;
		const isCorrect = correctChoice.familyId === choiceFamilyId;

		res.status(200).json({
			attempts_remaining: -1, // unlimited
			choice_family_id: choiceFamilyId,
			is_correct: isCorrect,
			question_family_id: questionFamilyId,
			rejoinder: choice.rejoinder
		});

		const answerMap = Object.fromEntries(qr.answers.map((ans) => [ans.question_family_id, ans]));
		answerMap[questionFamilyId] = {
			body: choiceFamilyId,
			correct: isCorrect,
			question_family_id: questionFamilyId
		};
		qr.answers = Object.values(answerMap);
		updateQuizResponse(respondableFamilyId, qr);
		return;
	}

	res.status(400).send({} as SQRSaveResponse);
};
export default handler;
