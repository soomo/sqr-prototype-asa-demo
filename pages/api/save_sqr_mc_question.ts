import qdQuestions from '../../fixtures/qdQuestions';

import type { NextApiHandler } from 'next';

export interface SaveMCQuestionResponse {
	rejoinder: string;
	correct: boolean;
}

const handler: NextApiHandler<SaveMCQuestionResponse> = (req, res) => {
	if (req.method === 'POST') {
		const { question_family_id: questionFamilyId, choice_family_id: choiceFamilyId } = JSON.parse(
			req.body
		);
		const question = qdQuestions.find((question) => question.family_id === questionFamilyId);
		const choice = question.choices.find((choice) => choice.family_id === choiceFamilyId);
		res.status(200).json({
			rejoinder: choice.rejoinder,
			correct: choice.is_correct
		});
	}
};
export default handler;
