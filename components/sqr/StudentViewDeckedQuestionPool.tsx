import { useCallback, useEffect, useState } from 'react';

import { css } from '@emotion/core';

import { useAccessibilityFocus } from '@soomo/lib/hooks';
import { breakpoints } from '@soomo/lib/styles/themes';

import CorrectIcon from './CorrectIcon';
import IncorrectIcon from './IncorrectIcon';
import CollapseIcon from './CollapseIcon';
import ExpandIcon from './ExpandIcon';
import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import { buttonStyles, dividerStyles } from './studentViewStyles';
import TryAgain from './TryAgain';
import { useStudentView } from './useStudentView';
import { choicesStyles, deckedStyles, rejoinderStyles } from './deckedStyles';

import type { MCQuestion, FamilyId, QuizResponse } from '../../types';

interface Props {
	initialQuestion: MCQuestion;
	expanded?: boolean;
	onToggleExpanded: () => void;
	initialQuizResponse: QuizResponse;
}

const StudentViewDeckedQuestionPool: React.VFC<Props> = ({
	initialQuestion,
	onToggleExpanded,
	expanded,
	initialQuizResponse
}) => {
	const [activeQuestion, setActiveQuestion] = useState<MCQuestion>(initialQuestion);
	useEffect(() => {
		setActiveQuestion(initialQuestion);
	}, [initialQuestion]);
	const [quizResponse, setQuizResponse] = useState(initialQuizResponse);
	const answer = quizResponse.answers.find(
		(ans) => ans.questionFamilyId === activeQuestion.familyId
	);
	const [choiceFamilyId, setChoiceFamilyId] = useState<FamilyId | null>(
		answer?.choiceFamilyId ?? null
	);
	const { isRequestInProgress, performReset, performSave, correctChoice } = useStudentView({
		questionFamilyId: activeQuestion.familyId,
		choiceFamilyId
	});
	const [buttonRef, setFocusToButton] = useAccessibilityFocus();
	const [rejoinderRef, setFocusToRejoinder] = useAccessibilityFocus();
	const contentDivId = `${activeQuestion.familyId}-content`;

	const handleReset = useCallback(async () => {
		if (isRequestInProgress || !answer) {
			return;
		}
		const json = await performReset();
		if (json.was_reset) {
			setChoiceFamilyId(null);
			setActiveQuestion(json.new_question);
			setQuizResponse(json.TEST_modifiedQuizResponse);
			setFocusToButton();
		}
	}, [answer, isRequestInProgress, performReset, setFocusToButton]);

	const handleSubmit = useCallback(async () => {
		if (isRequestInProgress || answer != null) {
			return;
		}
		const json = await performSave();
		setQuizResponse(json.TEST_modifiedQuizResponse);
		setFocusToRejoinder();
	}, [answer, isRequestInProgress, performSave, setFocusToRejoinder]);

	return (
		<div css={deckedStyles}>
			<button
				className="prompt-and-pivotar"
				aria-expanded={expanded ?? false}
				aria-controls={contentDivId}
				data-answered={answer != null}
				onClick={onToggleExpanded}
				ref={buttonRef}>
				<div className="correctness-and-prompt">
					{answer != null && (
						<div className="correctness">
							{answer.correct ? (
								<CorrectIcon aria-label="Correct." />
							) : (
								<IncorrectIcon aria-label="Incorrect." />
							)}
						</div>
					)}
					<Prompt body={activeQuestion.body} />
				</div>
				{expanded ? <CollapseIcon /> : <ExpandIcon />}
			</button>
			<div id={contentDivId} hidden={!expanded}>
				<Choices
					choices={activeQuestion.choices}
					disabled={answer != null}
					selectedChoiceFamilyId={choiceFamilyId}
					onChangeSelectedChoice={setChoiceFamilyId}
					questionFamilyId={activeQuestion.familyId}
					css={choicesStyles}
				/>
				{answer ? (
					<>
						<Rejoinder
							ref={rejoinderRef}
							rejoinder={answer.rejoinder}
							correct={answer.correct}
							css={rejoinderStyles}
							correctChoice={correctChoice}
						/>
						<TryAgain
							isRequestInProgress={isRequestInProgress}
							onReset={handleReset}
							css={tryAgainStyles}
							quizResponse={quizResponse}
							correct={answer.correct}
						/>
					</>
				) : (
					<div css={dividerAndSaveStyles}>
						<hr css={dividerStyles} />
						<button onClick={handleSubmit} css={buttonStyles} disabled={choiceFamilyId == null}>
							{isRequestInProgress ? 'Saving...' : 'Save'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default StudentViewDeckedQuestionPool;

const dividerAndSaveStyles = css`
	padding: 1.5rem 2rem;
`;

const tryAgainStyles = css`
	padding: 1rem 2rem 1.5rem 1.5rem;

	/* FIXME temporary */
	button {
		display: block;

		span,
		small {
			line-height: 22px;
		}

		small {
			white-space: nowrap;
			font-size: inherit;

			&::before {
				content: ' ';
			}
		}

		@media (max-width: ${breakpoints.small}) {
		}
	}

	@media (max-width: ${breakpoints.small}) {
		padding-right: 1rem;
	}
`;
