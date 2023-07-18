/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';

import { css } from '@emotion/core';

import { WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { useAccessibilityFocus } from '@soomo/lib/hooks';

import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import Heading from './Heading';
import InstructorViewPoolNavigation from './InstructorViewPoolNavigation';
import { choicesStyles, rejoinderStyles } from './standaloneStyleOverrides';

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

	const handlePrevious = useCallback(() => {
		setActivePoolIndex((old) => old - 1);
		setFocusToHeading();
	}, [setFocusToHeading]);

	const handleNext = useCallback(() => {
		setActivePoolIndex((old) => old + 1);
		setFocusToHeading();
	}, [setFocusToHeading]);

	return (
		<div>
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
						css={choicesStyles}
					/>
					<Rejoinder
						rejoinder={activeQuestionCorrectChoice.rejoinder}
						correct={true}
						css={rejoinderStyles}
					/>
					<InstructorViewPoolNavigation
						onPrevious={handlePrevious}
						onNext={handleNext}
						activeIndex={activePoolIndex}
						numQuestions={poolElement.questions.length}
						css={instructorViewPoolNavigationStyles}
					/>
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
		</div>
	);
};

export default InstructorViewQuestionPool;

const instructorViewPoolNavigationStyles = css`
	margin-top: 1.5rem;
`;
