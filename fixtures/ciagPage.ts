import type { Page, PageElement } from '../types';

const elements: PageElement[] = [
	{
		familyId: 'ciag-text-1',
		type: 'NG::Soomo::Text',
		body: `
			<h1>The Constitution Leaves Room for Interpretation</h1>
			<p>The Framers used vague language to induce compromise over legislative, executive, and judicial power. They also worked to find common ground concerning national and state power. The result of their efforts is embodied in Articles IV and VI of the Constitution. If we read these sections together, it may appear to be less compromise than contradiction. The Full Faith and Credit Clause of Article IV requires that states recognize and respect the laws of other states in the Union:</p>
			<blockquote>
				<p>Full faith and credit shall be given in each state to the public acts, records, and judicial proceedings of every other state. And the Congress may by general laws prescribe the manner in which such acts, records, and proceedings shall be proved, and the effect <span class="footnote-ref-tail">thereof.<a class="footnote-ref" name="fn-538a1c4a-bb67-11ec-aabe-fef25800cc54" href="#538a1c4a-bb67-11ec-aabe-fef25800cc54">16</a></span></p>
			</blockquote>
			<p>Your driver’s license represents a good example of the contemporary relevance of this clause of the Constitution. Other states recognize the legitimacy of your license. As long as you have a valid license from any state in the U.S., you are free to drive cars anywhere in the country. The national debate over medical marijuana also demonstrates the relevance of the <a class="showtip indexable" title="Common term for the provision in Article IV, section 1, of the U.S. Constitution that requires each state to recognize and honor the laws, public records, and judicial decisions of any other state.">Full Faith and Credit Clause</a>. Are states required by the Constitution to allow the possession of marijuana by individuals holding a legally valid prescription from another state?</p>
			<p>Article IV was intended to protect the power of the states to make laws that are seen as legitimate across the nation. By contrast, Article VI establishes the supremacy of the Constitution and the laws and treaties of the national government. This is known as the <a class="showtip indexable" title="Common term for the provision in Article VI of the U.S. Constitution establishing that national law overrides state law in cases where the two conflict.">Supremacy Clause</a>:</p>
			<blockquote>
				<p>This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the contrary <span class="footnote-ref-tail">notwithstanding.<a class="footnote-ref" name="fn-538a205a-bb67-11ec-aabe-fef25800cc54" href="#538a205a-bb67-11ec-aabe-fef25800cc54">17</a></span></p>
			</blockquote>
		`
	},
	{
		familyId: 'ciag-question-deck-in',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'in'
	},
	{
		familyId: 'ciag-qd-pool-1',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'ciag-qd-pool-1-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'The Full Faith and Credit Clause was intended for which purpose?',
				choices: [
					{
						familyId: 'ciag-qd-pool-1-mcq-1-choice-1',
						body: 'ensuring that states respect the laws of other states',
						correct: true,
						rejoinder:
							'The Full Faith and Credit Clause was intended to ensure that states recognize and honor the laws, public records, and judicial decisions of other states.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-1-choice-2',
						body: 'delegating to Congress the power to regulate interstate commerce',
						rejoinder:
							'The Commerce Clause, not the Full Faith and Credit Clause, gives Congress the power to regulate interstate commerce.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-1-choice-3',
						body: 'giving Congress the power to impeach the president',
						rejoinder:
							'Article II, section 4, not the Full Faith and Credit Clause, establishes Congress’s power to impeach the president.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-1-choice-4',
						body: 'specifying the supremacy of national law over state law',
						rejoinder:
							'The Supremacy Clause, not the Full Faith and Credit Clause, establishes the supremacy of national law over state law.'
					}
				]
			},
			{
				familyId: 'ciag-qd-pool-1-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the purpose of the Full Faith and Credit Clause?',
				choices: [
					{
						familyId: 'ciag-qd-pool-1-mcq-2-choice-1',
						body: "to guarantee that states recognize each other's court rulings",
						correct: true,
						rejoinder:
							'The Full Faith and Credit Clause was intended to ensure that states recognize and honor the laws, public records, and judicial decisions of other states.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-2-choice-2',
						body: 'to grant the President the authority to issue executive orders',
						rejoinder:
							'The Executive Power Clause, not the Full Faith and Credit Clause, grants presidents leeway in exercising executive authority over the national government.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-2-choice-3',
						body: 'to empower the national government to regulate trade between the states',
						rejoinder:
							'The Commerce Clause, not the Full Faith and Credit Clause, establishes the national government’s power to regulate business and trade.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-2-choice-4',
						body: 'to enable Congress to make laws that are essential for carrying out its other powers',
						rejoinder:
							'The Necessary and Proper Clause, not the Full Faith and Credit Clause, allows Congress to do whatever is “necessary and proper” to carry out its powers.'
					}
				]
			},
			{
				familyId: 'ciag-qd-pool-1-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'What does the Full Faith and Credit Clause require?',
				choices: [
					{
						familyId: 'ciag-qd-pool-1-mcq-3-choice-1',
						body: "that individual states accept each other's judicial proceedings.",
						correct: true,
						rejoinder:
							'The Full Faith and Credit Clause was intended to ensure that states recognize and honor the laws, public records, and judicial decisions of other states.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-3-choice-2',
						body: 'that only Congress has the authority to declare war against other nations.',
						rejoinder:
							'The Declaration of War provision, not the Full Faith and Credit Clause, requires that only Congress has the authority to formally declare war against other nations.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-3-choice-3',
						body: 'that the Constitution is recognized as the supreme law of the land.',
						rejoinder:
							'The Supremacy Clause, not the Full Faith and Credit Clause, requires that the Constitution be seen as the supreme law of the land.'
					},
					{
						familyId: 'ciag-qd-pool-1-mcq-3-choice-4',
						body: 'that the President is responsible for enforcing laws of the United States.',
						rejoinder:
							'The Executive Power Clause, not the Full Faith and Credit Clause, requires the President to be responsible for enforcing laws of the United States.'
					}
				]
			}
		]
	},
	{
		familyId: 'ciag-qd-pool-2',
		type: 'NG::Soomo::MC::QuestionPool',
		questions: [
			{
				familyId: 'ciag-qd-pool-2-mcq-1',
				type: 'NG::Soomo::MC::Question',
				body: 'What does Article VI of the Constitution state?',
				choices: [
					{
						familyId: 'ciag-qd-pool-2-mcq-1-choice-1',
						body: 'that the Constitution is the highest set of laws in the country',
						correct: true,
						rejoinder:
							'Article VI states that the Constitution is considered the supreme law of the land.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-1-choice-2',
						body: 'that the Declaration of Independence overrules the Constitution',
						rejoinder:
							'Article VI of the Constitution gives overruling power to another entity, not the Declaration of Independence.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-1-choice-3',
						body: 'that the Constitution gives complete rule to the states',
						rejoinder:
							'Article VI of the Constitution gives complete rule to another entity, not individual states.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-1-choice-4',
						body: 'that Congress has the power to change the Constitution',
						rejoinder:
							'Article VI of the Constitution gives power to another entity, not Congress. '
					}
				]
			},
			{
				familyId: 'ciag-qd-pool-2-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the purpose of Article VI of the U.S. Constitution?',
				choices: [
					{
						familyId: 'ciag-qd-pool-2-mcq-2-choice-1',
						body: 'to establish the supremacy of the Constitution over all other laws and agreements',
						correct: true,
						rejoinder:
							'Article VI states that the Constitution is considered the supreme law of the land.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-2-choice-2',
						body: 'to declare the separation of the American colonies from Great Britain',
						rejoinder:
							'The purpose of the Declaration of Independence, not Article VI of the Constitution, is to declare the separation of the American colonies from Great Britain.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-2-choice-3',
						body: "to govern and regulate activities within each individual state's borders",
						rejoinder:
							"The purpose of the state laws, not Article VI of the Constitution, is to govern and regulate activities within each individual state's borders."
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-2-choice-4',
						body: 'to interpret the laws to resolve legal disputes and ensure justice',
						rejoinder:
							'The purpose of Judicial Review, not Article VI of the Constitution, is to interpret the laws to resolve legal disputes and ensure justice.'
					}
				]
			},
			{
				familyId: 'ciag-qd-pool-2-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'What is the Supremacy Clause?',
				choices: [
					{
						familyId: 'ciag-qd-pool-2-mcq-3-choice-1',
						body: 'a provision that declares the Constitution as the highest legal authority in the country',
						correct: true,
						rejoinder:
							'The Supremacy Clause, found in Article VI, states that the Constitution is considered the supreme law of the land.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-3-choice-2',
						body: 'the document that proclaims the freedom and self-governance of the thirteen American territories',
						rejoinder:
							'The Declaration of Independence, not the Supremacy Clause, proclaims the freedom and self-governance of the thirteen American territories.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-3-choice-3',
						body: 'the clause that empowers Congress to regulate business activities among the states',
						rejoinder:
							'The Commerce Clause, not the Supremacy Clause, empowers Congress to regulate business activities among the states.'
					},
					{
						familyId: 'ciag-qd-pool-2-mcq-3-choice-4',
						body: 'the article that specifies the grounds and process for removing the President from office',
						rejoinder:
							'The Reasons for Impeachment provision, not the Supremacy Clause, specifies the grounds and process for removing the President from office.'
					}
				]
			}
		]
	},
	{
		familyId: 'ciag-question-deck-out',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'out'
	},
	{
		familyId: 'ciag-text-2',
		type: 'NG::Soomo::Text',
		body: '<p>From this section, you should have a better understanding of how the vague language in the Constitution was used to create compromise, and how this balances the difficult amending process.</p>'
	},
	{
		familyId: 'ciag-text-3',
		type: 'NG::Soomo::Text',
		body: `
			<div class="footnotes">
				<p><a class="footnote-anchor" name="538a1c4a-bb67-11ec-aabe-fef25800cc54" href="#fn-538a1c4a-bb67-11ec-aabe-fef25800cc54">16</a> U.S. Const. art. IV.</p>
				<p><a class="footnote-anchor" name="538a205a-bb67-11ec-aabe-fef25800cc54" href="#fn-538a205a-bb67-11ec-aabe-fef25800cc54">17</a> U.S. Const. art. VI.</p>
			</div>
		`
	}
];

const page: Page = {
	textbookName: 'Central Ideas in American Government',
	chapterName: 'The Founding and the Constitution',
	chapterNumber: 1,
	pageName: 'The Constitution Leaves Room for Interpretation',
	pageNumber: 18,
	familyId: 'ciag-page',
	elements
};

export default page;
