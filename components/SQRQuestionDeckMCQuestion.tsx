import { css } from '@emotion/core';
import { UniversalVelvetLeftBorder } from '@soomo/lib/components/pageElements';
import {
	QuestionChoices,
	QuestionPrompt,
	WebtextQuestion
} from '@soomo/lib/components/shared/Question';
import { MCQuestionElement } from '@soomo/lib/types';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const pivotarIconProps = {
	size: 21,
	css: css`
		color: #5f01df;
	`
};

interface Props {
	question: MCQuestionElement;
	expanded?: boolean;
}

const SQRQuestionDeckMCQuestion: React.VFC<Props> = ({ question, expanded }) => {
	return (
		<div css={styles}>
			<div className="prompt-and-pivotar">
				<QuestionPrompt body={question.body} />
				{expanded ? <FaChevronUp {...pivotarIconProps} /> : <FaChevronDown {...pivotarIconProps} />}
			</div>
		</div>
	);
};

export default SQRQuestionDeckMCQuestion;

const styles = css`
	padding: 1rem;
	border: 1px solid #c9c9c9;
	border-radius: 0.5rem;

	.prompt-and-pivotar {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: flex-start;
		column-gap: 1rem;
	}
`;
