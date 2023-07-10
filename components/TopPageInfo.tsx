import { css } from '@emotion/core';

import PageProgress, { PageProgressProps } from './PageProgress';

interface Props extends PageProgressProps {
	pageTitle: string;
}

const TopPageInfo: React.VFC<Props> = ({ pageTitle, numAttempted, numCorrect, total }) => {
	return (
		<div css={styles}>
			<span>
				Sample Chapter / <span className="page-title">{pageTitle}</span>
			</span>
			<PageProgress
				numAttempted={numAttempted}
				numCorrect={numCorrect}
				total={total}
				css={css`
					color: #757575;
					font-size: 14px;
				`}
			/>
			<hr />
		</div>
	);
};
export default TopPageInfo;

const styles = css`
	display: grid;
	grid-template-rows: auto auto;
	row-gap: 0.25rem;
	font-size: 14px;
	color: #757575;

	.page-title {
		color: #000;
	}

	hr {
		border: 0;
		margin: 1.25rem 0;
		border-bottom: 3px solid #e9e9e9;
	}
`;
