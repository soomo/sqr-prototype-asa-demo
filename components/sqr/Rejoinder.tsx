import { css } from '@emotion/core';
import { forwardRef } from 'react';

type HTMLString = string;

interface Props {
	rejoinder: HTMLString;
	correct: boolean;
}

const Rejoinder = forwardRef<HTMLElement, Props>(({ rejoinder, correct, ...rest }, ref) => {
	return (
		<div css={styles} {...rest}>
			<span ref={ref} tabIndex={-1} />
			<div>
				<span className="correctness" data-correct={correct}>
					{correct ? 'Correct.' : 'Incorrect.'}
				</span>{' '}
				<span dangerouslySetInnerHTML={{ __html: rejoinder }} />
			</div>
		</div>
	);
});
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
