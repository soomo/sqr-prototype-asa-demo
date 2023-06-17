/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { RiCheckboxMultipleFill as QuestionDeckIcon } from 'react-icons/ri';

import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';

import SQRQuestionDeckMCQuestion from './SQRQuestionDeckMCQuestion';

import type { SQRQuestionPool } from '../fixtures/sqrQuestionPools';
import type { SaveMCQuestionResponse } from '../pages/api/save_sqr_mc_question';

interface Props {
	poolElements: SQRQuestionPool[];
	isInstructorView?: boolean;
	interventionType: null | 'auto-open' | 'spotlight';
}

const SQRQuestionDeck: React.VFC<Props> = ({
	poolElements,
	isInstructorView,
	interventionType
}) => {
	const [expandedQuestionsMap, setExpandedQuestionsMap] = useState<{
		[familyId: FamilyId]: boolean;
	}>({});
	const [activePoolQuestionIndexesMap, setActivePoolQuestionIndexesMap] = useState(
		Object.fromEntries(poolElements.map((poolElement) => [poolElement.family_id, 0]))
	);
	const [responsesMap, setResponsesMap] = useState<{
		[poolElementFamilyId: FamilyId]: SaveMCQuestionResponse;
	}>({});
	const [shouldShowReminder, setShouldShowReminder] = useState(false);

	useEffect(() => {
		setActivePoolQuestionIndexesMap(
			Object.fromEntries(poolElements.map((poolElement) => [poolElement.family_id, 0]))
		);
		setResponsesMap({});
		setExpandedQuestionsMap({});
	}, [interventionType, poolElements]);

	const handleToggleExpanded = useCallback((familyId: string) => {
		setExpandedQuestionsMap((oldExpandedQuestions) => {
			return { ...oldExpandedQuestions, [familyId]: !oldExpandedQuestions[familyId] };
		});
	}, []);

	const handleSubmit = useCallback(
		async ({
			poolElementFamilyId,
			questionFamilyId,
			choiceFamilyId
		}: {
			poolElementFamilyId: FamilyId;
			questionFamilyId: FamilyId;
			choiceFamilyId: FamilyId;
		}) => {
			const res = await fetch(`/api/save_sqr_mc_question`, {
				method: 'POST',
				body: JSON.stringify({
					question_family_id: questionFamilyId,
					choice_family_id: choiceFamilyId
				})
			});
			const json = (await res.json()) as SaveMCQuestionResponse;
			setResponsesMap((oldResponsesMap) => {
				return { ...oldResponsesMap, [poolElementFamilyId]: json };
			});

			if (interventionType === 'auto-open' && json.correct) {
				const i = poolElements.findIndex(
					(poolElement) => poolElement.family_id === poolElementFamilyId
				)!;
				if (i + 1 < poolElements.length) {
					const nextPoolElementFamilyId = poolElements[i + 1].family_id;
					setExpandedQuestionsMap((oldExpandedQuestions) => {
						return { ...oldExpandedQuestions, [nextPoolElementFamilyId]: true };
					});
				}
			}
		},
		[interventionType, poolElements]
	);

	const handleNewQuestionRequested = useCallback(
		(poolElementFamilyId: FamilyId) => {
			setActivePoolQuestionIndexesMap((oldActivePoolQuestionIndexesMap) => {
				return {
					...oldActivePoolQuestionIndexesMap,
					[poolElementFamilyId]: (activePoolQuestionIndexesMap[poolElementFamilyId] + 1) % 3
				};
			});
			setResponsesMap((oldResponsesMap) => {
				return { ...oldResponsesMap, [poolElementFamilyId]: null };
			});
		},
		[activePoolQuestionIndexesMap]
	);

	return (
		<div css={styles}>
			<WebtextQuestion>
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
								onSubmit={handleSubmit}
								isInstructorView={isInstructorView}
								studentResponse={responsesMap[poolElement.family_id]}
								shouldShowReminder={shouldShowReminder}
							/>
						))}
					</div>
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
			<div className="backdrop" hidden={!shouldShowReminder} />
		</div>
	);
};

export default SQRQuestionDeck;

const styles = css`
	position: relative;

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

	.backdrop {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: -100vw;
			right: 0;
			border-left: 100vw solid rgba(0, 0, 0, 0.5);
			box-shadow: 100vw 0 0 rgba(0, 0, 0, 0.5);
		}
	}
`;
