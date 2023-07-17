import type { Page, PageElement } from '../types';

const elements: PageElement[] = [
	{
		familyId: 'text-1',
		type: 'NG::Soomo::Text',
		body: '<h1>POOLED Sample Page</h1><p>Praesent arcu lectus, aliquam id faucibus nec, varius non est. Praesent et leo eu purus venenatis bibendum ut eget metus. Curabitur eget quam non quam mattis semper vel quis sapien. Aenean sodales velit nec fermentum blandit. Proin congue id nisi sit amet aliquam. Phasellus blandit risus vel iaculis congue. Aenean tempor arcu libero, euismod ultricies sapien mollis sit amet. Donec in consequat dolor. Ut id finibus sem. Aenean quis nisi ante. Duis interdum placerat erat, at dignissim dolor laoreet quis. Proin mollis nunc risus, id suscipit dolor auctor iaculis.</p>'
	},
	// {
	// 	familyId: 'standalone-pool',
	// 	type: 'NG::Soomo::MC::QuestionPool',
	// 	questions: [
	// 		{
	// 			familyId: 'standalone-pool-mcq-1',
	// 			type: 'NG::Soomo::MC::Question',
	// 			body: 'The constitutional amendment process requires near-unanimous agreement. Why might this be considered a disadvantage?',
	// 			choices: [
	// 				{
	// 					familyId: 'standalone-pool-mcq-1-choice-1',
	// 					body: 'Because it makes national government slow to respond to problems concerning political process and public policy.',
	// 					correct: true,
	// 					rejoinder:
	// 						'The constitutional amendment process’s requirement for near-unanimous agreement can make national government slow to respond to policy concerns.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-1-choice-2',
	// 					body: 'Because it provides an ultimate relief valve for resolving political conflict in our democratic society.',
	// 					rejoinder:
	// 						'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-1-choice-3',
	// 					body: 'Because it provides fundamental principles that inform and unify national and state government.',
	// 					rejoinder:
	// 						'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-1-choice-4',
	// 					body: 'Because it preserves the integrity and brevity of the document.',
	// 					rejoinder:
	// 						'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			familyId: 'standalone-pool-mcq-2',
	// 			type: 'NG::Soomo::MC::Question',
	// 			body: "What is one disadvantage of the constitutional amendment process's requirement for near-unanimous agreement?",
	// 			choices: [
	// 				{
	// 					familyId: 'standalone-pool-mcq-2-choice-1',
	// 					body: 'It can make national government slow to respond to policy concerns.',
	// 					correct: true,
	// 					rejoinder:
	// 						"The constitutional amendment process's requirement for near-unanimous agreement can make the national government slow to respond to policy concerns."
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-2-choice-2',
	// 					body: 'It provides an ultimate relief valve for resolving political conflict in our democratic society.',
	// 					rejoinder:
	// 						'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-2-choice-3',
	// 					body: 'It provides a framework of fundamental principles that unifies national and state government.',
	// 					rejoinder:
	// 						'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-2-choice-4',
	// 					body: 'It preserves the integrity and brevity of the document.',
	// 					rejoinder:
	// 						'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			familyId: 'standalone-pool-mcq-3',
	// 			type: 'NG::Soomo::MC::Question',
	// 			body: "What is one way in which the constitutional amendment process's requirement for near-unanimous agreement could be considered a disadvantage?",
	// 			choices: [
	// 				{
	// 					familyId: 'standalone-pool-mcq-3-choice-1',
	// 					body: "It can hinder the national government's ability to respond quickly to policy concerns.",
	// 					correct: true,
	// 					rejoinder:
	// 						"The constitutional amendment process's requirement for near-unanimous agreement can slow the national government's response to policy concerns."
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-3-choice-2',
	// 					body: 'It provides a necessary mechanism for resolving political conflict in our democracy.',
	// 					rejoinder:
	// 						'While the constitutional amendment process is a mechanism for resolving political conflict, the requirement for near-unanimous agreement is not always necessary for this resolution.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-3-choice-3',
	// 					body: 'It provides a framework of fundamental principles that unifies national and state government.',
	// 					rejoinder:
	// 						'While the Constitution does provide a framework of fundamental principles, the requirement for near-unanimous agreement is not always necessary for maintaining this unification.'
	// 				},
	// 				{
	// 					familyId: 'standalone-pool-mcq-3-choice-4',
	// 					body: 'It preserves the integrity and brevity of the document.',
	// 					rejoinder:
	// 						"While the Constitution's amendment process does help preserve the document's integrity and brevity, the requirement for near-unanimous agreement is not necessarily related to this preservation."
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	{
		familyId: 'text-2',
		type: 'NG::Soomo::Text',
		body: '<p>Pellentesque elementum tincidunt dolor. Nunc lacinia in libero non efficitur. In vitae arcu eros. Donec tincidunt purus in est porttitor ornare. Sed commodo lacus a dolor molestie, a tincidunt tellus molestie. Cras tempor lacus in libero luctus, nec consequat dui pharetra. Nulla at nunc mauris. Cras nisi dui, dictum et maximus non, ultricies nec nisl. Fusce vel imperdiet lectus. Aliquam vel dolor sem. In non sodales ex. Fusce lacus ligula, mollis sit amet vestibulum et, sodales ac ante.</p>'
	},
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
				body: 'Which of the following statements about the amendment process is accurate?',
				choices: [
					{
						familyId: 'qd-pool-1-mcq-1-choice-1',
						body: 'The failure of the Equal Rights Amendment shows the difficulty of modifying the Constitution.',
						correct: true,
						rejoinder:
							'The failure of the Equal Rights Amendment provides a contemporary example of how difficult it is to amend the Constitution.'
					},
					{
						familyId: 'qd-pool-1-mcq-1-choice-2',
						body: 'It is much easier for an amendment to move past the proposal stage than it is for it to move past the ratification stage.',
						rejoinder:
							'It is difficult for an amendment to move past the proposal stage; only 33 out of 11,000 amendments have proceeded past this stage. Of these, 27 have been ratified.'
					},
					{
						familyId: 'qd-pool-1-mcq-1-choice-3',
						body: 'The amendment process is especially responsive to minority groups.',
						rejoinder:
							'It is difficult for an amendment to move past the proposal stage; only 33 out of 11,000 amendments have proceeded past this stage. Of these, 27 have been ratified.'
					},
					{
						familyId: 'qd-pool-1-mcq-1-choice-4',
						body: 'Amendment language is designed to be concise and unambiguous.',
						rejoinder: 'Amendment language is designed to be vague and open to interpretation.'
					}
				]
			},
			{
				familyId: 'qd-pool-1-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: 'Here is a multiple-choice question about the amendment process. Which of the following statements below is correct?',
				choices: [
					{
						familyId: 'qd-pool-1-mcq-2-choice-1',
						body: 'The difficulty of amending the Constitution is exemplified by the failure of the Equal Rights Amendment.',
						correct: true,
						rejoinder:
							'The failure of the Equal Rights Amendment shows how challenging it can be to amend the Constitution.'
					},
					{
						familyId: 'qd-pool-1-mcq-2-choice-2',
						body: 'It is easier for amendments to advance past the ratification stage than the proposal stage.',
						rejoinder:
							'It is actually quite difficult for an amendment to move past the proposal stage; out of 11,000 amendments proposed, only 33 have proceeded past this stage, and of these, 27 have been ratified.'
					},
					{
						familyId: 'qd-pool-1-mcq-2-choice-3',
						body: 'The amendment process is particularly sensitive to minority groups.',
						rejoinder:
							'There is no evidence to suggest that the amendment process is any more or less responsive to minority groups than to any other group.'
					},
					{
						familyId: 'qd-pool-1-mcq-2-choice-4',
						body: 'The language of amendments is meant to be short and clear.',
						rejoinder:
							'Amendment language is often intentionally ambiguous and open to interpretation.'
					}
				]
			},
			{
				familyId: 'qd-pool-1-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: 'Which of the following statements about the amendment process is accurate?',
				choices: [
					{
						familyId: 'qd-pool-1-mcq-3-choice-1',
						body: 'The failure of the Equal Rights Amendment shows the difficulty of modifying the Constitution.',
						correct: true,
						rejoinder:
							'The failure of the Equal Rights Amendment provides a contemporary example of how challenging it is to amend the Constitution.'
					},
					{
						familyId: 'qd-pool-1-mcq-3-choice-2',
						body: 'It is much easier for an amendment to move past the proposal stage than it is for it to move past the ratification stage.',
						rejoinder:
							'In reality, amendments face significant challenges even at the proposal stage. Out of 11,000 amendments proposed, only 33 have proceeded past this stage, and of these, 27 have been ratified.'
					},
					{
						familyId: 'qd-pool-1-mcq-3-choice-3',
						body: 'The amendment process is especially responsive to minority groups.',
						rejoinder:
							'There is no evidence to suggest that minority groups have a greater or lesser influence on the amendment process than any other group.'
					},
					{
						familyId: 'qd-pool-1-mcq-3-choice-4',
						body: 'Amendment language is designed to be concise and unambiguous.',
						rejoinder:
							'Amendment language is often intentionally ambiguous and open to interpretation.'
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
				body: 'The Constitution includes intentionally vague language. Why might this be considered an advantage during the amendment process?',
				choices: [
					{
						familyId: 'qd-pool-2-mcq-1-choice-1',
						body: 'Because it provides flexibility, endurance, and diversity in interpretation and application.',
						correct: true,
						rejoinder:
							'The Constitution’s vague language can be considered an advantage because it provides flexibility, endurance, and diversity in interpretation and application.'
					},
					{
						familyId: 'qd-pool-2-mcq-1-choice-2',
						body: 'Because it provides an ultimate relief valve for resolving political conflict in our democratic society.',
						rejoinder:
							'While this is certainly an advantage of the constitutional amendment process, the Constitution’s vague language does not provide an ultimate relief valve for resolving political conflict.'
					},
					{
						familyId: 'qd-pool-2-mcq-1-choice-3',
						body: 'Because it provides fundamental principles that inform and unify national and state government.',
						rejoinder:
							'While this is certainly an advantage of the constitutional amendment process, the Constitution’s vague language does not provide an overarching framework of fundamental principles.'
					},
					{
						familyId: 'qd-pool-2-mcq-1-choice-4',
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							'While this is certainly an advantage of the constitutional amendment process, the Constitution’s vague language does not necessarily preserve the integrity or brevity of the document.'
					}
				]
			},
			{
				familyId: 'qd-pool-2-mcq-2',
				type: 'NG::Soomo::MC::Question',
				body: "Which of the following statements accurately explains why the Constitution's intentionally vague language might be considered an advantage during the amendment process?",
				choices: [
					{
						familyId: 'qd-pool-2-mcq-2-choice-1',
						body: 'Because it allows for flexibility, endurance, and diversity in interpretation and application.',
						correct: true,
						rejoinder:
							"The Constitution's intentionally vague language can be considered an advantage because it allows for flexibility, endurance, and diversity in interpretation and application."
					},
					{
						familyId: 'qd-pool-2-mcq-2-choice-2',
						body: 'Because it provides a means for resolving political conflict in our democratic society.',
						rejoinder:
							"While the constitutional amendment process does provide a means for resolving political conflict, the Constitution's intentionally vague language does not necessarily provide a mechanism for this resolution."
					},
					{
						familyId: 'qd-pool-2-mcq-2-choice-3',
						body: 'Because it provides a framework of fundamental principles that unifies national and state government.',
						rejoinder:
							"While the Constitution does provide a framework of fundamental principles, the document's intentionally vague language does not necessarily serve this unifying function."
					},
					{
						familyId: 'qd-pool-2-mcq-2-choice-4',
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							"While the Constitution's intentionally vague language does contribute to the document's integrity and brevity, this is not the primary reason for its inclusion."
					}
				]
			},
			{
				familyId: 'qd-pool-2-mcq-3',
				type: 'NG::Soomo::MC::Question',
				body: "Which of the following accurately describes why the Constitution's intentionally vague language is considered an advantage during the amendment process?",
				choices: [
					{
						familyId: 'qd-pool-2-mcq-3-choice-1',
						body: 'Because it allows for diverse interpretations and flexible application.',
						correct: true,
						rejoinder:
							"The Constitution's intentionally vague language is an advantage during the amendment process because it allows for diverse interpretations and flexible application."
					},
					{
						familyId: 'qd-pool-2-mcq-3-choice-2',
						body: 'Because it provides a necessary mechanism for resolving political conflict in our democracy.',
						rejoinder:
							"While the constitutional amendment process is a mechanism for resolving political conflict, the Constitution's intentionally vague language does not necessarily provide a solution to this conflict."
					},
					{
						familyId: 'qd-pool-2-mcq-3-choice-3',
						body: 'Because it provides a framework of fundamental principles that unifies national and state government.',
						rejoinder:
							"While the Constitution does provide a framework of fundamental principles, the document's intentionally vague language does not necessarily serve this unifying function."
					},
					{
						familyId: 'qd-pool-2-mcq-3-choice-4',
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							"While the Constitution's intentionally vague language does contribute to the document's integrity and brevity, this is not the primary reason for its inclusion."
					}
				]
			}
		]
	},
	{
		familyId: 'question-deck-out',
		type: 'NG::Soomo::QuestionDeck',
		direction: 'out'
	},
	{
		familyId: 'text-3',
		type: 'NG::Soomo::Text',
		body: `<p>Maecenas ac lectus scelerisque arcu tincidunt laoreet. Fusce id maximus velit, ac pharetra quam. Sed id tellus tempor, congue tellus vel, tincidunt mi. Quisque nec erat sed orci cursus ultricies. Sed nulla lorem, ultricies in tempus ut, sodales efficitur urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ante et lectus hendrerit interdum in sed eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et volutpat erat.</p>
		<p>Vivamus sem lacus, ornare eu condimentum accumsan, posuere eu neque. Nunc mauris neque, facilisis ut velit ac, semper pretium justo. Fusce massa libero, egestas a lorem sed, consequat consequat erat. Nam ac lorem id massa ornare tincidunt. Aliquam a nunc semper, condimentum sem sollicitudin, vulputate erat. Praesent massa orci, fermentum at sapien ac, vehicula pharetra nunc. Nunc facilisis nisl fringilla congue cursus. Praesent pretium sem vel ex faucibus aliquet. Suspendisse porttitor massa dolor, sit amet tempor metus placerat scelerisque. Cras sed facilisis elit. Ut tincidunt id velit at venenatis. Suspendisse leo lectus, congue at tellus nec, aliquet accumsan felis. Pellentesque porttitor maximus turpis nec faucibus.</p>
		<p>Nulla scelerisque massa arcu, a dignissim massa hendrerit finibus. Vivamus quis laoreet nunc, quis semper justo. Phasellus sem velit, semper in risus at, placerat placerat mauris. Ut faucibus pulvinar nisl in tincidunt. Aenean egestas massa vel leo sagittis euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent iaculis pretium lorem, ac rutrum libero dapibus vitae. Maecenas aliquet metus vitae mi accumsan convallis. Nullam et commodo diam. Nam sed laoreet augue, sit amet pretium mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vitae lectus ornare, dictum purus at, viverra metus. Ut lacinia lorem semper tristique rutrum. Proin in libero mi. Sed eu odio id ex tempor consequat.</p>`
	}
];

const page: Page = {
	familyId: 'pooled-page',
	elements
};

export default page;
