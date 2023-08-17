import { css } from '@emotion/core';

import PageProgress, { PageProgressProps } from './PageProgress';

import type { Page } from '../types';

interface Props extends PageProgressProps {
	page: Page;
}

const TopPageInfo: React.VFC<Props> = ({ page, numAttempted, numCorrect, total, ...rest }) => {
	const { chapterName, chapterNumber, pageName, pageNumber } = page;
	return (
		<div css={styles} {...rest}>
			<span>
				<span className="chapter-number">{chapterNumber}</span>
				{chapterName} /{' '}
				<span className="page-title">
					Page {chapterNumber}.{pageNumber} {pageName}
				</span>
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
	line-height: 20px;
	color: #757575;

	.chapter-number {
		display: inline-block;
		margin-right: 0.5rem;
		padding-right: 0.5rem;
		border-right: 1px solid #e6e6e6;
	}

	.page-title {
		color: #000;
	}

	hr {
		border: 0;
		margin: 1.25rem 0;
		border-bottom: 3px solid #e9e9e9;
	}
`;
