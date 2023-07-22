/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { TEST_getParentMCQuestionPool } from '../../fixtures/getRespondableFamilyId';

import type { NextApiHandler } from 'next';
import type { FullMCChoice, MCQuestion, SQRSavePayload, SQRSaveResponse } from '../../types';

const handler: NextApiHandler<SQRSaveResponse> = (req, res) => {
	if (req.method === 'POST') {
		const {
			questionFamilyId,
			choiceFamilyId,
			TEST_quizResponse: qr,
			TEST_maxAttempts: maxAttempts
		} = JSON.parse(req.body) as SQRSavePayload;

		const parentQuestionPool = TEST_getParentMCQuestionPool(questionFamilyId);
		const respondableFamilyId = parentQuestionPool.familyId;

		const el = parentQuestionPool.questions.find((mcq) => mcq.familyId === questionFamilyId)!;
		const choice = (el.choices as FullMCChoice[]).find((ch) => ch.familyId === choiceFamilyId)!;
		const correctChoice = (el.choices as FullMCChoice[]).find((ch) => ch.correct)!;
		const isCorrect = correctChoice.familyId === choiceFamilyId;

		const answerMap = Object.fromEntries(qr.answers.map((ans) => [ans.questionFamilyId, ans]));
		answerMap[questionFamilyId] = {
			questionFamilyId,
			choiceFamilyId,
			correct: isCorrect,
			rejoinder: choice.rejoinder,
			wasFinalAttempt: maxAttempts !== -1 && qr.reset_count >= maxAttempts - 1
		};
		qr.answers = Object.values(answerMap);

		res.status(200).json({
			pool_family_id: respondableFamilyId,
			attempts_remaining: -1, // unlimited
			choice_family_id: choiceFamilyId,
			is_correct: isCorrect,
			question_family_id: questionFamilyId,
			rejoinder: choice.rejoinder,
			TEST_modifiedQuizResponse: qr
		});
		return;
	}

	res.status(400).send({} as SQRSaveResponse);
};
export default handler;
