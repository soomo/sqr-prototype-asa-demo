import { css } from '@emotion/core';

interface Props {
	numAttempted: number;
	numCorrect: number;
	total: number;
	onBackLinkClick?: () => void;
	onNextLinkClick?: () => void;
}

const BottomPageProgressInfo: React.VFC<Props> = ({
	numAttempted,
	numCorrect,
	total,
	onBackLinkClick,
	onNextLinkClick
}) => {
	return (
		<div css={styles}>
			<span>
				On this page: {numAttempted} of {total} attempted (
				{Math.round((numAttempted / total) * 100)}%) | {numCorrect} of {total} correct (
				{Math.round((numCorrect / total) * 100)}%)
			</span>

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

export default BottomPageProgressInfo;

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
