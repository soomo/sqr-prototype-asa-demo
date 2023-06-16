import { useCallback, useState } from 'react';
import { css } from '@emotion/core';
import { RiCheckboxMultipleFill as QuestionDeckIcon } from 'react-icons/ri';

import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';

import SQRQuestionDeckMCQuestion from './SQRQuestionDeckMCQuestion';

import type { SQRQuestionPool } from '../fixtures/sqrQuestionPools';

interface Props {
	poolElements: SQRQuestionPool[];
	isInstructorView?: boolean;
}

const SQRQuestionDeck: React.VFC<Props> = ({ poolElements, isInstructorView }) => {
	const [expandedQuestionsMap, setExpandedQuestionsMap] = useState<{
		[familyId: FamilyId]: boolean;
	}>({});
	const [activePoolQuestionIndexesMap, setActivePoolQuestionIndexesMap] = useState(
		Object.fromEntries(poolElements.map((poolElement) => [poolElement.family_id, 0]))
	);

	const handleToggleExpanded = useCallback((familyId: string) => {
		setExpandedQuestionsMap((oldExpandedQuestions) => {
			return { ...oldExpandedQuestions, [familyId]: !oldExpandedQuestions[familyId] };
		});
	}, []);

	const handleNewQuestionRequested = useCallback(
		(poolElementFamilyId: FamilyId) => {
			setActivePoolQuestionIndexesMap((oldActivePoolQuestionIndexesMap) => {
				return {
					...oldActivePoolQuestionIndexesMap,
					[poolElementFamilyId]: (activePoolQuestionIndexesMap[poolElementFamilyId] + 1) % 3
				};
			});
		},
		[activePoolQuestionIndexesMap]
	);

	return (
		<WebtextQuestion css={styles}>
			<UniversalVelvetLeftBorder>
				<QuestionType>
					<QuestionDeckIcon className="question-deck-icon" aria-hidden="true" />
					<span>{poolElements.length} Multiple-Choice Questions</span>
				</QuestionType>
				<div className="questions">
					{poolElements.map((poolElement) => (
						<SQRQuestionDeckMCQuestion
							key={poolElement.family_id}
							poolElement={poolElement}
							expanded={expandedQuestionsMap[poolElement.family_id]}
							activePoolQuestionIndex={activePoolQuestionIndexesMap[poolElement.family_id]}
							onToggleExpanded={handleToggleExpanded}
							onNewQuestionRequested={handleNewQuestionRequested}
							isInstructorView={isInstructorView}
						/>
					))}
				</div>
			</UniversalVelvetLeftBorder>
		</WebtextQuestion>
	);
};

export default SQRQuestionDeck;

const styles = css`
	[role='heading'] {
		white-space: nowrap;
		display: flex;
		align-items: flex-start;
		column-gap: 0.75rem;
	}

	.question-deck-icon {
		width: 25px;
		height: 25px;
		margin-right: 0;
	}

	.questions {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}
`;
