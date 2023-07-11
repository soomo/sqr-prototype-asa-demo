export interface PageProgressProps {
	numAttempted: number;
	numCorrect: number;
	total: number;
}

const PageProgress: React.VFC<PageProgressProps> = ({
	numAttempted,
	numCorrect,
	total,
	...rest
}) => {
	return (
		<span {...rest}>
			{/* FIXME */}
			{/* On this page: {numAttempted} of {total} attempted ({Math.round((numAttempted / total) * 100)}
			%) | {numCorrect} of {total} correct ({Math.round((numCorrect / total) * 100)}%) */}
			On this page: {numAttempted} of N attempted (0%) | {numCorrect} of N correct (0%)
		</span>
	);
};

export default PageProgress;
