import type { Page, PageElement } from '../types';

const elements: PageElement[] = [
	{
		familyId: 'sociology-question-deck-in',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'in'
	},
	{
		familyId: 'sociology-qd-pool-1',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'sociology-qd-pool-1-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the sociological imagination?',
				choices: [
					{
						familyId: 'sociology-qd-pool-1-mcq-1-choice-1',
						body: 'recognizing how society influences and impacts people',
						correct: true,
						rejoinder:
							'The sociological imagination is the ability to shift perspectives, seeing yourself and others within the context of greater social forces.'
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-1-choice-2',
						body: 'designing new worlds with their own rules and structures',
						rejoinder:
							'While it does take imagination to design a new world, the sociological imagination is about the world we live in, not new worlds we create. '
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-1-choice-3',
						body: 'finding innovative solutions to society’s problems',
						rejoinder:
							'While the sociological imagination could help someone identify solutions to social problems, the sociological imagination focuses on the world as it is, not how it could be. '
					}
				]
			},
			{
				familyId: 'sociology-qd-pool-1-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'How can someone demonstrate a sociological imagination?',
				choices: [
					{
						familyId: 'sociology-qd-pool-1-mcq-2-choice-1',
						body: 'by explaining how social forces influence social reality',
						correct: true,
						rejoinder:
							'The sociological imagination is the ability to shift perspectives, seeing yourself and others within the context of greater social forces.'
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-2-choice-2',
						body: 'by watching how people interact with each other',
						rejoinder:
							'While observing interactions is part of studying sociology, simply seeing what other people do is not demonstrating a sociological imagination.'
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-2-choice-3',
						body: 'by reading books about social forces written by sociologists',
						rejoinder:
							'While reading books can help you develop a sociological imagination, demonstrating a sociological imagination means that you do something with the information that you’ve learned.'
					}
				]
			},
			{
				familyId: 'sociology-qd-pool-1-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'What does the sociological imagination help people see?',
				choices: [
					{
						familyId: 'sociology-qd-pool-1-mcq-3-choice-1',
						body: 'how society shapes the way people experience the world',
						correct: true,
						rejoinder:
							'The sociological imagination is the ability to shift perspectives, seeing yourself and others within the context of greater social forces.'
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-3-choice-2',
						body: 'how many people and institutions are in each society',
						rejoinder:
							'While the sociological imagination does focus on people and institutions within society, it does not focus on how many there are.'
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-3-choice-3',
						body: 'how the ideal society would function and develop',
						rejoinder:
							'While the sociological imagination could help someone identify solutions to social problems, the sociological imagination focuses on the world as it is, not how it could be.'
					}
				]
			}
		]
	},
	{
		familyId: 'sociology-qd-pool-2',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'sociology-qd-pool-2-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'How can using sociological imagination help us navigate the world?',
				choices: [
					{
						familyId: 'sociology-qd-pool-2-mcq-1-choice-1',
						body: 'It helps us recognize similarities and differences in how people experience the world.',
						correct: true,
						rejoinder:
							'In practicing the sociological imagination, we’re better able to relate to other people. The sociological imagination helps us recognize aspects of ourselves in other people while also helping us see that someone’s social reality can be different from our own. '
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-1-choice-2',
						body: 'It provides directions for how we can handle any social interaction or conflict.',
						rejoinder:
							'While the sociological imagination can help us navigate social interactions or conflicts, it does not provide directions for how to do so. '
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-1-choice-3',
						body: 'It emphasizes which interpretation of events and experiences is correct.',
						rejoinder:
							'While the sociological imagination can help us interpret events or experiences, it does not value one interpretation over any other. '
					}
				]
			},
			{
				familyId: 'sociology-qd-pool-2-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'How can using sociological imagination help us better relate to other people?',
				choices: [
					{
						familyId: 'sociology-qd-pool-2-mcq-2-choice-1',
						body: 'by helping us develop empathy for how other people experience the world',
						correct: true,
						rejoinder:
							'In practicing the sociological imagination, we’re better able to relate to other people. The sociological imagination helps us recognize aspects of ourselves in other people while also helping us see that someone’s social reality can be different from our own.'
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-2-choice-2',
						body: 'by emphasizing the ways we are the same and ignoring our differences',
						rejoinder:
							'While practicing sociological imagination can help us recognize aspects of ourselves in other people, it also helps us understand the ways in which we experience the world differently.'
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-2-choice-3',
						body: 'by providing a script that allows us to avoid conflicts and disagreements',
						rejoinder:
							'While practicing sociological imagination can help us navigate conflicts and disagreements, it is not possible to avoid all conflicts and disagreements.'
					}
				]
			},
			{
				familyId: 'sociology-qd-pool-2-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'How can using sociological imagination benefit our relationships with other people?',
				choices: [
					{
						familyId: 'sociology-qd-pool-2-mcq-3-choice-1',
						body: 'by promoting a better understanding of each person’s social reality',
						correct: true,
						rejoinder:
							'In practicing the sociological imagination, we’re better able to relate to other people. The sociological imagination helps us recognize aspects of ourselves in other people while also helping us see that someone’s social reality can be different from our own.'
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-3-choice-2',
						body: 'by reinforcing the rules for how to interact with other people',
						rejoinder:
							'While the sociological imagination can help us navigate social interactions, it does not provide rules for how to do so. '
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-3-choice-3',
						body: 'by creating shared understanding of how every person should act and behave',
						rejoinder:
							'While the sociological imagination can help us understand our actions and behaviors along with those of other people, it does not indicate that all actions and behaviors should be the same.'
					}
				]
			}
		]
	},
	{
		familyId: 'sociology-question-deck-out',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'out'
	},
	{
		familyId: 'sociology-standalone-qd',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'sociology-standalone-qd-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the difference between macrosociology and microsociology?',
				choices: [
					{
						familyId: 'sociology-standalone-qd-mcq-1-choice-1',
						body: 'Macrosociology studies society on a larger-scale, and microsociology studies smaller interactions.',
						correct: true,
						rejoinder:
							'The difference between macrosociology from microsociology is scale. Microsociology focuses on a smaller scale than macrosociology.'
					},
					{
						familyId: 'sociology-standalone-qd-mcq-1-choice-2',
						body: 'Macrosociology studies the history of society, and microsociology studies the future. ',
						rejoinder:
							'The time period being studied is not what differentiates macrosociology from microsociology.'
					},
					{
						familyId: 'sociology-standalone-qd-mcq-1-choice-3',
						body: 'Macrosociology studies how the economy affects society, and microsociology studies the effect of science.',
						rejoinder:
							'While studying how the economy affects society is one of many possible topics within macrosociology, the effect of science on society does not fall within the focus of microsociology.'
					}
				]
			},
			{
				familyId: 'sociology-standalone-qd-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'How are macrosociology and microsociology different?',
				choices: [
					{
						familyId: 'sociology-standalone-qd-mcq-2-choice-1',
						body: 'Macrosociology focuses on issues of a larger scale than microsociology does.',
						correct: true,
						rejoinder:
							'The difference between macrosociology from microsociology is scale. Macrosociology focuses on a larger scale than microsociology.'
					},
					{
						familyId: 'sociology-standalone-qd-mcq-2-choice-2',
						body: 'Macrosociology focuses on longer-term issues than microsociology does.',
						rejoinder:
							'The time period being studied is not what differentiates macrosociology from microsociology.'
					},
					{
						familyId: 'sociology-standalone-qd-mcq-2-choice-3',
						body: 'Macrosociology focuses on topics like COVID-19, while microsociology focuses on families.',
						rejoinder:
							'The approach to the topic, not the topic itself, is what differentiates macrosociology from microsociology.'
					}
				]
			},
			{
				familyId: 'sociology-standalone-qd-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'How does the focus of microsociology differ from the focus of macrosociology?',
				choices: [
					{
						familyId: 'sociology-standalone-qd-mcq-3-choice-1',
						body: 'Microsociology focuses on issues of a smaller scale than macrosociology does.',
						correct: true,
						rejoinder:
							'The difference between macrosociology from microsociology is scale. Microsociology focuses on a smaller scale than macrosociology.'
					},
					{
						familyId: 'sociology-standalone-qd-mcq-3-choice-2',
						body: 'Microsociology focuses on more scientific issues than macrosociology does.',
						rejoinder:
							'The type of issue is not what differentiates macrosociology from microsociology. Both approaches to sociology can examine scientific issues.'
					},
					{
						familyId: 'sociology-standalone-qd-mcq-3-choice-3',
						body: 'Microsociology focuses on people, while macrosociology focuses on events.',
						rejoinder:
							'The type of issue is not what differentiates macrosociology from microsociology. Both approaches to sociology can examine people and events.'
					}
				]
			}
		]
	}
];

const page: Page = {
	familyId: 'sociology-sociology-page',
	elements
};

export default page;
