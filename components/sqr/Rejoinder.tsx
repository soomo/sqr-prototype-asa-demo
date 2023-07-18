import { css } from '@emotion/core';
import { forwardRef } from 'react';

type HTMLString = string;

interface Props {
	rejoinder: HTMLString;
}

const Rejoinder = forwardRef<HTMLElement, Props>(({ rejoinder, ...rest }, ref) => {
	return (
		<div css={styles} {...rest}>
			<span ref={ref} tabIndex={-1} />
			<div dangerouslySetInnerHTML={{ __html: rejoinder }} />
		</div>
	);
});
Rejoinder.displayName = 'Rejoinder';

export default Rejoinder;

const styles = css``;
