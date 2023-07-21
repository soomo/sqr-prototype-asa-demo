import { css } from '@emotion/core';
import { useMediaBreakpoint } from '@soomo/lib/hooks';

import { breakpoints } from '@soomo/lib/styles/themes';

const TopBar: React.FC = ({ children }) => {
	const isMobile = useMediaBreakpoint('max-width', 'sm');

	return (
		<header css={styles}>
			<h1>{isMobile ? 'SQR' : 'Single Question Reset'} Prototype</h1>
			{children}
		</header>
	);
};
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
		padding: 0 1rem;
		column-gap: 0.5rem;
		justify-content: space-between;
	}

	h1 {
		font-size: 20px;
		font-weight: 600;

		@media (max-width: ${breakpoints.small}) {
			font-size: 16px;
		}
	}
`;
