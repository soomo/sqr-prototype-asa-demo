import { css } from '@emotion/core';

import { QuestionChoices } from '@soomo/lib/components/shared/Question';
import { breakpoints } from '@soomo/lib/styles/themes';

import type { FullMCChoice, RedactedMCChoice } from '../../types';
import type { QuestionChoice } from '@soomo/lib/types/WebtextManifest';

type Props = Omit<Parameters<typeof QuestionChoices>[0], 'choices'> & {
	choices: (RedactedMCChoice | FullMCChoice)[];
};

const Choices: React.VFC<Props> = ({
	choices: rawChoices,
	disabled,
	onChangeSelectedChoice,
	questionFamilyId,
	selectedChoiceFamilyId,
	...rest
}) => {
	const choices = rawChoices.map(
		(ch, i) =>
			({
				body: ch.body,
				id: i,
				family_id: ch.familyId
			} as QuestionChoice)
	);
	return (
		<div css={styles} {...rest}>
			<QuestionChoices
				choices={choices}
				disabled={disabled}
				onChangeSelectedChoice={onChangeSelectedChoice}
				questionFamilyId={questionFamilyId}
				selectedChoiceFamilyId={selectedChoiceFamilyId}
			/>
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
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: flex-start;
		column-gap: 1.5rem;
		row-gap: 1rem;
		font-size: 18px;
		line-height: 22px;

		@media (max-width: ${breakpoints.small}) {
			font-size: 15px;
		}

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
