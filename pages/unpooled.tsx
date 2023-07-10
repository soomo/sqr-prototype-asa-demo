import { useCallback, useState } from 'react';
import { css } from '@emotion/core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import themes, { ThemeProvider } from '@soomo/lib/styles/themes';

import TopBar from '../components/TopBar';
import TopPageInfo from '../components/TopPageInfo';
import BottomPageInfoAndLinks from '../components/BottomPageInfoAndLinks';

import type { NextPage } from 'next';

const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});

const Unpooled: NextPage = () => {
	const [isInstructorView, setInstructorView] = useState(false);
	const [numAttempted, setNumAttempted] = useState(0);
	const [numCorrect, setNumCorrect] = useState(0);
	const router = useRouter();

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
				</div>
			</TopBar>
			<main css={mainStyles}>
				<TopPageInfo
					pageTitle="Unpooled Sample Page"
					numAttempted={numAttempted}
					numCorrect={numCorrect}
					total={1} // TODO
				/>
				<Text
					online
					element={{
						body: `
						<h1>UNPOOLED Sample Page</h1>
						<p>Pop-up typewriter crucifix subway tile pork belly quinoa. Meh la croix polaroid prism kinfolk hexagon health goth. Tilde raw denim venmo fanny pack, tumeric man bun lyft roof party bodega boys thundercats lumbersexual kombucha ramps. Small batch pug PBR&B taxidermy. Ramps Brooklyn tbh hoodie. Ennui pug yr selfies leggings, keytar next level Brooklyn craft beer blackbird spyplane edison bulb tacos tonx bespoke humblebrag. Plaid la croix live-edge snackwave salvia.</p>
					`
					}}
				/>
				<Text
					online
					element={{
						body: `
						<p>Small batch seitan 3 wolf moon, cliche squid helvetica photo booth offal typewriter. Shoreditch street art glossier, bodega boys grailed kale chips neutra paleo slow-carb fixie cray. Neutra blackbird spyplane kitsch, tonx kickstarter man bun pabst semiotics iPhone literally ethical sustainable chambray flexitarian. Williamsburg pitchfork cloud bread lyft humblebrag, selvage gorpcore. Messenger bag lumbersexual jianbing godard gluten-free pabst thundercats microdosing bespoke listicle. Portland +1 gatekeep asymmetrical austin. Beard tumblr venmo semiotics, activated charcoal portland vibecession cold-pressed food truck crucifix.</p>
						<p>Put a bird on it irony distillery man braid, gochujang raclette solarpunk crucifix gluten-free cold-pressed air plant pabst ugh. Copper mug brunch listicle hell of viral hella flexitarian grailed etsy. Gastropub cold-pressed vape banh mi marfa pinterest. Tonx migas raclette keffiyeh.</p>
					`
					}}
				/>
				<BottomPageInfoAndLinks
					numAttempted={numAttempted}
					numCorrect={numCorrect}
					total={1} // TODO
					onBackLinkClick={() => {
						router.back();
					}}
					onNextLinkClick={undefined}
				/>
			</main>
		</ThemeProvider>
	);
};
export default Unpooled;

const mainStyles = css`
	padding-top: 1.5rem;
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
