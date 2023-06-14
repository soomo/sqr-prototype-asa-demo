import { css } from '@emotion/core';
import { QuestionChoices, QuestionPrompt } from '@soomo/lib/components/shared/Question';
import { MCQuestionElement } from '@soomo/lib/types';
import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import { useCallback, useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const pivotarIconProps = {
	size: 21,
	css: css`
		color: #5f01df;
	`,
	'aria-hidden': 'true' as const
};

interface Props {
	question: MCQuestionElement;
	expanded?: boolean;
	onToggleExpanded: (familyId: string) => void;
}

const SQRQuestionDeckMCQuestion: React.VFC<Props> = ({ question, expanded, onToggleExpanded }) => {
	const { family_id, body, choices } = question;
	const contentDivId = `${family_id}-content`;

	const [selectedChoiceFamilyId, setSelectedChoiceFamilyId] = useState<FamilyId | null>(null);

	const handleClick = useCallback(() => {
		onToggleExpanded(family_id);
	}, [family_id, onToggleExpanded]);

	const handleChangeSelectedChoice = useCallback((selectedChoiceFamilyId: FamilyId) => {
		setSelectedChoiceFamilyId(selectedChoiceFamilyId);
	}, []);

	return (
		<div css={styles}>
			<button
				className="prompt-and-pivotar"
				aria-expanded={expanded}
				aria-controls={contentDivId}
				onClick={handleClick}>
				<QuestionPrompt body={body} />
				{expanded ? <FaChevronUp {...pivotarIconProps} /> : <FaChevronDown {...pivotarIconProps} />}
			</button>
			<div id={contentDivId} className="content" hidden={!expanded}>
				<QuestionChoices
					questionFamilyId={family_id}
					choices={choices}
					disabled={false}
					onChangeSelectedChoice={handleChangeSelectedChoice}
					selectedChoiceFamilyId={selectedChoiceFamilyId}
				/>
				<hr />
				<button disabled={selectedChoiceFamilyId == null}>Save</button>
			</div>
		</div>
	);
};

export default SQRQuestionDeckMCQuestion;

const styles = css`
	padding: 1rem 1rem 1.5rem;
	border: 1px solid #c9c9c9;
	border-radius: 0.5rem;

	.prompt-and-pivotar {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: flex-start;
		column-gap: 1.5rem;
		font: inherit;
		border: none;
		background: none;
		cursor: pointer;
		text-align: initial;

		// QuestionPrompt inner div
		.question-body {
			margin: 0;
		}
	}

	.content {
		padding: 1rem 0.5rem 0;

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

			> div {
				display: contents;
			}

			input[type='radio'] {
				width: 1.5rem;
				height: 1.5rem;
				accent-color: #5f01df;
			}
		}

		hr {
			margin: 1.5rem 0 1.25rem;
			border-top: 1px solid #ccc;
			border-bottom: none;
		}

		button {
			display: flex;
			margin-left: auto;
			padding: 1rem 1.5rem;
			border: 2px solid;
			border-radius: 6px;
			font: inherit;
			font-size: 18px;
			line-height: 20px;
			font-weight: 500;
			cursor: pointer;

			&:disabled {
				border-color: #585858;
				color: #585858;
			}

			&:not(:disabled) {
				background: #5f01df;
				border-color: transparent;
				color: #fff;
			}

			&:focus {
				outline-width: 2px;
				outline-style: solid;
				outline-offset: 2px;
			}
		}
	}
`;
