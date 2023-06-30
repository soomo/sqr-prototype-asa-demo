import { css } from '@emotion/core';
import dynamic from 'next/dynamic';

import themes, { ThemeProvider } from '@soomo/lib/styles/themes';

import TopBar from '../components/TopBar';
import sqrQuestionPools from '../fixtures/sqrQuestionPools';
import { NextPage } from 'next';
import { useCallback, useState } from 'react';

const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});
const SQRQuestionDeck = dynamic(
	() => import('../components/SQRQuestionDeck').then((m) => m.default),
	{ ssr: false }
);

export type InterventionType = null | 'auto-open' | 'spotlight';

const Index: NextPage = () => {
	const [isInstructorView, setInstructorView] = useState(false);
	const [interventionType, setInterventionType] = useState<InterventionType>(null);

	const handleToggleView = useCallback(() => {
		setInstructorView((old) => !old);
	}, []);

	return (
		<ThemeProvider theme={themes['universal_velvet']}>
			<TopBar>
				<div css={knobsStyles}>
					<button onClick={handleToggleView}>
						Switch to {isInstructorView ? 'Student' : 'Instructor'} View
					</button>
					<label>
						Intervention Type
						<select
							value={interventionType ?? ''}
							onChange={(e) =>
								setInterventionType(e.target.value as 'auto-open' | 'spotlight' | null)
							}>
							<option value="">none</option>
							<option value="auto-open">automatically open next question if correct</option>
							<option value="spotlight">spotlight when scrolling away</option>
						</select>
					</label>
				</div>
			</TopBar>
			<main css={mainStyles}>
				<Text
					online
					element={{
						body: `
						<h1>Sample Page</h1>
						<p>Praesent arcu lectus, aliquam id faucibus nec, varius non est. Praesent et leo eu purus venenatis bibendum ut eget metus. Curabitur eget quam non quam mattis semper vel quis sapien. Aenean sodales velit nec fermentum blandit. Proin congue id nisi sit amet aliquam. Phasellus blandit risus vel iaculis congue. Aenean tempor arcu libero, euismod ultricies sapien mollis sit amet. Donec in consequat dolor. Ut id finibus sem. Aenean quis nisi ante. Duis interdum placerat erat, at dignissim dolor laoreet quis. Proin mollis nunc risus, id suscipit dolor auctor iaculis.</p>
					`
					}}
				/>
				<SQRQuestionDeck
					poolElements={sqrQuestionPools}
					isInstructorView={isInstructorView}
					interventionType={interventionType}
				/>
				<Text
					online
					element={{
						body: `
						<p>Pellentesque elementum tincidunt dolor. Nunc lacinia in libero non efficitur. In vitae arcu eros. Donec tincidunt purus in est porttitor ornare. Sed commodo lacus a dolor molestie, a tincidunt tellus molestie. Cras tempor lacus in libero luctus, nec consequat dui pharetra. Nulla at nunc mauris. Cras nisi dui, dictum et maximus non, ultricies nec nisl. Fusce vel imperdiet lectus. Aliquam vel dolor sem. In non sodales ex. Fusce lacus ligula, mollis sit amet vestibulum et, sodales ac ante.</p>
						<p>Maecenas ac lectus scelerisque arcu tincidunt laoreet. Fusce id maximus velit, ac pharetra quam. Sed id tellus tempor, congue tellus vel, tincidunt mi. Quisque nec erat sed orci cursus ultricies. Sed nulla lorem, ultricies in tempus ut, sodales efficitur urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ante et lectus hendrerit interdum in sed eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et volutpat erat.</p>
						<p>Vivamus sem lacus, ornare eu condimentum accumsan, posuere eu neque. Nunc mauris neque, facilisis ut velit ac, semper pretium justo. Fusce massa libero, egestas a lorem sed, consequat consequat erat. Nam ac lorem id massa ornare tincidunt. Aliquam a nunc semper, condimentum sem sollicitudin, vulputate erat. Praesent massa orci, fermentum at sapien ac, vehicula pharetra nunc. Nunc facilisis nisl fringilla congue cursus. Praesent pretium sem vel ex faucibus aliquet. Suspendisse porttitor massa dolor, sit amet tempor metus placerat scelerisque. Cras sed facilisis elit. Ut tincidunt id velit at venenatis. Suspendisse leo lectus, congue at tellus nec, aliquet accumsan felis. Pellentesque porttitor maximus turpis nec faucibus.</p>
						<p>Nulla scelerisque massa arcu, a dignissim massa hendrerit finibus. Vivamus quis laoreet nunc, quis semper justo. Phasellus sem velit, semper in risus at, placerat placerat mauris. Ut faucibus pulvinar nisl in tincidunt. Aenean egestas massa vel leo sagittis euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent iaculis pretium lorem, ac rutrum libero dapibus vitae. Maecenas aliquet metus vitae mi accumsan convallis. Nullam et commodo diam. Nam sed laoreet augue, sit amet pretium mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vitae lectus ornare, dictum purus at, viverra metus. Ut lacinia lorem semper tristique rutrum. Proin in libero mi. Sed eu odio id ex tempor consequat.</p>
					`
					}}
				/>
			</main>
		</ThemeProvider>
	);
};
export default Index;

const mainStyles = css`
	padding-top: 20px;
	max-width: 800px;
	margin: 0 auto;
`;

const knobsStyles = css`
	display: flex;
	margin-left: 4rem;
	align-items: center;
	column-gap: 2rem;

	label {
		font-weight: 500;
	}

	select {
		margin-left: 1rem;
	}
`;
