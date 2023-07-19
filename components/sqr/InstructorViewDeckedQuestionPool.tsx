/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';

import { css } from '@emotion/core';

import { useAccessibilityFocus } from '@soomo/lib/hooks';
import { breakpoints } from '@soomo/lib/styles/themes';

import CorrectIcon from './CorrectIcon';
import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import InstructorViewPoolNavigation from './InstructorViewPoolNavigation';
import CollapseIcon from './CollapseIcon';
import ExpandIcon from './ExpandIcon';
import { choicesStyles, deckedStyles, rejoinderStyles } from './deckedStyles';

import type { FullMCChoice, MCQuestionPool } from '../../types';

interface Props {
	poolElement: MCQuestionPool;
	expanded?: boolean;
	onToggleExpanded: () => void;
}

const InstructorViewDeckedQuestionPool: React.VFC<Props> = ({
	onToggleExpanded,
	poolElement,
	expanded
}) => {
	const [activePoolIndex, setActivePoolIndex] = useState(0);
	const [buttonRef, setFocusToButton] = useAccessibilityFocus();

	const activeQuestion = poolElement.questions[activePoolIndex];
	const activeQuestionCorrectChoice = (activeQuestion.choices as FullMCChoice[]).find(
		(ch) => ch.correct
	)!;
	const contentDivId = `${poolElement.familyId}-content`;

	const handlePrevious = useCallback(() => {
		setActivePoolIndex((old) => old - 1);
		setFocusToButton();
	}, [setFocusToButton]);

	const handleNext = useCallback(() => {
		setActivePoolIndex((old) => old + 1);
		setFocusToButton();
	}, [setFocusToButton]);

	return (
		<div css={deckedStyles}>
			<button
				ref={buttonRef}
				className="prompt-and-pivotar"
				aria-expanded={expanded ?? false}
				aria-controls={contentDivId}
				data-answered={true}
				onClick={onToggleExpanded}>
				<div className="correctness-and-prompt">
					<div className="correctness">
						<CorrectIcon aria-label="Correct." />
					</div>
					<Prompt body={activeQuestion.body} />
				</div>
				{expanded ? <CollapseIcon /> : <ExpandIcon />}
			</button>
			<div id={contentDivId} hidden={!expanded}>
				<Choices
					choices={activeQuestion.choices}
					disabled
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					onChangeSelectedChoice={() => {}}
					questionFamilyId={activeQuestion.familyId}
					selectedChoiceFamilyId={activeQuestionCorrectChoice.familyId}
					css={choicesStyles}
				/>
				<Rejoinder
					correct={true}
					rejoinder={activeQuestionCorrectChoice.rejoinder}
					css={rejoinderStyles}
				/>
				<InstructorViewPoolNavigation
					onPrevious={handlePrevious}
					onNext={handleNext}
					activeIndex={activePoolIndex}
					numQuestions={poolElement.questions.length}
					css={instructorViewPoolNavigationStyles}
				/>
			</div>
		</div>
	);
};

export default InstructorViewDeckedQuestionPool;

const instructorViewPoolNavigationStyles = css`
	margin-top: 1rem;
	padding: 0 2rem 1.5rem 0;

	@media (max-width: ${breakpoints.small}) {
		padding-left: 1.5rem;
		padding-right: 1rem;
	}
`;
