/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { RiCheckboxMultipleFill as QuestionDeckIcon } from 'react-icons/ri';

import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';

import SQRQuestionDeckMCQuestion, { MCQRef } from './SQRQuestionDeckMCQuestion';

import type { SQRQuestionPool } from '../fixtures/sqrQuestionPools';
import type { SaveMCQuestionResponse } from '../pages/api/save_sqr_mc_question';

interface Props {
	poolElements: SQRQuestionPool[];
	isInstructorView?: boolean;
}

const SQRQuestionDeck: React.VFC<Props> = ({ poolElements, isInstructorView }) => {
	const [expandedQuestionsMap, setExpandedQuestionsMap] = useState<{
		[familyId: FamilyId]: boolean;
	}>({
		[poolElements[0].family_id]: true
	});
	const [activePoolQuestionIndexesMap, setActivePoolQuestionIndexesMap] = useState(
		Object.fromEntries(poolElements.map((poolElement) => [poolElement.family_id, 0]))
	);
	const [responsesMap, setResponsesMap] = useState<{
		[poolElementFamilyId: FamilyId]: SaveMCQuestionResponse;
	}>({});
	const mcqRefs = useRef<MCQRef[]>(Array(poolElements.length));

	useEffect(() => {
		setActivePoolQuestionIndexesMap(
			Object.fromEntries(poolElements.map((poolElement) => [poolElement.family_id, 0]))
		);
		setResponsesMap({});
		setExpandedQuestionsMap({
			[poolElements[0].family_id]: true
		});
	}, [poolElements]);

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
		},
		[]
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
						{poolElements.map((poolElement, i) => (
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
								ref={(mcqRef) => {
									mcqRefs.current[i] = mcqRef;
								}}
							/>
						))}
					</div>
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
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
