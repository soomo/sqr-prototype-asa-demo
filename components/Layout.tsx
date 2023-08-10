import { createContext, useCallback, useMemo, useState } from 'react';

import { css } from '@emotion/core';
import { useRouter } from 'next/router';

import themes, { ThemeProvider, breakpoints } from '@soomo/lib/styles/themes';
import { useCustomEventListener } from '@soomo/lib/hooks';
import AriaLiveAnnouncer from '@soomo/lib/components/AriaLiveAnnouncer';

import TopBar from './TopBar';
import TopPageInfo from './TopPageInfo';
import BottomPageInfoAndLinks from './BottomPageInfoAndLinks';
import PageElements from './PageElements';
import { deleteAllQuizResponses } from '../fixtures/database';
import { buttonStyles } from './sqr/buttonStyles';

import type { FamilyId, Page, SQRResetResponse, SQRSaveResponse } from '../types';

interface Props {
	page: Page;
	backUrl?: string;
	nextUrl?: string;
}

interface PageContextType {
	maxAttempts: number;
	isInstructorView: boolean;
}

export const PageContext = createContext<PageContextType>({
	maxAttempts: -1,
	isInstructorView: false
});
PageContext.displayName = 'PageContext';

const Layout: React.VFC<Props> = ({ page, backUrl, nextUrl }) => {
	const [isInstructorView, setInstructorView] = useState(false);
	const [answeredQuestionsMap, setAnsweredQuestionsMap] = useState<
		Record<FamilyId, SQRSaveResponse>
	>({});
	const localStorageMaxAttempts = localStorage.getItem('maxAttempts');
	const [maxAttempts, setMaxAttempts] = useState(
		localStorageMaxAttempts != null ? parseInt(localStorageMaxAttempts, 10) : -1
	);
	const router = useRouter();

	const numAttempted = Object.values(answeredQuestionsMap).filter(Boolean).length;
	const numCorrect = Object.values(answeredQuestionsMap).filter((res) => res.is_correct).length;

	const questionCount = useMemo(() => {
		return page.elements.filter(
			(el) => el.type !== 'NG::Soomo::Text' && el.type !== 'NG::Soomo::QuestionDeck'
		).length;
	}, [page.elements]);

	const handleToggleView = useCallback(() => {
		setInstructorView((old) => !old);
		setAnsweredQuestionsMap({});
	}, []);

	const handleChangeMaxAttempts = useCallback((e) => {
		setMaxAttempts(parseInt(e.target.value, 10));
		localStorage.setItem('maxAttempts', e.target.value);
		deleteAllQuizResponses();
		window.location.reload();
	}, []);

	const handleClearResponses = useCallback(() => {
		deleteAllQuizResponses();
		window.location.reload();
	}, []);

	useCustomEventListener<SQRSaveResponse>('question-saved', (json) => {
		setAnsweredQuestionsMap((old) => ({
			...old,
			[json.pool_family_id]: json
		}));
	});

	useCustomEventListener<SQRResetResponse>('question-reset', (json) => {
		setAnsweredQuestionsMap((old) => {
			const newMap = { ...old };
			delete newMap[json.pool_family_id];
			return newMap;
		});
	});

	return (
		<PageContext.Provider value={{ maxAttempts, isInstructorView }}>
			<ThemeProvider theme={themes['universal_velvet']}>
				<TopBar>
					<div css={knobsStyles}>
						<button onClick={handleToggleView}>
							Switch to {isInstructorView ? 'Student' : 'Instructor'} View
						</button>
						<label>
							Attempts per question
							<select value={maxAttempts} onChange={handleChangeMaxAttempts}>
								<option value="-1">unlimited</option>
								<option value="1">1 attempt</option>
								<option value="2">2 attempts</option>
								<option value="3">3 attempts</option>
							</select>
						</label>
						<button onClick={handleClearResponses}>Clear Responses</button>
					</div>
				</TopBar>
				<main css={mainStyles}>
					<TopPageInfo
						pageTitle={'Sample Page'}
						numAttempted={numAttempted}
						numCorrect={numCorrect}
						total={questionCount}
					/>
					<PageElements elements={page.elements} />
					<BottomPageInfoAndLinks
						numAttempted={numAttempted}
						numCorrect={numCorrect}
						total={questionCount}
						onBackLinkClick={backUrl ? () => router.push(backUrl) : undefined}
						onNextLinkClick={nextUrl ? () => router.push(nextUrl) : undefined}
					/>
				</main>
				<AriaLiveAnnouncer />
			</ThemeProvider>
		</PageContext.Provider>
	);
};
export default Layout;

const mainStyles = css`
	padding-top: 1.5rem;
	max-width: 800px;
	margin: 0 auto;

	@media (max-width: ${breakpoints.small}) {
		width: 90%;
	}
`;

const knobsStyles = css`
	display: flex;
	align-items: center;
	column-gap: 1.5rem;

	button {
		${buttonStyles}
		padding: 0.5rem 0.75rem;
		font-size: 16px;

		@media (max-width: ${breakpoints.small}) {
			padding: 0.25rem 0.5rem;
			font-size: 16px;
		}
	}

	label {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
	}
`;
