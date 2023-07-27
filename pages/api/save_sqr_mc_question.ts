/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { TEST_getParentMCQuestionPool } from '../../fixtures/getRespondableFamilyId';

import type { NextApiHandler } from 'next';
import type { FullMCChoice, SQRSavePayload, SQRSaveResponse } from '../../types';

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
		const attemptsRemaining = maxAttempts === -1 ? -1 : maxAttempts - qr.reset_count - 1;
		const wasFinalAttempt = maxAttempts !== -1 && attemptsRemaining <= 0;
		answerMap[questionFamilyId] = {
			questionFamilyId,
			choiceFamilyId,
			correct: isCorrect,
			rejoinder: choice.rejoinder,
			wasFinalAttempt
		};
		qr.answers = Object.values(answerMap);
		qr.updated_at = new Date().toISOString();

		res.status(200).json({
			pool_family_id: respondableFamilyId,
			attempts_remaining: attemptsRemaining,
			choice_family_id: choiceFamilyId,
			is_correct: isCorrect,
			question_family_id: questionFamilyId,
			rejoinder: choice.rejoinder,
			TEST_modifiedQuizResponse: qr,
			correct_choice: wasFinalAttempt ? correctChoice : undefined
		});
		return;
	}

	res.status(400).send({} as SQRSaveResponse);
};
export default handler;
