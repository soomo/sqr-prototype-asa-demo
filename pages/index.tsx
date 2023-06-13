import { css } from '@emotion/core';
import TopBar from '../components/TopBar';

export default () => (
	<>
		<header>
			<TopBar />
		</header>
		<main css={styles}>
			<h1>Sample Page</h1>
		</main>
	</>
);

const styles = css`
	padding-top: 20px;
	max-width: 800px;
	margin: 0 auto;

	h1 {
		font-weight: 800;
	}
`;
