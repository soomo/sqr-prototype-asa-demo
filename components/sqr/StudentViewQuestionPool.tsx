import { useCallback, useEffect, useState } from 'react';

import { css } from '@emotion/core';

import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { useAccessibilityFocus } from '@soomo/lib/hooks';

import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import Heading from './Heading';

import type {
	FamilyId,
	MCQuestion,
	SQRResetPayload,
	SQRResetResponse,
	SQRSavePayload,
	SQRSaveResponse
} from '../../types';
import { useAriaLiveAnnouncer } from '@soomo/lib/components/AriaLiveAnnouncer';

interface SyntheticAnswer {
	correct: boolean;
	rejoinder: string;
	wasFinalAttempt?: boolean;
}

interface Props {
	initialQuestion: MCQuestion;
}

/**
 * Student-facing component for a SQR-enabled multiple choice question.
 *
 * Despite the QuestionPool name, this can be either an *unpooled* or a pooled MCQ, where
 * - unpooled: the pool only has one question in it ("pool depth" of 1)
 * - pooled: the pool has more than one question in it (pool depth > 1)
 * This is because any SQR-enabled MCQ always has a QuestionPool parent regardless of pool depth.
 *
 * Pool depth is *not visible* to the QuestionPool component. Instead,
 * it accepts an `initialQuestion` prop, which is the currently active
 * pool item (for unpooled MCQs, this is simply the only item in the pool).
 *
 * Upon clicking the reset button, the component makes a POST request that will return:
 * - for unpooled MCQs: the same question with the choices shuffled
 * - for pooled MCQs: a new question from the pool
 * And the component will update with the response.
 */
const StudentViewQuestionPool: React.VFC<Props> = ({ initialQuestion, ...rest }) => {
	const [activeQuestion, setActiveQuestion] = useState<MCQuestion>(initialQuestion);
	useEffect(() => {
		setActiveQuestion(initialQuestion);
	}, [initialQuestion]);
	const [choiceFamilyId, setChoiceFamilyId] = useState<FamilyId | null>(null);
	const [isRequestInProgress, setRequestInProgress] = useState(false);
	const [answer, setAnswer] = useState<SyntheticAnswer | null>(null);
	const [rejoinderRef, setFocusToRejoinder] = useAccessibilityFocus();
	const [headingRef, setFocusToHeading] = useAccessibilityFocus();
	const { makeAssertiveAnnouncement } = useAriaLiveAnnouncer();

	const handleReset = useCallback(async () => {
		if (isRequestInProgress || !answer) {
			return;
		}

		setRequestInProgress(true);
		try {
			const req = await fetch('/api/reset_sqr_mc_question', {
				method: 'POST',
				body: JSON.stringify({
					questionFamilyId: activeQuestion.familyId
				} as SQRResetPayload)
			});
			const json = (await req.json()) as SQRResetResponse;
			if (json.was_reset) {
				setActiveQuestion(json.new_question);
				setAnswer(null);
				setFocusToHeading();
			}
		} finally {
			setRequestInProgress(false);
		}
	}, [isRequestInProgress, answer, activeQuestion.familyId, setFocusToHeading]);

	const handleSubmit = useCallback(async () => {
		if (isRequestInProgress || answer != null) {
			return;
		}

		setRequestInProgress(true);
		try {
			const req = await fetch('/api/save_sqr_mc_question', {
				method: 'POST',
				body: JSON.stringify({
					questionFamilyId: activeQuestion.familyId,
					choiceFamilyId
				} as SQRSavePayload)
			});
			const json = (await req.json()) as SQRSaveResponse;
			setAnswer({
				correct: json.is_correct,
				rejoinder: json.rejoinder,
				wasFinalAttempt: json.attempts_remaining === 0
			});
			setFocusToRejoinder();
			makeAssertiveAnnouncement(
				`Answer saved. ${json.is_correct ? 'Correct.' : 'Incorrect.'} ${json.rejoinder}`
			);
		} finally {
			setRequestInProgress(false);
		}
	}, [
		isRequestInProgress,
		answer,
		activeQuestion.familyId,
		choiceFamilyId,
		setFocusToRejoinder,
		makeAssertiveAnnouncement
	]);

	return (
		<div css={styles} {...rest}>
			<WebtextQuestion>
				<UniversalVelvetLeftBorder>
					<Heading ref={headingRef} />
					<Prompt body={activeQuestion.body} />
					<Choices
						choices={activeQuestion.choices}
						disabled={answer != null}
						onChangeSelectedChoice={setChoiceFamilyId}
						questionFamilyId={activeQuestion.familyId}
						selectedChoiceFamilyId={choiceFamilyId}
					/>
					{answer ? (
						<>
							<Rejoinder
								ref={rejoinderRef}
								rejoinder={answer.rejoinder}
								correct={answer.correct}
								css={rejoinderStyles}
							/>
							<button onClick={handleReset}>
								{isRequestInProgress ? 'Resetting...' : 'Try Again'}
							</button>
						</>
					) : (
						<>
							<hr />
							<button onClick={handleSubmit}>{isRequestInProgress ? 'Saving...' : 'Save'}</button>
						</>
					)}
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
		</div>
	);
};

export default StudentViewQuestionPool;

const styles = css``;

const rejoinderStyles = css`
	// counteract left padding from UniversalVelvetLeftBorder
	margin-left: -50px;
	padding-left: 50px;
`;
