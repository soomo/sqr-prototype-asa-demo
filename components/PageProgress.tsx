import { useContext } from 'react';

import { PageContext } from './Layout';

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
	const { isInstructorView } = useContext(PageContext);
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
