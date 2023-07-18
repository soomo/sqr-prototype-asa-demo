/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useState } from 'react';

import { css } from '@emotion/core';

import { useAccessibilityFocus } from '@soomo/lib/hooks';

import CorrectIcon from './CorrectIcon';
import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import InstructorViewPoolNavigation from './InstructorViewPoolNavigation';
import CollapseIcon from './CollapseIcon';
import ExpandIcon from './ExpandIcon';

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
		<div css={styles}>
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

const styles = css`
	border: 1px solid #c9c9c9;
	border-radius: 0.5rem;

	.prompt-and-pivotar {
		position: relative;
		display: grid;
		padding: 1rem 1.5rem;
		grid-template-columns: 1fr auto;
		align-items: flex-start;
		column-gap: 1.5rem;
		font: inherit;
		border: none;
		background: none;
		cursor: pointer;
		text-align: initial;

		&[aria-expanded='false'][data-answered='true'] .correctness-and-prompt .question-body {
			display: -webkit-box;
			overflow: hidden;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			color: rgba(0, 0, 0, 0.5);
		}

		.correctness {
			position: absolute;
			left: -13px;
			display: inline-flex;
			margin-right: 0.75rem;
			align-items: baseline;
			font-size: 18px;
			line-height: 30px;
			font-weight: 500;
			font-style: italic;
			column-gap: 0.5rem;

			svg {
				width: 27px;
				height: 27px;
			}
		}

		// QuestionPrompt outer div
		div:last-of-type {
			display: inline;
		}

		// QuestionPrompt inner div
		.question-body {
			margin: 0;
		}
	}
`;

const choicesStyles = css`
	padding-left: 1.5rem;
	padding-right: 2rem;
`;

const rejoinderStyles = css`
	margin-right: 2rem;
	padding-left: 1.5rem;
`;

const instructorViewPoolNavigationStyles = css`
	margin-top: 1rem;
	padding: 0 2rem 1.5rem 0;
`;
