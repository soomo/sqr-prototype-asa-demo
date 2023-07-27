import { useContext } from 'react';

import { css } from '@emotion/core';
import { PiWarningFill } from 'react-icons/pi';

import { buttonStyles } from './buttonStyles';
import { PageContext } from '../Layout';

import type { QuizResponse } from '../../types';

interface Props {
	onClick: () => void;
	quizResponse: QuizResponse;
	disabled?: boolean;
	isRequestInProgress?: boolean;
}

const SaveButton: React.VFC<Props> = ({ onClick, disabled, isRequestInProgress, quizResponse }) => {
	const { maxAttempts } = useContext(PageContext);
	const hasLimitedAttempts = maxAttempts !== -1;
	const attemptsRemaining = maxAttempts - quizResponse.reset_count;

	return (
		<>
			<hr css={dividerStyles} />
			<div css={buttonContainerStyles}>
				{hasLimitedAttempts && (
					<span>
						{attemptsRemaining === 1 && <PiWarningFill size={20} css={warningIconStyles} />}
						{maxAttempts === 1 && 'This is your only attempt.'}
						{maxAttempts > 1 && attemptsRemaining === 1 && 'This is your final attempt.'}
						{maxAttempts > 1 &&
							attemptsRemaining > 1 &&
							`This is your ${numberToOrdinalWord(
								quizResponse.reset_count + 1
							)} of ${maxAttempts} attempts.`}
					</span>
				)}
				<button onClick={onClick} css={buttonStyles} disabled={disabled || isRequestInProgress}>
					{isRequestInProgress ? 'Saving...' : 'Save'}
				</button>
			</div>
		</>
	);
};

export default SaveButton;

const dividerStyles = css`
	margin: 2rem 0 1.25rem;
	border-top: 1px solid #ccc;
	border-bottom: none;
`;

const buttonContainerStyles = css`
	display: grid;
	grid-template-columns: 1fr auto;
	justify-items: flex-end;
	align-items: center;
	column-gap: 1rem;
`;

const warningIconStyles = css`
	display: inline-block;
	vertical-align: sub;
	margin-right: 0.25rem;
	color: #ea9508;
`;

/**
 * Converts a number (e.g. 3) to its ordinal word (e.g. "third").
 *
 * Only supports numbers 1 through 10.
 */
const numberToOrdinalWord = (i: number) => {
	switch (i) {
		case 1:
			return 'first';
		case 2:
			return 'second';
		case 3:
			return 'third';
		case 4:
			return 'fourth';
		case 5:
			return 'fifth';
		case 6:
			return 'sixth';
		case 7:
			return 'seventh';
		case 8:
			return 'eighth';
		case 9:
			return 'ninth';
		case 10:
			return 'tenth';
		default:
			return i;
	}
};
