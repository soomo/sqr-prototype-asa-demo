import { css } from '@emotion/core';

export default () => (
	<div css={styles}>
		<h1>Single Question Reset Prototype</h1>
	</div>
);

const styles = css`
	background: #ece9e9;
	height: 52px;
	display: flex;
	align-items: center;
	padding-left: 143px;
	border-bottom: 1px solid #bebebe;

	h1 {
		font-size: 20px;
		font-weight: 600;
	}
`;
