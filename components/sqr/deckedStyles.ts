import { css } from '@emotion/core';

import { breakpoints } from '@soomo/lib/styles/themes';

export const deckedStyles = css`
	border: 1px solid #c9c9c9;
	border-radius: 0.5rem;

	.prompt-and-pivotar {
		position: relative;
		display: grid;
		padding: 1rem 1.5rem;
		grid-template-columns: 1fr auto;
		align-items: flex-start;
		column-gap: 1.5rem;
		font: inherit;
		border: none;
		background: none;
		cursor: pointer;
		text-align: initial;

		@media (max-width: ${breakpoints.small}) {
			padding-right: 1rem;
			column-gap: 0.5rem;
		}

		&[aria-expanded='false'][data-answered='true'] .correctness-and-prompt .question-body {
			color: rgba(0, 0, 0, 0.5);
		}

		.correctness {
			position: absolute;
			left: -13px;
			display: inline-flex;
			margin-right: 0.75rem;
			align-items: baseline;
			font-size: 18px;
			line-height: 30px;
			font-weight: 500;
			font-style: italic;
			column-gap: 0.5rem;

			svg {
				width: 27px;
				height: 27px;
			}
		}

		// QuestionPrompt inner div
		.question-body {
			margin: 0;
		}
	}
`;

export const choicesStyles = css`
	padding-left: 1.5rem;
	padding-right: 2rem;
`;

export const rejoinderStyles = css`
	margin-right: 2rem;
	padding-left: 1.5rem;

	@media (max-width: ${breakpoints.small}) {
		margin-right: 1.25rem;
	}
`;
