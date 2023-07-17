/* eslint-disable @typescript-eslint/no-non-null-assertion */
import shuffle from '@soomo/lib/utils/shuffle';

import pooledPage from '../../fixtures/pooledPage';
import { quizResponses } from '../../fixtures/database';

import type { NextApiHandler } from 'next';
import type { MCQuestionPool, SQRResetPayload, SQRResetResponse } from '../../types';

const handler: NextApiHandler<SQRResetResponse> = (req, res) => {
	if (req.method === 'POST') {
		const { questionFamilyId } = JSON.parse(req.body) as SQRResetPayload;

		const containingPage = pooledPage; // TODO this will later have to determine if it's `pooledPage` or `unpooledPage`

		const parentQuestionPool = containingPage.elements
			.filter((el) => el.type === 'NG::Soomo::MC::QuestionPool')
			.find(
				(el: MCQuestionPool) => el.questions.find((el) => el.familyId === questionFamilyId) != null
			) as MCQuestionPool;

		const respondableFamilyId = parentQuestionPool.familyId;

		const qr = quizResponses[respondableFamilyId];
		if (qr == null) {
			res.status(400).send({} as SQRResetResponse);
			return;
		}
		qr.reset_count++;
		qr.seed = Math.floor(Math.random() * (2 ** 30 - 1));

		if (parentQuestionPool.questions.length > 1) {
			// this is a pooled MC question
			// silly way to get a numeric seed out of the family id
			const poolOrderSeed = containingPage.elements.findIndex(
				(el) => el.familyId === parentQuestionPool.familyId
			)!;
			const shuffledQuestions = shuffle({
				list: parentQuestionPool.questions,
				key: '',
				seed: poolOrderSeed
			});
			const newQuestion = { ...shuffledQuestions[qr.reset_count % shuffledQuestions.length] };
			newQuestion.choices = shuffle({ list: newQuestion.choices, key: '', seed: qr.seed });
			res.status(200).json({
				reset_count: qr.reset_count,
				question_family_id: questionFamilyId,
				new_question: newQuestion,
				was_reset: true
			});
			return;
		} else {
			// this is an unpooled MC question;
			// return the same question but with the choices shuffled
			const newQuestion = { ...parentQuestionPool.questions[0] };
			newQuestion.choices = shuffle({ list: newQuestion.choices, key: '', seed: qr.seed });
			res.status(200).json({
				reset_count: qr.reset_count,
				question_family_id: questionFamilyId,
				new_question: newQuestion,
				was_reset: true
			});
			return;
		}
	}

	res.status(400).send({} as SQRResetResponse);
};
export default handler;
