import { forwardRef } from 'react';

import { css } from '@emotion/core';

import { breakpoints } from '@soomo/lib/styles/themes';

import type { FullMCChoice } from '../../types';

type HTMLString = string;

interface Props {
	rejoinder: HTMLString;
	correct: boolean;
	correctChoice?: FullMCChoice;
}

const Rejoinder = forwardRef<HTMLElement, Props>(
	({ rejoinder, correct, correctChoice, ...rest }, ref) => {
		return (
			<div css={styles} {...rest}>
				<span ref={ref} tabIndex={-1} />
				<div>
					<span className="correctness" data-correct={correct}>
						{correct ? 'Correct.' : 'Incorrect.'}
					</span>{' '}
					<span dangerouslySetInnerHTML={{ __html: rejoinder }} />
					{!correct && correctChoice && (
						<div css={correctChoiceStyles}>
							<div className="correct-choice-body">
								<b>Correct Answer:</b>{' '}
								<span dangerouslySetInnerHTML={{ __html: correctChoice.body }} />
							</div>
							<div
								className="correct-choice-rejoinder"
								dangerouslySetInnerHTML={{ __html: correctChoice.rejoinder }}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
);
Rejoinder.displayName = 'Rejoinder';

export default Rejoinder;

const styles = css`
	margin-top: 1.5rem;
	padding: 1rem 2rem 1.5rem 0;
	font-size: 18px;
	line-height: 30px;
	font-style: italic;
	color: #5f5f5f;
	background: #fff;

	@media (max-width: ${breakpoints.small}) {
		font-size: 16px;
		line-height: 23px;
	}

	.correctness {
		font-weight: 500;

		&[data-correct='true'] {
			color: #007e0c;
		}

		&[data-correct='false'] {
			color: #e70000;
		}
	}
`;

const correctChoiceStyles = css`
	.correct-choice-body,
	.correct-choice-rejoinder {
		margin-top: 1rem;
	}

	b {
		font-weight: 500;
	}
`;
