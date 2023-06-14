import { useCallback, useState } from 'react';
import { css } from '@emotion/core';
import { RiCheckboxMultipleFill as QuestionDeckIcon } from 'react-icons/ri';

import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import { QuestionType, WebtextQuestion } from '@soomo/lib/components/shared/Question';

import SQRQuestionDeckMCQuestion from './SQRQuestionDeckMCQuestion';

import type { MCQuestionElement } from '@soomo/lib/types';

interface Props {
	questions: MCQuestionElement[];
}

const SQRQuestionDeck: React.VFC<Props> = ({ questions }) => {
	const [expandedQuestionsMap, setExpandedQuestionsMap] = useState<{
		[familyId: FamilyId]: boolean;
	}>({});

	const handleToggleExpanded = useCallback((familyId: string) => {
		setExpandedQuestionsMap((oldExpandedQuestions) => {
			return { ...oldExpandedQuestions, [familyId]: !oldExpandedQuestions[familyId] };
		});
	}, []);

	return (
		<WebtextQuestion css={styles}>
			<UniversalVelvetLeftBorder>
				<QuestionType>
					<QuestionDeckIcon className="question-deck-icon" aria-hidden="true" />
					<span>{questions.length} Multiple-Choice Questions</span>
				</QuestionType>
				<div className="questions">
					{questions.map((question) => (
						<SQRQuestionDeckMCQuestion
							key={question.family_id}
							expanded={expandedQuestionsMap[question.family_id]}
							question={question}
							onToggleExpanded={handleToggleExpanded}
						/>
					))}
				</div>
			</UniversalVelvetLeftBorder>
		</WebtextQuestion>
	);
};

export default SQRQuestionDeck;

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
