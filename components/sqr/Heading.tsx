import { QuestionType } from '@soomo/lib/components/shared/Question';

import MCQuestionIcon from './MCQuestionIcon';
import { forwardRef } from 'react';

const Heading = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<QuestionType ref={ref}>
			<MCQuestionIcon />
			Multiple-Choice Question
		</QuestionType>
	);
});
Heading.displayName = 'Heading';

export default Heading;
