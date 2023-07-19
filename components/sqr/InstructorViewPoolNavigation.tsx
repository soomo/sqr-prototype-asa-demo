import { css } from '@emotion/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { breakpoints } from '@soomo/lib/styles/themes';

interface Props {
	numQuestions: number;
	activeIndex: number;
	onPrevious: () => void;
	onNext: () => void;
}

const InstructorViewPoolNavigation: React.VFC<Props> = ({
	activeIndex,
	numQuestions,
	onPrevious,
	onNext,
	...rest
}) => {
	return (
		<div css={styles} {...rest}>
			<span className="label">
				Browse items in this pool <wbr />({numQuestions} total)
			</span>
			<div className="explanatory-text">
				The item assigned to each student for their initial attempt is randomized, and students will
				receive a different item from the pool if they reset. Visit our <a href="#">Help Center</a>{' '}
				to learn more.
			</div>
			<button aria-label="previous pool question" disabled={activeIndex === 0} onClick={onPrevious}>
				<FaChevronLeft size={17} />
			</button>
			<button
				aria-label="next pool question"
				disabled={activeIndex === numQuestions - 1}
				onClick={onNext}>
				<FaChevronRight size={17} />
			</button>
		</div>
	);
};

export default InstructorViewPoolNavigation;

const styles = css`
	max-width: 600px;
	display: grid;
	margin: 0 0 0 auto;
	padding: 0;
	grid-template-columns: 1fr auto auto;
	justify-items: flex-end;
	align-items: center;

	.label {
		font-weight: 500;
		line-height: 1;

		@media (max-width: ${breakpoints.small}) {
			white-space: nowrap;
			text-align: end;
		}
	}

	.explanatory-text {
		padding: 0.5rem 0 0;
		grid-row: 2;
		grid-column: span 3;
		font-size: 14px;
		color: #464646;
		line-height: 18px;
		text-align: end;
	}

	a,
	a:visited {
		color: #5f01df;
	}

	button {
		margin: 0;
		padding: 0.25rem;
		line-height: 0;
		color: #5f01df;
		background: none;
		border: 1px solid #5f01df;
		cursor: pointer;

		&[aria-label^='previous'] {
			grid-column: 2;
			margin-left: 0.75rem;
			border-radius: 3px 0 0 3px;
		}

		&[aria-label^='next'] {
			grid-column: 3;
			margin-left: -1px;
			border-radius: 0 3px 3px 0;
		}

		&:disabled {
			opacity: 0.25;
			cursor: not-allowed;
		}
	}
`;
