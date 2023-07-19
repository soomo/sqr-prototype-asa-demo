import { css } from '@emotion/core';

import { breakpoints } from '@soomo/lib/styles/themes';

const TopBar: React.FC = ({ children }) => (
	<header css={styles}>
		<h1>Single Question Reset Prototype</h1>
		{children}
	</header>
);
export default TopBar;

const styles = css`
	position: sticky;
	top: 0;
	z-index: 10000;
	height: 52px;
	display: flex;
	padding-left: 143px;
	align-items: center;
	border-bottom: 1px solid #bebebe;
	background: #ece9e9;
	column-gap: 4rem;

	@media (max-width: ${breakpoints.small}) {
		padding-left: 1rem;
		column-gap: 1rem;
	}

	h1 {
		font-size: 20px;
		font-weight: 600;

		@media (max-width: ${breakpoints.small}) {
			font-size: 16px;
		}
	}

	button {
		display: flex;
		padding: 0.5rem 0.75rem;
		border: 2px solid;
		border-radius: 6px;
		font: inherit;
		font-size: 16px;
		line-height: 18px;
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

		@media (max-width: ${breakpoints.small}) {
			padding: 0.25rem 0.25rem;
			font-size: 16px;
		}
	}
`;
