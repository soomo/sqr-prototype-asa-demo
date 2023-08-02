import { css } from '@emotion/core';

export const buttonStyles = css`
	display: flex;
	margin-left: auto;
	padding: 1rem 1.5rem;
	flex-direction: column;
	align-items: center;
	row-gap: 0.25rem;
	border: 2px solid;
	border-radius: 6px;
	font: inherit;
	font-size: 18px;
	line-height: 20px;
	font-weight: 500;
	background: none;

	&:disabled {
		border-color: #585858;
		color: #585858;
	}

	&:not(:disabled) {
		background: #5f01df;
		border-color: transparent;
		color: #fff;
		cursor: pointer;
	}

	&:focus-visible {
		outline-width: 2px;
		outline-style: solid;
		outline-offset: 2px;
		outline-color: #5f01df;
	}
`;
