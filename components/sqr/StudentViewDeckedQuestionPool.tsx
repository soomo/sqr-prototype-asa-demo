import type { MCQuestion } from '../../types';

interface Props {
	initialQuestion: MCQuestion;
	expanded?: boolean;
	onToggleExpanded: () => void;
}

const StudentViewDeckedQuestionPool: React.VFC<Props> = ({
	initialQuestion,
	onToggleExpanded,
	expanded
}) => {
	return <></>;
};

export default StudentViewDeckedQuestionPool;
