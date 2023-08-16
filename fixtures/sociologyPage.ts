import type { Page, PageElement } from '../types';

const elements: PageElement[] = [
	{
		familyId: 'question-deck-in',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'in'
	},
	{
		familyId: 'qd-pool-1',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'qd-pool-1-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'The Full Faith and Credit Clause was intended for which purpose?',
				choices: [
					{
						familyId: 'qd-pool-1-mcq-1-choice-1',
						body: 'ensuring that states respect the laws of other states',
						correct: true,
						rejoinder:
							'The Full Faith and Credit Clause was intended to ensure that states recognize and honor the laws, public records, and judicial decisions of other states.'
					},
					{
						familyId: 'qd-pool-1-mcq-1-choice-2',
						body: 'delegating to Congress the power to regulate interstate commerce',
						rejoinder:
							'The Commerce Clause, not the Full Faith and Credit Clause, gives Congress the power to regulate interstate commerce.'
					},
					{
						familyId: 'qd-pool-1-mcq-1-choice-3',
						body: 'giving Congress the power to impeach the president',
						rejoinder:
							'Article II, section 4, not the Full Faith and Credit Clause, establishes Congress’s power to impeach the president.'
					},
					{
						familyId: 'qd-pool-1-mcq-1-choice-4',
						body: 'specifying the supremacy of national law over state law',
						rejoinder:
							'The Supremacy Clause, not the Full Faith and Credit Clause, establishes the supremacy of national law over state law.'
					}
				]
			},
			{
				familyId: 'qd-pool-1-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the purpose of the Full Faith and Credit Clause?',
				choices: [
					{
						familyId: 'qd-pool-1-mcq-2-choice-1',
						body: "to guarantee that states recognize each other's court rulings",
						correct: true,
						rejoinder:
							'The Full Faith and Credit Clause was intended to ensure that states recognize and honor the laws, public records, and judicial decisions of other states.'
					},
					{
						familyId: 'qd-pool-1-mcq-2-choice-2',
						body: 'to grant the President the authority to issue executive orders',
						rejoinder:
							'The Executive Power Clause, not the Full Faith and Credit Clause, grants presidents leeway in exercising executive authority over the national government.'
					},
					{
						familyId: 'qd-pool-1-mcq-2-choice-3',
						body: 'to empower the national government to regulate trade between the states',
						rejoinder:
							'The Commerce Clause, not the Full Faith and Credit Clause, establishes the national government’s power to regulate business and trade.'
					},
					{
						familyId: 'qd-pool-1-mcq-2-choice-4',
						body: 'to enable Congress to make laws that are essential for carrying out its other powers',
						rejoinder:
							'The Necessary and Proper Clause, not the Full Faith and Credit Clause, allows Congress to do whatever is “necessary and proper” to carry out its powers.'
					}
				]
			},
			{
				familyId: 'qd-pool-1-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'What does the Full Faith and Credit Clause require?',
				choices: [
					{
						familyId: 'qd-pool-1-mcq-3-choice-1',
						body: "that individual states accept each other's judicial proceedings.",
						correct: true,
						rejoinder:
							'The Full Faith and Credit Clause was intended to ensure that states recognize and honor the laws, public records, and judicial decisions of other states.'
					},
					{
						familyId: 'qd-pool-1-mcq-3-choice-2',
						body: 'that only Congress has the authority to declare war against other nations.',
						rejoinder:
							'The Declaration of War provision, not the Full Faith and Credit Clause, requires that only Congress has the authority to formally declare war against other nations.'
					},
					{
						familyId: 'qd-pool-1-mcq-3-choice-3',
						body: 'that the Constitution is recognized as the supreme law of the land.',
						rejoinder:
							'The Supremacy Clause, not the Full Faith and Credit Clause, requires that the Constitution be seen as the supreme law of the land.'
					},
					{
						familyId: 'qd-pool-1-mcq-3-choice-4',
						body: 'that the President is responsible for enforcing laws of the United States.',
						rejoinder:
							'The Executive Power Clause, not the Full Faith and Credit Clause, requires the President to be responsible for enforcing laws of the United States.'
					}
				]
			}
		]
	},
	{
		familyId: 'qd-pool-2',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'qd-pool-2-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'What does Article VI of the Constitution state?',
				choices: [
					{
						familyId: 'qd-pool-2-mcq-1-choice-1',
						body: 'that the Constitution is the highest set of laws in the country',
						correct: true,
						rejoinder:
							'Article VI states that the Constitution is considered the supreme law of the land.'
					},
					{
						familyId: 'qd-pool-2-mcq-1-choice-2',
						body: 'that the Declaration of Independence overrules the Constitution',
						rejoinder:
							'Article VI of the Constitution gives overruling power to another entity, not the Declaration of Independence.'
					},
					{
						familyId: 'qd-pool-2-mcq-1-choice-3',
						body: 'that the Constitution gives complete rule to the states',
						rejoinder:
							'Article VI of the Constitution gives complete rule to another entity, not individual states.'
					},
					{
						familyId: 'qd-pool-2-mcq-1-choice-4',
						body: 'that Congress has the power to change the Constitution',
						rejoinder:
							'Article VI of the Constitution gives power to another entity, not Congress. '
					}
				]
			},
			{
				familyId: 'qd-pool-2-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the purpose of Article VI of the U.S. Constitution?',
				choices: [
					{
						familyId: 'qd-pool-2-mcq-2-choice-1',
						body: 'to establish the supremacy of the Constitution over all other laws and agreements',
						correct: true,
						rejoinder:
							'Article VI states that the Constitution is considered the supreme law of the land.'
					},
					{
						familyId: 'qd-pool-2-mcq-2-choice-2',
						body: 'to declare the separation of the American colonies from Great Britain',
						rejoinder:
							'The purpose of the Declaration of Independence, not Article VI of the Constitution, is to declare the separation of the American colonies from Great Britain.'
					},
					{
						familyId: 'qd-pool-2-mcq-2-choice-3',
						body: "to govern and regulate activities within each individual state's borders",
						rejoinder:
							"The purpose of the state laws, not Article VI of the Constitution, is to govern and regulate activities within each individual state's borders."
					},
					{
						familyId: 'qd-pool-2-mcq-2-choice-4',
						body: 'to interpret the laws to resolve legal disputes and ensure justice',
						rejoinder:
							'The purpose of Judicial Review, not Article VI of the Constitution, is to interpret the laws to resolve legal disputes and ensure justice.'
					}
				]
			},
			{
				familyId: 'qd-pool-2-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the Supremacy Clause?',
				choices: [
					{
						familyId: 'qd-pool-2-mcq-3-choice-1',
						body: 'a provision that declares the Constitution as the highest legal authority in the country',
						correct: true,
						rejoinder:
							'The Supremacy Clause, found in Article VI, states that the Constitution is considered the supreme law of the land.'
					},
					{
						familyId: 'qd-pool-2-mcq-3-choice-2',
						body: 'the document that proclaims the freedom and self-governance of the thirteen American territories',
						rejoinder:
							'The Declaration of Independence, not the Supremacy Clause, proclaims the freedom and self-governance of the thirteen American territories.'
					},
					{
						familyId: 'qd-pool-2-mcq-3-choice-3',
						body: 'the clause that empowers Congress to regulate business activities among the states',
						rejoinder:
							'The Commerce Clause, not the Supremacy Clause, empowers Congress to regulate business activities among the states.'
					},
					{
						familyId: 'qd-pool-2-mcq-3-choice-4',
						body: 'the article that specifies the grounds and process for removing the President from office',
						rejoinder:
							'The Reasons for Impeachment provision, not the Supremacy Clause, specifies the grounds and process for removing the President from office.'
					}
				]
			}
		]
	},
	{
		familyId: 'question-deck-out',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'out'
	}
];

const page: Page = {
	familyId: 'ciag-page',
	elements
};

export default page;
