import { useContext } from 'react';

import { css } from '@emotion/core';

import { breakpoints } from '@soomo/lib/styles/themes';

import { buttonStyles } from './buttonStyles';
import { PageContext } from '../Layout';

import type { QuizResponse } from '../../types';

interface Props {
	onReset: () => void;
	isRequestInProgress: boolean;
	quizResponse: QuizResponse;
	correct: boolean;
}

const TryAgain: React.VFC<Props> = ({
	onReset,
	isRequestInProgress,
	quizResponse,
	correct,
	...rest
}) => {
	const { maxAttempts } = useContext(PageContext);
	const hasLimitedAttempts = maxAttempts !== -1;
	const attemptsRemaining = maxAttempts - quizResponse.reset_count - 1;

	if (hasLimitedAttempts && attemptsRemaining <= 0) {
		return (
			<div css={noAttemptsRemainingStyles} {...rest}>
				0 attempts remaining
			</div>
		);
	}

	if (correct && hasLimitedAttempts) {
		return null;
	}

	return (
		<div css={styles} {...rest}>
			<span>
				The Try Again button will test your knowledge with a similar multiple-choice question.
			</span>
			<button
				data-has-limited-attempts={hasLimitedAttempts}
				onClick={onReset}
				css={[buttonStyles, tryAgainButtonStyles]}>
				<span>{isRequestInProgress ? 'Resetting...' : 'Try Again'}</span>
				{hasLimitedAttempts && (
					<small>
						{attemptsRemaining} {attemptsRemaining === 1 ? 'attempt' : 'attempts'} remaining
					</small>
				)}
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
	column-gap: 2rem;
	font-size: 14px;
	line-height: 18px;
	color: #545454;

	@media (max-width: ${breakpoints.small}) {
		grid-template-columns: unset;
		grid-template-rows: auto auto;
		row-gap: 1rem;
	}
`;

const noAttemptsRemainingStyles = css`
	padding: 1rem 0;
	text-align: end;
	color: #545454;
`;

const tryAgainButtonStyles = css`
	display: flex;
	flex-direction: column;
	row-gap: 0;

	&[data-has-limited-attempts='true'] {
		padding: 0.75rem 1.5rem;
	}

	small {
		font-weight: normal;
	}
`;
