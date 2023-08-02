import { useCallback, useContext, useEffect, useState } from 'react';

import { css } from '@emotion/core';

import { useAccessibilityFocus } from '@soomo/lib/hooks';
import { breakpoints } from '@soomo/lib/styles/themes';
import { AnswerStatus } from '@soomo/lib/components/shared/Question';

import CorrectIcon from './CorrectIcon';
import IncorrectIcon from './IncorrectIcon';
import CollapseIcon from './CollapseIcon';
import ExpandIcon from './ExpandIcon';
import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import TryAgain from './TryAgain';
import SaveButton from './SaveButton';
import { useStudentView } from './useStudentView';
import { choicesStyles, deckStyles, rejoinderStyles } from './deckedStyles';
import { PageContext } from '../Layout';

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
	const { maxAttempts } = useContext(PageContext);
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
	const attemptsRemaining = maxAttempts - initialQuizResponse.reset_count - 1;

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
		<div css={[deckStyles, studentDeckStyles]}>
			<button
				className="prompt-and-pivotar"
				aria-expanded={expanded ?? false}
				aria-controls={contentDivId}
				data-answered={answer != null}
				data-has-limited-attempts={maxAttempts !== -1}
				data-attempts-remaining={attemptsRemaining}
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
							correctChoice={correctChoice}>
							<AnswerStatus
								suppressAria={true}
								postedAt={''}
								updatedAt={quizResponse.updated_at}
								saving={false}
								posting={false}
								unposting={false}
							/>
						</Rejoinder>
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
						<SaveButton
							onClick={handleSubmit}
							disabled={choiceFamilyId == null}
							isRequestInProgress={isRequestInProgress}
							quizResponse={quizResponse}
						/>
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

	@media (max-width: ${breakpoints.small}) {
		padding-right: 1rem;
	}
`;

const studentDeckStyles = css`
	button[aria-expanded='false'][data-answered='true'][data-has-limited-attempts='true'][data-attempts-remaining='0'] {
		.question-body {
			color: rgba(0, 0, 0, 0.5);
		}
	}
`;
