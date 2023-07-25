import { css } from '@emotion/core';
import { useMediaBreakpoint } from '@soomo/lib/hooks';

import { breakpoints } from '@soomo/lib/styles/themes';

const TopBar: React.FC = ({ children }) => {
	const isMobile = useMediaBreakpoint('max-width', 'sm');

	return (
		<header css={styles}>
			<div className="header-content">
				<h1>{isMobile ? 'SQR' : 'Single Question Reset'} Prototype</h1>
				{children}
			</div>
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
	align-items: center;
	padding-left: 143px;
	border-bottom: 1px solid #bebebe;
	background: #ece9e9;

	@media (max-width: ${breakpoints.small}) {
		padding: 0;
		justify-content: space-between;
	}

	h1 {
		font-size: 20px;
		font-weight: 600;

		@media (max-width: ${breakpoints.small}) {
			font-size: 16px;
		}
	}

	.header-content {
		display: flex;
		align-items: center;
		column-gap: 4rem;

		@media (max-width: ${breakpoints.small}) {
			--mask-width: 1.5rem;
			padding: 0 1rem;
			-webkit-mask-image: linear-gradient(
				to right,
				transparent,
				black var(--mask-width),
				black calc(100% - var(--mask-width)),
				transparent
			);
			overflow-x: auto;
			white-space: nowrap;
			column-gap: 2rem;
		}
	}
`;
