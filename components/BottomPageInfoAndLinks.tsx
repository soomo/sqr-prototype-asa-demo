import { css } from '@emotion/core';

import PageProgress, { PageProgressProps } from './PageProgress';

interface Props extends PageProgressProps {
	onBackLinkClick?: () => void;
	onNextLinkClick?: () => void;
}

const BottomPageInfoAndLinks: React.VFC<Props> = ({
	numAttempted,
	numCorrect,
	total,
	onBackLinkClick,
	onNextLinkClick,
	isInstructorView
}) => {
	return (
		<div css={styles}>
			<PageProgress
				numAttempted={numAttempted}
				numCorrect={numCorrect}
				total={total}
				isInstructorView={isInstructorView}
			/>

			{onBackLinkClick && (
				<a href="#" onClick={onBackLinkClick} className="page-back-link">
					Back
				</a>
			)}
			{onNextLinkClick && (
				<a href="#" onClick={onNextLinkClick} className="page-forward-link">
					Next
				</a>
			)}
		</div>
	);
};

export default BottomPageInfoAndLinks;

const styles = css`
	display: grid;
	margin-top: 4rem;
	padding: 1.5rem 0 4.5rem;
	border-top: 6px solid #e9e9e9;
	grid-template-columns: 1fr auto auto;
	align-items: center;

	a {
		display: inline-block;
		font-size: 22px;
		color: #000;

		&.page-forward-link:not([aria-disabled='true']) {
			font-weight: 600;
		}
	}

	.page-forward-link {
		margin-left: 2.5rem;
	}
`;
