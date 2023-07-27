import { useContext, useState } from 'react';

import { css } from '@emotion/core';
import { RiCheckboxMultipleFill } from 'react-icons/ri';

import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { breakpoints } from '@soomo/lib/styles/themes';

import InstructorViewDeckedQuestionPool from './InstructorViewDeckedQuestionPool';
import StudentViewDeckedQuestionPool from './StudentViewDeckedQuestionPool';
import { PageContext } from '../Layout';

import type { MCQuestion, MCQuestionPool, QuizResponse } from '../../types';

interface Props {
	poolElements?: MCQuestionPool[]; // instructor view only
	initialQuestions?: MCQuestion[]; // student view only
	initialQuizResponses?: QuizResponse[]; // student view only
}

const QuestionDeck: React.VFC<Props> = ({
	initialQuestions,
	poolElements,
	initialQuizResponses
}) => {
	const { maxAttempts, isInstructorView } = useContext(PageContext);
	const [expandedIndexesMap, setExpandedIndexesMap] = useState<{
		[index: number]: boolean;
	}>(
		initialExpandedState({
			maxAttempts,
			isInstructorView,
			initialQuizResponses,
			initialQuestions,
			poolElements
		})
	);
	const deckSize = isInstructorView ? poolElements.length : initialQuestions.length;

	return (
		<div css={styles}>
			<WebtextQuestion>
				<UniversalVelvetLeftBorder>
					<QuestionType>
						<RiCheckboxMultipleFill className="question-deck-icon" aria-hidden="true" />
						<span>{deckSize} Multiple-Choice Questions</span>
					</QuestionType>
					<div className="questions">
						{isInstructorView
							? poolElements.map((poolElement, i) => (
									<InstructorViewDeckedQuestionPool
										key={i}
										poolElement={poolElement}
										expanded={expandedIndexesMap[i]}
										onToggleExpanded={() =>
											setExpandedIndexesMap({
												...expandedIndexesMap,
												[i]: !expandedIndexesMap[i]
											})
										}
									/>
							  ))
							: initialQuestions.map((initialQuestion, i) => (
									<StudentViewDeckedQuestionPool
										key={i}
										initialQuestion={initialQuestion}
										expanded={expandedIndexesMap[i]}
										onToggleExpanded={() =>
											setExpandedIndexesMap({
												...expandedIndexesMap,
												[i]: !expandedIndexesMap[i]
											})
										}
										initialQuizResponse={initialQuizResponses[i]}
									/>
							  ))}
					</div>
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
		</div>
	);
};

export default QuestionDeck;

const styles = css`
	// WebtextQuestion inner div
	.webtext-question-universal-velvet > div {
		@media (max-width: ${breakpoints.small}) {
			padding-right: 0.25rem;
		}
	}

	[role='heading'] {
		white-space: nowrap;
		display: flex;
		align-items: flex-start;
		column-gap: 0.75rem;

		@media (max-width: ${breakpoints.small}) {
			flex-direction: column;
		}
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

		@media (max-width: ${breakpoints.small}) {
			margin-top: 1rem;
		}
	}
`;

function initialExpandedState(
	args: Props & {
		maxAttempts: number;
		isInstructorView: boolean;
	}
): {
	[index: number]: boolean;
} {
	const {
		maxAttempts,
		isInstructorView,
		initialQuizResponses: quizResponses,
		initialQuestions,
		poolElements
	} = args;
	const items = isInstructorView ? poolElements : initialQuestions;

	// for instructors, simply start with the first question expanded
	if (isInstructorView) {
		return { [0]: true };
	}

	// for students, the first question that can still earn points is expanded:
	// - the first unanswered question, or
	// - the first question which is incorrect *and* still has resets remaining
	let expandedIndex: number | null = null;
	for (let i = 0; i < items.length; i++) {
		const qr = quizResponses[i];
		const ans = qr.answers.find((ans) => ans.questionFamilyId === initialQuestions[i].familyId);
		if (!qr || qr.answers.length === 0 || (!ans.correct && qr.reset_count < maxAttempts - 1)) {
			expandedIndex = i;
			break;
		}
	}
	return expandedIndex != null ? { [expandedIndex]: true } : {};
}
