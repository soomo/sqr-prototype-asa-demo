import { css } from '@emotion/core';

type HTMLString = string;

interface Props {
	rejoinder: HTMLString;
}

const Rejoinder: React.VFC<Props> = ({ rejoinder, ...rest }) => {
	return (
		<div css={styles} {...rest}>
			<div dangerouslySetInnerHTML={{ __html: rejoinder }} />
		</div>
	);
};

export default Rejoinder;

const styles = css``;
