import { useContext, useState } from 'react';

import { css } from '@emotion/core';
import { RiCheckboxMultipleFill } from 'react-icons/ri';

import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { breakpoints } from '@soomo/lib/styles/themes';

import InstructorViewDeckedQuestionPool from './InstructorViewDeckedQuestionPool';
import StudentViewDeckedQuestionPool from './StudentViewDeckedQuestionPool';
import { getAllQuizResponses } from '../../fixtures/database';
import { PageContext } from '../Layout';

import type {
	FamilyId,
	MCQuestion,
	MCQuestionPool,
	QuizResponse,
	SyntheticMCQAnswer
} from '../../types';

interface Props {
	poolElements?: MCQuestionPool[]; // instructor view only
	initialQuestions?: MCQuestion[]; // student view only
	initialAnswers?: SyntheticMCQAnswer[]; // student view only
}

const QuestionDeck: React.VFC<Props> = ({ initialQuestions, poolElements }) => {
	const { maxAttempts, isInstructorView } = useContext(PageContext);
	const [expandedIndexesMap, setExpandedIndexesMap] = useState<{
		[index: number]: boolean;
	}>(
		initialExpandedState({
			maxAttempts,
			quizResponses: getAllQuizResponses(),
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
		quizResponses: Record<FamilyId, QuizResponse>;
	}
): {
	[index: number]: boolean;
} {
	const { maxAttempts, isInstructorView, quizResponses, initialQuestions, poolElements } = args;
	const items = isInstructorView ? poolElements : initialQuestions;

	// the first question that can still earn points is expanded:
	// - the first unanswered question, or
	// - the first question which is incorrect *and* still has resets remaining
	let expandedQuestionFamilyId: FamilyId | null = null;
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const qr = quizResponses[item.familyId];
		if (!qr || qr.answers.length === 0 || qr.reset_count < maxAttempts - 1) {
			expandedQuestionFamilyId = item.familyId;
			break;
		}
	}
	return expandedQuestionFamilyId != null ? { [expandedQuestionFamilyId]: true } : {};
}
