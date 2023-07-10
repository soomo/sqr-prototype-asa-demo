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
			On this page: {numAttempted} of {total} attempted ({Math.round((numAttempted / total) * 100)}
			%) | {numCorrect} of {total} correct ({Math.round((numCorrect / total) * 100)}%)
		</span>
	);
};

export default PageProgress;
