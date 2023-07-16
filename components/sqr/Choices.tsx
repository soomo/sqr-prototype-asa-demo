import { css } from '@emotion/core';
import { QuestionChoices } from '@soomo/lib/components/shared/Question';

type Props = Parameters<typeof QuestionChoices>[0];

const Choices: React.VFC<Props> = (props) => {
	return (
		<div css={styles}>
			<QuestionChoices {...props} />
		</div>
	);
};
export default Choices;

const styles = css`
	fieldset {
		margin: 0;
		padding: 0;
		border: none;
	}

	.question-choices {
		padding: 0 2rem;
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: flex-start;
		column-gap: 1.5rem;
		row-gap: 1rem;
		font-size: 18px;
		line-height: 22px;

		> div {
			display: contents;
		}

		input[type='radio'] {
			width: 1.5rem;
			height: 1.5rem;
			accent-color: #5f01df;
		}
	}
`;
