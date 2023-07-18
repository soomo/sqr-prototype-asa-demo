import { css } from '@emotion/core';

import { QuestionPrompt } from '@soomo/lib/components/shared/Question';

interface Props {
	body: string;
}

const Prompt: React.FC<Props> = ({ children, body, ...rest }) => {
	return (
		<div css={styles} {...rest}>
			{children}
			<QuestionPrompt body={body} />
		</div>
	);
};

export default Prompt;

const styles = css``;
