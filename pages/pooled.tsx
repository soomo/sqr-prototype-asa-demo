import { useCallback, useMemo, useState } from 'react';

import { css } from '@emotion/core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import themes, { ThemeProvider } from '@soomo/lib/styles/themes';

import TopBar from '../components/TopBar';
import TopPageInfo from '../components/TopPageInfo';
import BottomPageInfoAndLinks from '../components/BottomPageInfoAndLinks';
import pooledPage from '../fixtures/pooledPage';

import type { NextPage } from 'next';

const PageElements = dynamic(() => import('../components/PageElements').then((m) => m.default), {
	ssr: false
});

const AriaLiveAnnouncer = dynamic(
	() => import('@soomo/lib/components/AriaLiveAnnouncer').then((m) => m.default),
	{
		ssr: false
	}
);

const Pooled: NextPage = () => {
	const [isInstructorView, setInstructorView] = useState(false);
	const [numAttempted, setNumAttempted] = useState(0);
	const [numCorrect, setNumCorrect] = useState(0);
	const router = useRouter();

	const questionCount = useMemo(() => {
		return pooledPage.elements.filter((el) => el.type !== 'NG::Soomo::Text').length;
	}, []);

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
					pageTitle="Pooled Sample Page"
					numAttempted={numAttempted}
					numCorrect={numCorrect}
					total={questionCount}
					isInstructorView={isInstructorView}
				/>
				<PageElements elements={pooledPage.elements} isInstructorView={isInstructorView} />
				<BottomPageInfoAndLinks
					numAttempted={numAttempted}
					numCorrect={numCorrect}
					total={questionCount}
					onBackLinkClick={undefined}
					onNextLinkClick={() => {
						router.push('/unpooled');
					}}
					isInstructorView={isInstructorView}
				/>
			</main>
			<AriaLiveAnnouncer />
		</ThemeProvider>
	);
};
export default Pooled;

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
