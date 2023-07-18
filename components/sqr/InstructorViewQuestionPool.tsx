import type { MCQuestionPool } from '../../types';

interface Props {
	poolElement: MCQuestionPool;
}

/**
 * Instructor-facing component for a SQR-enabled multiple choice question.
 *
 * Unlike StudentViewQuestionPool, this component *is* pool-depth-aware,
 * as there is no concern about leaking information like subsequent pool items,
 * correct choices, or choice rejoinders to the client.
 */
const InstructorViewQuestionPool: React.VFC<Props> = ({ poolElement }) => {
	return <></>;
};

export default InstructorViewQuestionPool;
