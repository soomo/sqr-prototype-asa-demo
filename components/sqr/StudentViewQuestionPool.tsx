import { useCallback, useEffect, useState } from 'react';

import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { useAccessibilityFocus } from '@soomo/lib/hooks';

import Prompt from './Prompt';
import Choices from './Choices';
import Rejoinder from './Rejoinder';
import Heading from './Heading';
import { buttonStyles, choicesStyles, dividerStyles, rejoinderStyles } from './studentViewStyles';
import { useStudentView } from './useStudentView';

import type { FamilyId, MCQuestion, SyntheticAnswer } from '../../types';
import TryAgain from './TryAgain';

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
	const [answer, setAnswer] = useState<SyntheticAnswer | null>(null);
	const [rejoinderRef, setFocusToRejoinder] = useAccessibilityFocus();
	const [headingRef, setFocusToHeading] = useAccessibilityFocus();
	const { isRequestInProgress, performReset, performSave } = useStudentView({
		questionFamilyId: activeQuestion.familyId,
		choiceFamilyId
	});

	const handleReset = useCallback(async () => {
		if (isRequestInProgress || !answer) {
			return;
		}
		const json = await performReset();
		if (json.was_reset) {
			setChoiceFamilyId(null);
			setActiveQuestion(json.new_question);
			setAnswer(null);
			setFocusToHeading();
		}
	}, [isRequestInProgress, answer, performReset, setFocusToHeading]);

	const handleSubmit = useCallback(async () => {
		if (isRequestInProgress || answer != null) {
			return;
		}

		const json = await performSave();
		setAnswer({
			correct: json.is_correct,
			rejoinder: json.rejoinder,
			wasFinalAttempt: json.attempts_remaining === 0
		});
		setFocusToRejoinder();
	}, [isRequestInProgress, answer, performSave, setFocusToRejoinder]);

	return (
		<div {...rest}>
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
						css={choicesStyles}
					/>
					{answer ? (
						<>
							<Rejoinder
								ref={rejoinderRef}
								rejoinder={answer.rejoinder}
								correct={answer.correct}
								css={rejoinderStyles}
							/>
							<TryAgain isRequestInProgress={isRequestInProgress} onReset={handleReset} />
						</>
					) : (
						<>
							<hr css={dividerStyles} />
							<button onClick={handleSubmit} css={buttonStyles} disabled={choiceFamilyId == null}>
								{isRequestInProgress ? 'Saving...' : 'Save'}
							</button>
						</>
					)}
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
		</div>
	);
};

export default StudentViewQuestionPool;
