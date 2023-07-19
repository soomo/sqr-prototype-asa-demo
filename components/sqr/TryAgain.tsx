import { css } from '@emotion/core';

import { breakpoints } from '@soomo/lib/styles/themes';

import { buttonStyles } from './studentViewStyles';

interface Props {
	onReset: () => void;
	isRequestInProgress: boolean;
}

const TryAgain: React.VFC<Props> = ({ onReset, isRequestInProgress, ...rest }) => {
	return (
		<div css={styles} {...rest}>
			<span>
				The Try Again button will test your knowledge with a similar multiple-choice question.
			</span>
			<button onClick={onReset} css={buttonStyles}>
				{isRequestInProgress ? 'Resetting...' : 'Try Again'}
			</button>
		</div>
	);
};

export default TryAgain;

const styles = css`
	display: grid;
	padding: 1rem 0 0.5rem;
	grid-template-columns: 1fr auto;
	align-items: center;
	column-gap: 5rem;
	font-size: 14px;
	line-height: 18px;
	color: #545454;

	@media (max-width: ${breakpoints.small}) {
		grid-template-columns: unset;
		grid-template-rows: auto auto;
		row-gap: 1rem;
	}
`;
