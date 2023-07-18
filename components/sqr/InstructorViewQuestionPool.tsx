/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';

import { css } from '@emotion/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { useAccessibilityFocus } from '@soomo/lib/hooks';

import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import Heading from './Heading';

import type { FullMCChoice, MCQuestionPool } from '../../types';

interface Props {
	poolElement: MCQuestionPool;
}

/**
 * Instructor-facing component for a SQR-enabled multiple choice question.
 *
 * Unlike StudentViewQuestionPool, this component *is* pool-depth-aware,
 * as there is no concern about leaking information like subsequent pool items,
 * correct choices, or choice rejoinders to the client.
 */
const InstructorViewQuestionPool: React.VFC<Props> = ({ poolElement }) => {
	const [activePoolIndex, setActivePoolIndex] = useState(0);
	const activeQuestion = poolElement.questions[activePoolIndex];
	const activeQuestionCorrectChoice = (activeQuestion.choices as FullMCChoice[]).find(
		(ch) => ch.correct
	)!;
	const [headingRef, setFocusToHeading] = useAccessibilityFocus();

	const handleBack = useCallback(() => {
		setActivePoolIndex((old) => old - 1);
		setFocusToHeading();
	}, [setFocusToHeading]);

	const handleNext = useCallback(() => {
		setActivePoolIndex((old) => old + 1);
		setFocusToHeading();
	}, [setFocusToHeading]);

	return (
		<div css={styles}>
			<WebtextQuestion>
				<UniversalVelvetLeftBorder>
					<Heading ref={headingRef} />
					<Prompt body={activeQuestion.body} />
					<Choices
						disabled
						choices={activeQuestion.choices}
						// eslint-disable-next-line @typescript-eslint/no-empty-function
						onChangeSelectedChoice={() => {}}
						questionFamilyId={activeQuestion.familyId}
						selectedChoiceFamilyId={activeQuestionCorrectChoice.familyId}
					/>
					<Rejoinder rejoinder={activeQuestionCorrectChoice.rejoinder} />
					<div className="instructor-view-pool-navigation">
						<span className="label">
							Browse items in this pool ({poolElement.questions.length} total)
						</span>
						<div className="explanatory-text">
							The item assigned to each student for their initial attempt is randomized, and
							students will receive a different item from the pool if they reset. Visit our{' '}
							<a href="#">Help Center</a> to learn more.
						</div>
						<button
							aria-label="previous pool question"
							disabled={activePoolIndex === 0}
							onClick={handleBack}>
							<FaChevronLeft size={17} />
						</button>
						<button
							aria-label="next pool question"
							disabled={activePoolIndex === poolElement.questions.length - 1}
							onClick={handleNext}>
							<FaChevronRight size={17} />
						</button>
					</div>
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
		</div>
	);
};

export default InstructorViewQuestionPool;

const styles = css``;
