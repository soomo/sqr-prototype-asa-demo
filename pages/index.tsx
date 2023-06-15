import { css } from '@emotion/core';
import dynamic from 'next/dynamic';

import themes, { ThemeProvider } from '@soomo/lib/styles/themes';

import TopBar from '../components/TopBar';
import sqrQuestionPools from '../fixtures/sqrQuestionPools';

const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});
const SQRQuestionDeck = dynamic(
	() => import('../components/SQRQuestionDeck').then((m) => m.default),
	{ ssr: false }
);

export default () => (
	<ThemeProvider theme={themes['universal_velvet']}>
		<header>
			<TopBar />
		</header>
		<main css={styles}>
			<Text
				online
				element={{
					body: `
						<h1>Sample Page</h1>
						<p>Praesent arcu lectus, aliquam id faucibus nec, varius non est. Praesent et leo eu purus venenatis bibendum ut eget metus. Curabitur eget quam non quam mattis semper vel quis sapien. Aenean sodales velit nec fermentum blandit. Proin congue id nisi sit amet aliquam. Phasellus blandit risus vel iaculis congue. Aenean tempor arcu libero, euismod ultricies sapien mollis sit amet. Donec in consequat dolor. Ut id finibus sem. Aenean quis nisi ante. Duis interdum placerat erat, at dignissim dolor laoreet quis. Proin mollis nunc risus, id suscipit dolor auctor iaculis.</p>
					`
				}}
			/>
			<SQRQuestionDeck questions={sqrQuestionPools.map(({ pool }) => pool[0])} />
			<Text
				online
				element={{
					body: `
						<p>Pellentesque elementum tincidunt dolor. Nunc lacinia in libero non efficitur. In vitae arcu eros. Donec tincidunt purus in est porttitor ornare. Sed commodo lacus a dolor molestie, a tincidunt tellus molestie. Cras tempor lacus in libero luctus, nec consequat dui pharetra. Nulla at nunc mauris. Cras nisi dui, dictum et maximus non, ultricies nec nisl. Fusce vel imperdiet lectus. Aliquam vel dolor sem. In non sodales ex. Fusce lacus ligula, mollis sit amet vestibulum et, sodales ac ante.</p>
					`
				}}
			/>
		</main>
	</ThemeProvider>
);

const styles = css`
	padding-top: 20px;
	max-width: 800px;
	margin: 0 auto;
`;
