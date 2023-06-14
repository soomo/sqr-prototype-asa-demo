import { css } from '@emotion/core';
import dynamic from 'next/dynamic';
import TopBar from '../components/TopBar';
import themes, { ThemeProvider } from '@soomo/lib/styles/themes';
const Text = dynamic(() => import('@soomo/lib/components/pageElements').then((m) => m.Text), {
	ssr: false
});
const SQRQuestionDeck = dynamic(
	() => import('../components/SQRQuestionDeck').then((m) => m.default),
	{ ssr: false }
);

const qdQuestions = [
	{
		body: 'Which of the following statements about the amendment process is accurate?',
		choices: [
			{
				body: 'The failure of the Equal Rights Amendment shows the difficulty of modifying the Constitution.',
				correct: true
			},
			{
				body: 'It is much easier for an amendment to move past the proposal stage than it is for it to move past the ratification stage.'
			},
			{
				body: 'The amendment process is especially responsive to minority groups.'
			},
			{
				body: 'Amendment language is designed to be concise and unambiguous.'
			}
		]
	},
	{
		body: 'The Constitution includes intentionally vague language. Why might this be considered an advantage during the amendment process?',
		choices: [
			{
				body: 'Because it provides flexibility, endurance, and diversity in interpretation and application.',
				correct: true
			},
			{
				body: 'Because it provides an ultimate relief valve for resolving political conflict in our democratic society.'
			},
			{
				body: 'Because it provides fundamental principles that inform and unify national and state government.'
			},
			{
				body: 'Because it preserves the integrity and brevity of the document.'
			}
		]
	},
	{
		body: 'The constitutional amendment process requires near-unanimous agreement. Why might this be considered a disadvantage?',
		choices: [
			{
				body: 'Because it makes national government slow to respond to problems concerning political process and public policy.',
				correct: true
			},
			{
				body: 'Because it provides an ultimate relief valve for resolving political conflict in our democratic society.'
			},
			{
				body: 'Because it provides fundamental principles that inform and unify national and state government.'
			},
			{
				body: 'Because it preserves the integrity and brevity of the document.'
			}
		]
	}
].map((baseQuestion, i) => {
	const choices = baseQuestion.choices.map((baseChoice, j) => {
		return {
			body: baseChoice.body,
			is_correct: baseChoice.correct ?? false,
			family_id: `question-${i}-choice-${j}`,
			id: i * 100 + j,
			metadata: {},
			type: 'NG::Soomo::MC::Choice' as const,
			rejoinder: ''
		};
	});
	return {
		body: baseQuestion.body,
		choices,
		disabled: false,
		id: i,
		metadata: {},
		family_id: `question-${i}`,
		version: `${i}`,
		title: '',
		type: 'NG::Soomo::MC::Question' as const
	};
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
						<p>Praesent arcu lectus, aliquam id faucibus nec, varius non est. Praesent et leo eu purus venenatis bibendum ut eget metus. Curabitur eget quam non quam mattis semper vel quis sapien. Aenean sodales velit nec fermentum blandit. Proin congue id nisi sit amet aliquam. Phasellus blandit risus vel iaculis congue. Aenean tempor arcu libero, euismod ultricies sapien mollis sit amet. Donec in consequat dolor. Ut id finibus sem. Aenean quis nisi ante. Duis interdum placerat erat, at dignissim dolor laoreet quis. Proin mollis nunc risus, id suscipit dolor auctor iaculis.</p>
					`
				}}
			/>
			<SQRQuestionDeck questions={qdQuestions} />
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
