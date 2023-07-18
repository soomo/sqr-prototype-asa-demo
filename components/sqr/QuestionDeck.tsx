import { useState } from 'react';

import { css } from '@emotion/core';
import { RiCheckboxMultipleFill } from 'react-icons/ri';

import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import InstructorViewDeckedQuestionPool from './InstructorViewDeckedQuestionPool';
import StudentViewDeckedQuestionPool from './StudentViewDeckedQuestionPool';

import type { MCQuestion, MCQuestionPool } from '../../types';

interface Props {
	isInstructorView: boolean;
	poolElements?: MCQuestionPool[];
	initialQuestions?: MCQuestion[];
}

const QuestionDeck: React.VFC<Props> = ({ isInstructorView, initialQuestions, poolElements }) => {
	const [expandedIndexesMap, setExpandedIndexesMap] = useState<{
		[index: number]: boolean;
	}>({});
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
							? poolElements.map((poolElement, i) => {
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
									/>;
							  })
							: initialQuestions.map((initialQuestion, i) => {
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
									/>;
							  })}
					</div>
				</UniversalVelvetLeftBorder>
			</WebtextQuestion>
		</div>
	);
};

export default QuestionDeck;

const styles = css`
	[role='heading'] {
		white-space: nowrap;
		display: flex;
		align-items: flex-start;
		column-gap: 0.75rem;
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
	}
`;
