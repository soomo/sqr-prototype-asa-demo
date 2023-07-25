/* eslint-disable @typescript-eslint/no-non-null-assertion */
import shuffle from '@soomo/lib/utils/shuffle';

import { FAKE_USER_ID } from '../../fixtures/constants';
import { TEST_getParentMCQuestionPool } from '../../fixtures/getRespondableFamilyId';

import type { NextApiHandler } from 'next';
import type { RedactedMCChoice, SQRResetPayload, SQRResetResponse } from '../../types';

const handler: NextApiHandler<SQRResetResponse> = (req, res) => {
	if (req.method === 'POST') {
		const { questionFamilyId, TEST_quizResponse: qr } = JSON.parse(req.body) as SQRResetPayload;
		const parentQuestionPool = TEST_getParentMCQuestionPool(questionFamilyId);
		const respondableFamilyId = parentQuestionPool.familyId;

		qr.reset_count++;
		qr.seed = Math.floor(Math.random() * (2 ** 30 - 1));
		qr.answers = qr.answers.filter((ans) => ans.questionFamilyId !== questionFamilyId);

		if (parentQuestionPool.questions.length > 1) {
			// this is a pooled MC question
			const shuffledQuestions = shuffle({
				list: parentQuestionPool.questions,
				key: respondableFamilyId,
				seed: FAKE_USER_ID
			});
			const newQuestion = { ...shuffledQuestions[qr.reset_count % shuffledQuestions.length] };
			newQuestion.choices = shuffle({ list: newQuestion.choices, key: '', seed: qr.seed }).map(
				(ch) =>
					({
						body: ch.body,
						familyId: ch.familyId
					} as RedactedMCChoice)
			);
			res.status(200).json({
				pool_family_id: respondableFamilyId,
				reset_count: qr.reset_count,
				question_family_id: questionFamilyId,
				new_question: newQuestion,
				was_reset: true,
				TEST_modifiedQuizResponse: qr
			});
		} else {
			// this is an unpooled MC question;
			// return the same question but with the choices shuffled
			const newQuestion = { ...parentQuestionPool.questions[0] };
			newQuestion.choices = shuffle({ list: newQuestion.choices, key: '', seed: qr.seed });
			res.status(200).json({
				pool_family_id: respondableFamilyId,
				reset_count: qr.reset_count,
				question_family_id: questionFamilyId,
				new_question: newQuestion,
				was_reset: true,
				TEST_modifiedQuizResponse: qr
			});
		}
		return;
	}

	res.status(400).send({} as SQRResetResponse);
};
export default handler;
