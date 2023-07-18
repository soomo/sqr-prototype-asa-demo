import type { MCQuestionPool } from '../../types';

interface Props {
	poolElement: MCQuestionPool;
	expanded?: boolean;
	onToggleExpanded: () => void;
}

const InstructorViewDeckedQuestionPool: React.VFC<Props> = ({
	onToggleExpanded,
	poolElement,
	expanded
}) => {
	return <></>;
};

export default InstructorViewDeckedQuestionPool;
