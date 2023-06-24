/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { RiCheckboxMultipleFill as QuestionDeckIcon } from 'react-icons/ri';

import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';

import SQRQuestionDeckMCQuestion, { MCQRef } from './SQRQuestionDeckMCQuestion';

import type { SQRQuestionPool } from '../fixtures/sqrQuestionPools';
import type { SaveMCQuestionResponse } from '../pages/api/save_sqr_mc_question';
import type { InterventionType } from '../pages';

interface Props {
	poolElements: SQRQuestionPool[];
	isInstructorView?: boolean;
	interventionType: InterventionType;
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
	const mcqRefs = useRef<MCQRef[]>(Array(poolElements.length));

	const { startWatching, resetNextQuestionReminder, shouldShowReminder } = useNextQuestionReminder({
		interventionType
	});

	const firstUnansweredQuestionFamilyId = poolElements.find(
		(poolEl) => responsesMap[poolEl.family_id] == null
	)?.family_id;

	useEffect(() => {
		setActivePoolQuestionIndexesMap(
			Object.fromEntries(poolElements.map((poolElement) => [poolElement.family_id, 0]))
		);
		setResponsesMap({});
		setExpandedQuestionsMap({});
	}, [interventionType, poolElements]);

	const handleToggleExpanded = useCallback(
		(familyId: string) => {
			setExpandedQuestionsMap((oldExpandedQuestions) => {
				return { ...oldExpandedQuestions, [familyId]: !oldExpandedQuestions[familyId] };
			});
			if (familyId === firstUnansweredQuestionFamilyId) {
				resetNextQuestionReminder();
			}
		},
		[firstUnansweredQuestionFamilyId, resetNextQuestionReminder]
	);

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

			if (json.correct && interventionType) {
				const i = poolElements.findIndex(
					(poolElement) => poolElement.family_id === poolElementFamilyId
				)!;
				if (i + 1 < poolElements.length) {
					if (interventionType === 'auto-open') {
						const nextPoolElementFamilyId = poolElements[i + 1].family_id;
						setExpandedQuestionsMap((oldExpandedQuestions) => {
							return { ...oldExpandedQuestions, [nextPoolElementFamilyId]: true };
						});
					} else if (interventionType === 'spotlight') {
						startWatching(mcqRefs.current[i].rejoinderElement);
					}
				}
			}
		},
		[interventionType, poolElements, startWatching]
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
								shouldShowReminder={
									shouldShowReminder && poolElement.family_id === firstUnansweredQuestionFamilyId
								}
								ref={(mcqRef) => {
									mcqRefs.current[i] = mcqRef;
								}}
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

interface UseNextQuestionReminderArgs {
	interventionType: InterventionType;
}

const REQUIRED_REJOINDER_INTERSECTION_RATIO = 1.0;
/**
 * Grows/shrinks the intersection area. Top/right/bottom/left order, like `margin`.
 * We grow the intersection area by 200px at the bottom (so that the rejoinder must be fully visible *and* there's an
 * additional 200px below it). We *shrink* the intersection area by -50px on the left, because there's a
 * `margin-left: -50px` rule on `.rejoinder`. If we don't account for that, then `.rejoinder` will never intersect
 * on mobile because it's slightly off screen relative to the scrolling element. (See T-60154.)
 */
const REQUIRED_INTERSECTION_ROOT_MARGIN = '0px 0px -200px 50px';

const MIN_SCROLL_AWAY_DISTANCE_IN_PIXELS = 50;

function useNextQuestionReminder({ interventionType }: UseNextQuestionReminderArgs) {
	const [hasScrolledAway, setHasScrolledAway] = useState(false);
	const [wasRejoinderFullyVisible, setWasRejoinderFullyVisible] = useState(false);
	const intersectionObserver = useRef<IntersectionObserver | null>(null);

	/** Initialize IntersectionObserver exactly once. */
	useEffect(() => {
		intersectionObserver.current = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setWasRejoinderFullyVisible(true);
						intersectionObserver.current.disconnect();
					}
				}
			},
			{
				threshold: REQUIRED_REJOINDER_INTERSECTION_RATIO,
				rootMargin: REQUIRED_INTERSECTION_ROOT_MARGIN
			}
		);
		return () => {
			intersectionObserver.current.disconnect();
		};
	}, []);

	const resetNextQuestionReminder = useCallback(() => {
		setHasScrolledAway(false);
		setWasRejoinderFullyVisible(false);
	}, []);

	/* Whenever `interventionType` changes, call `resetNextQuestionReminder`. */
	useEffect(() => {
		resetNextQuestionReminder();
	}, [interventionType, resetNextQuestionReminder]);

	const startWatching = useCallback((rejoinderContainer: HTMLElement) => {
		// FIXME need to be able to specify the scrolling element
		const initialScrollPosition = document.documentElement.scrollTop;
		intersectionObserver.current.observe(rejoinderContainer);
		const scrollCallback = () => {
			if (
				document.documentElement.scrollTop >=
				initialScrollPosition + MIN_SCROLL_AWAY_DISTANCE_IN_PIXELS
			) {
				setHasScrolledAway(true);
				document.removeEventListener('scroll', scrollCallback);
			}
		};
		document.addEventListener('scroll', scrollCallback);
	}, []);

	const shouldShowReminder = hasScrolledAway && wasRejoinderFullyVisible;

	return {
		startWatching,
		resetNextQuestionReminder,
		shouldShowReminder
	};
}
