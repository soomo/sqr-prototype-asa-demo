export interface PageProgressProps {
	numAttempted: number;
	numCorrect: number;
	total: number;
	isInstructorView?: boolean;
}

const PageProgress: React.VFC<PageProgressProps> = ({
	numAttempted,
	numCorrect,
	total,
	isInstructorView,
	...rest
}) => {
	return (
		<span {...rest}>
			{!isInstructorView && (
				<span>
					On this page: {numAttempted} of {total} attempted (
					{Math.round((numAttempted / total) * 100)}
					%) | {numCorrect} of {total} correct ({Math.round((numCorrect / total) * 100)}%)
				</span>
			)}
		</span>
	);
};

export default PageProgress;
