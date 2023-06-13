import { css } from '@emotion/core';
import dynamic from 'next/dynamic';
import TopBar from '../components/TopBar';
import themes, { ThemeProvider } from '@soomo/lib/styles/themes';
const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});

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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut condimentum ex. Quisque sagittis mauris mauris, quis tempor dolor maximus sit amet. Pellentesque in lacinia mi, nec vehicula dui. Aliquam urna sapien, vestibulum nec erat vestibulum, suscipit semper lorem. Donec in magna a leo convallis aliquet. In hac habitasse platea dictumst. Donec cursus tortor lectus, vel tristique enim convallis id. Aliquam sit amet orci eu turpis luctus varius ut in tortor. Suspendisse potenti. Maecenas vel nunc in mauris ullamcorper hendrerit. Ut euismod venenatis odio, ac sagittis neque venenatis vel. Mauris sit amet nunc sed ante auctor mollis ut at mi. Vivamus ac dolor vestibulum, ullamcorper metus vel, cursus mi. Praesent ultricies vitae arcu eu elementum. Nam tincidunt tellus et tristique hendrerit.</p>
						<p>Praesent arcu lectus, aliquam id faucibus nec, varius non est. Praesent et leo eu purus venenatis bibendum ut eget metus. Curabitur eget quam non quam mattis semper vel quis sapien. Aenean sodales velit nec fermentum blandit. Proin congue id nisi sit amet aliquam. Phasellus blandit risus vel iaculis congue. Aenean tempor arcu libero, euismod ultricies sapien mollis sit amet. Donec in consequat dolor. Ut id finibus sem. Aenean quis nisi ante. Duis interdum placerat erat, at dignissim dolor laoreet quis. Proin mollis nunc risus, id suscipit dolor auctor iaculis.</p>
						<p>Pellentesque elementum tincidunt dolor. Nunc lacinia in libero non efficitur. In vitae arcu eros. Donec tincidunt purus in est porttitor ornare. Sed commodo lacus a dolor molestie, a tincidunt tellus molestie. Cras tempor lacus in libero luctus, nec consequat dui pharetra. Nulla at nunc mauris. Cras nisi dui, dictum et maximus non, ultricies nec nisl. Fusce vel imperdiet lectus. Aliquam vel dolor sem. In non sodales ex. Fusce lacus ligula, mollis sit amet vestibulum et, sodales ac ante.</p>
						<p>Morbi lacinia sit amet lectus vitae ullamcorper. Maecenas cursus mi nisi, non vulputate tellus tincidunt sit amet. Integer lobortis lacus posuere elit sollicitudin sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget ex nunc. Vestibulum in lectus tincidunt, elementum lectus non, molestie erat. Vestibulum commodo ullamcorper libero eu vulputate. Pellentesque quam tellus, viverra eu leo ac, malesuada imperdiet sapien.</p>
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
