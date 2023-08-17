import type { Page, PageElement } from '../types';

const elements: PageElement[] = [
	{
		familyId: 'sociology-text-1',
		type: 'NG::Soomo::Text',
		body: `
			<h1>Imagining Questions</h1>
			<p>Sociology can change the way you see the world. In fact, it’s a discipline dedicated to taking the familiar—the social world we live in—and trying to understand it by looking at it in new ways. In this course, you’ll ask questions about social groups, identity, culture, and why our society is structured the way it is. You’ll also develop and practice skills like critical thinking and data literacy. These skills and this kind of thinking can help us better understand and navigate the social spaces we occupy.</p>
			<h2>The Sociological Imagination</h2>
			<p>The key to building an understanding of the social world is a way of thinking called the sociological imagination. It’s the ability to shift perspectives, seeing yourself and others within the context of greater social forces.</p>
			<p>The concept comes from sociologist C. Wright Mills. In his 1959 book <em>The Sociological Imagination</em>, Mills argued that students and sociologists should approach the task of understanding the world around them by seeing the individual always within the context of social forces. He called on sociologists to be mindful of “... the interplay of man and society, of biography and history, of self and world.” The sociological imagination requires us to step outside of ourselves and consider how our actions shape the society around us—and how that society shapes us in return.</p>
			`
	},
	{
		familyId: 'sociology-image-1',
		type: 'NG::Soomo::Figure',
		payload: `<img src="https://s3.amazonaws.com/assets.soomopublishing.com/courses/Soomosociology/societyaroundus.jpg" alt="" class="webtext-figure-asset webtext-figure-asset-image">`,
		caption:
			'The sociological imagination requires us to step outside of ourselves and consider how our actions shape the society around us—and how that society shapes us in return.',
		credits: 'Getty Images'
	},
	{
		familyId: 'sociology-text-2',
		type: 'NG::Soomo::Text',
		body: `
			<p>It’s through this way of thinking that we can become conscious of things that previously escaped our sight. We can look with fresh eyes at routine actions and beliefs. And we can also recognize aspects of ourselves and our own behavior in the actions and beliefs of people who seem very different. In practicing the sociological imagination, we’re better able to relate to people from different backgrounds and social worlds, and we can begin to see the ways in which our own social worlds are unique and peculiar. In other words, this way of thinking can open our eyes to the social reality experienced by other people. In doing that, it can help us better understand our own.</p>
		`
	},
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
							'While it does take imagination to design a new world, the sociological imagination is about the world we live in, not new worlds we create.'
					},
					{
						familyId: 'sociology-qd-pool-1-mcq-1-choice-3',
						body: 'finding innovative solutions to society’s problems',
						rejoinder:
							'While the sociological imagination could help someone identify solutions to social problems, the sociological imagination focuses on the world as it is, not how it could be.'
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
							'In practicing the sociological imagination, we’re better able to relate to other people. The sociological imagination helps us recognize aspects of ourselves in other people while also helping us see that someone’s social reality can be different from our own.'
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-1-choice-2',
						body: 'It provides directions for how we can handle any social interaction or conflict.',
						rejoinder:
							'While the sociological imagination can help us navigate social interactions or conflicts, it does not provide directions for how to do so.'
					},
					{
						familyId: 'sociology-qd-pool-2-mcq-1-choice-3',
						body: 'It emphasizes which interpretation of events and experiences is correct.',
						rejoinder:
							'While the sociological imagination can help us interpret events or experiences, it does not value one interpretation over any other.'
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
							'While the sociological imagination can help us navigate social interactions, it does not provide rules for how to do so.'
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
		familyId: 'sociology-text-3',
		type: 'NG::Soomo::Text',
		body: `
			<h2>Asking Questions</h2>
			<p>The sociological imagination prepares you to ask many different questions about the social world. You might ask why people in your class act differently online and in person, or what leads fans to dress in similar ways when they all go to the same huge concert, or why LEGO sets marketed to girls tend to emphasize friendship.</p>
			<h3>Micro and Macro</h3>
			<p>Some sociological questions are smaller-scale—for example, the first question just focuses on the students in your class. Other questions are broader, examining larger populations, systems, or structures of society. Studying how toys are marketed for certain genders and examining the behavior of large groups during events are both examples of these larger-scale questions.</p>
			<p>More tightly focused research topics are part of microsociology, the study of relationships and interactions among specific individuals and small groups. Studying microsociology might mean looking at:</p>
			<ul>
				<li>how graduates from your college have fared in the workforce</li>
				<li>how COVID-19 has affected healthcare workers at a local hospital</li>
				<li>whether eating dinner together affects overall levels of conflict in a specific family</li>
			</ul>
			<p>Macrosociology, on the other hand, examines broad social structures, institutions, and problems. It’s large-scale sociology. Studying macrosociology might mean looking at:</p>
			<ul>
				<li>how well U.S. college graduates fare in the workforce</li>
				<li>how COVID-19 has affected healthcare workers nationally</li>
				<li>whether families around the country spend more time together now than they did five years ago</li>
			</ul>
			<p>What distinguishes macrosociology from microsociology? The answer is scale. If you’re “zoomed in” on a particular issue and observing individual people, you’re most likely practicing microsociology. If you’re instead observing large groups of people, then you’re practicing macrosociology. In this course, we’ll examine both the micro and the macro—the small and the large, the particular and the general. Together, they offer a more complete picture of society.</p>
		`
	},
	{
		familyId: 'sociology-image-2',
		type: 'NG::Soomo::Figure',
		caption:
			'Studying one family’s dinner traditions is an example of microsociology; studying the dinner traditions of a whole culture, on the other hand, is an example of macrosociology.',
		credits: 'Adobe',
		payload: `<img src="https://s3.amazonaws.com/assets.soomopublishing.com/courses/Soomosociology/familyatdinner.jpg" alt="" class="webtext-figure-asset webtext-figure-asset-image">`
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
						body: 'Macrosociology studies the history of society, and microsociology studies the future.',
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
	},
	{
		familyId: 'sociology-text-4',
		type: 'NG::Soomo::Text',
		body: '<h2>Looking for Answers</h2>'
	},
	{
		familyId: 'sociology-image-3',
		type: 'NG::Soomo::Figure',
		figurePosition: 'pull-right',
		payload: `<img src="https://s3.amazonaws.com/assets.soomopublishing.com/courses/Soomosociology/excitedcrowd.jpg" alt="" class="webtext-figure-asset webtext-figure-asset-image">`,
		caption:
			'Some sociological theories offer explanations of social behaviors, such as the tendency to behave one way at a crowded concert and a different way walking down a street.',
		credits: 'Nicholas Green'
	},
	{
		familyId: 'sociology-text-5',
		type: 'NG::Soomo::Text',
		body: `
			<p>Like other social scientists, sociologists look for answers by collecting data, analyzing or interpreting it, and then drawing conclusions. Data can take many different forms and be analyzed in many different ways, depending on the researcher and the topic, and we’ll dig into that more in the next chapter. But regardless of the form the data and analysis take, the researcher’s goal is to offer an explanation for some kind of sociological phenomenon. Explanations based on systematically gathered evidence are called <a class="showtip indexable" title="Explanations or interpretations based on systematically gathered evidence.">theories</a>.</p>
			<p>The way we use the word <em>theory</em> in casual conversation can confuse its meaning. A sociological theory isn’t simply a guess (or even an educated guess), because it’s based on an analysis of empirical evidence. You’ll encounter many theories in this course, from explanations of gender inequality in the workforce to explanations of why people behave differently in crowds.</p>
		`
	},
	{
		familyId: 'sociology-text-6',
		type: 'NG::Soomo::Text',
		body: `
			<p>Many of the sociological theories we explore will fit within a larger theoretical framework or perspective. We’ll introduce three main theoretical perspectives on the next two pages.</p>
		`
	}
];

const page: Page = {
	textbookName: 'Sociology: You Are Here',
	chapterName: 'Discovering Sociology',
	chapterNumber: 1,
	pageName: 'Imagining Questions',
	pageNumber: 3,
	familyId: 'sociology-page',
	elements
};

export default page;
