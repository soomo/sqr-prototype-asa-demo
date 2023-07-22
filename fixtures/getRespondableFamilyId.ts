import pooledPage from './pooledPage';
import unpooledPage from './unpooledPage';

import type { FamilyId, MCQuestionPool } from '../types';

const allQuestionPools = [...pooledPage.elements, ...unpooledPage.elements].filter(
	(el) => el.type === 'NG::Soomo::MC::QuestionPool'
) as MCQuestionPool[];

/**
 * Get the respondable family ID (i.e. parent QuestionPool family ID) for a given MultipleChoiceQuestion familyId.
 * In Core, this will simply be calling mcq.parent.family_id, but we have to calculate it here in the prototype.
 */
export function TEST_getRespondableFamilyId(questionFamilyId: FamilyId) {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return TEST_getParentMCQuestionPool(questionFamilyId).familyId;
}

/**
 * Get the parent MCQuestionPool of a given MCQuestion family ID.
 * In Core, this will simply be calling mcq.parent, but we have to calculate it here in the prototype.
 */
export function TEST_getParentMCQuestionPool(questionFamilyId: FamilyId) {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return allQuestionPools.find((el) =>
		el.questions.find((el) => el.familyId === questionFamilyId)
	)!;
}
