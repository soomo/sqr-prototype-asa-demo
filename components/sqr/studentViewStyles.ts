import { css } from '@emotion/core';

const choicesStyles = css`
	margin-top: 1rem;
`;

const rejoinderStyles = css`
	// counteract left padding from UniversalVelvetLeftBorder
	margin-left: -50px;
	padding-left: 50px;
`;

const dividerStyles = css`
	margin: 2rem 0 1.25rem;
	border-top: 1px solid #ccc;
	border-bottom: none;
`;

const buttonStyles = css`
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
`;

export { choicesStyles, rejoinderStyles, dividerStyles, buttonStyles };
