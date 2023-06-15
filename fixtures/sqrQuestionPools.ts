import { MCQuestionElement, PageElement } from '@soomo/lib/types';

interface SQRQuestionPool extends PageElement {
	pool: MCQuestionElement[];
}

const sqrQuestionPools: SQRQuestionPool[] = [
	{
		pool: [
			{
				body: 'Which of the following statements about the amendment process is accurate?',
				choices: [
					{
						body: 'The failure of the Equal Rights Amendment shows the difficulty of modifying the Constitution.',
						correct: true,
						rejoinder:
							'The failure of the Equal Rights Amendment provides a contemporary example of how difficult it is to amend the Constitution.'
					},
					{
						body: 'It is much easier for an amendment to move past the proposal stage than it is for it to move past the ratification stage.',
						rejoinder:
							'It is difficult for an amendment to move past the proposal stage; only 33 out of 11,000 amendments have proceeded past this stage. Of these, 27 have been ratified.'
					},
					{
						body: 'The amendment process is especially responsive to minority groups.',
						rejoinder:
							'It is difficult for an amendment to move past the proposal stage; only 33 out of 11,000 amendments have proceeded past this stage. Of these, 27 have been ratified.'
					},
					{
						body: 'Amendment language is designed to be concise and unambiguous.',
						rejoinder: 'Amendment language is designed to be vague and open to interpretation.'
					}
				]
			},
			{
				body: 'Here is a multiple-choice question about the amendment process. Which of the following statements below is correct?',
				choices: [
					{
						body: 'The difficulty of amending the Constitution is exemplified by the failure of the Equal Rights Amendment.',
						correct: true,
						rejoinder:
							'The failure of the Equal Rights Amendment shows how challenging it can be to amend the Constitution.'
					},
					{
						body: 'It is easier for amendments to advance past the ratification stage than the proposal stage.',
						rejoinder:
							'It is actually quite difficult for an amendment to move past the proposal stage; out of 11,000 amendments proposed, only 33 have proceeded past this stage, and of these, 27 have been ratified.'
					},
					{
						body: 'The amendment process is particularly sensitive to minority groups.',
						rejoinder:
							'There is no evidence to suggest that the amendment process is any more or less responsive to minority groups than to any other group.'
					},
					{
						body: 'The language of amendments is meant to be short and clear.',
						rejoinder:
							'Amendment language is often intentionally ambiguous and open to interpretation.'
					}
				]
			},
			{
				body: 'Which of the following statements about the amendment process is accurate?',
				choices: [
					{
						body: 'The failure of the Equal Rights Amendment shows the difficulty of modifying the Constitution.',
						correct: true,
						rejoinder:
							'The failure of the Equal Rights Amendment provides a contemporary example of how challenging it is to amend the Constitution.'
					},
					{
						body: 'It is much easier for an amendment to move past the proposal stage than it is for it to move past the ratification stage.',
						rejoinder:
							'In reality, amendments face significant challenges even at the proposal stage. Out of 11,000 amendments proposed, only 33 have proceeded past this stage, and of these, 27 have been ratified.'
					},
					{
						body: 'The amendment process is especially responsive to minority groups.',
						rejoinder:
							'There is no evidence to suggest that minority groups have a greater or lesser influence on the amendment process than any other group.'
					},
					{
						body: 'Amendment language is designed to be concise and unambiguous.',
						rejoinder:
							'Amendment language is often intentionally ambiguous and open to interpretation.'
					}
				]
			}
		]
	},
	{
		pool: [
			{
				body: 'The Constitution includes intentionally vague language. Why might this be considered an advantage during the amendment process?',
				choices: [
					{
						body: 'Because it provides flexibility, endurance, and diversity in interpretation and application.',
						correct: true,
						rejoinder:
							'The Constitution’s vague language can be considered an advantage because it provides flexibility, endurance, and diversity in interpretation and application.'
					},
					{
						body: 'Because it provides an ultimate relief valve for resolving political conflict in our democratic society.',
						rejoinder:
							'While this is certainly an advantage of the constitutional amendment process, the Constitution’s vague language does not provide an ultimate relief valve for resolving political conflict.'
					},
					{
						body: 'Because it provides fundamental principles that inform and unify national and state government.',
						rejoinder:
							'While this is certainly an advantage of the constitutional amendment process, the Constitution’s vague language does not provide an overarching framework of fundamental principles.'
					},
					{
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							'While this is certainly an advantage of the constitutional amendment process, the Constitution’s vague language does not necessarily preserve the integrity or brevity of the document.'
					}
				]
			},
			{
				body: "Which of the following statements accurately explains why the Constitution's intentionally vague language might be considered an advantage during the amendment process?",
				choices: [
					{
						body: 'Because it allows for flexibility, endurance, and diversity in interpretation and application.',
						correct: true,
						rejoinder:
							"The Constitution's intentionally vague language can be considered an advantage because it allows for flexibility, endurance, and diversity in interpretation and application."
					},
					{
						body: 'Because it provides a means for resolving political conflict in our democratic society.',
						rejoinder:
							"While the constitutional amendment process does provide a means for resolving political conflict, the Constitution's intentionally vague language does not necessarily provide a mechanism for this resolution."
					},
					{
						body: 'Because it provides a framework of fundamental principles that unifies national and state government.',
						rejoinder:
							"While the Constitution does provide a framework of fundamental principles, the document's intentionally vague language does not necessarily serve this unifying function."
					},
					{
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							"While the Constitution's intentionally vague language does contribute to the document's integrity and brevity, this is not the primary reason for its inclusion."
					}
				]
			},
			{
				body: "Which of the following accurately describes why the Constitution's intentionally vague language is considered an advantage during the amendment process?",
				choices: [
					{
						body: 'Because it allows for diverse interpretations and flexible application.',
						correct: true,
						rejoinder:
							"The Constitution's intentionally vague language is an advantage during the amendment process because it allows for diverse interpretations and flexible application."
					},
					{
						body: 'Because it provides a necessary mechanism for resolving political conflict in our democracy.',
						rejoinder:
							"While the constitutional amendment process is a mechanism for resolving political conflict, the Constitution's intentionally vague language does not necessarily provide a solution to this conflict."
					},
					{
						body: 'Because it provides a framework of fundamental principles that unifies national and state government.',
						rejoinder:
							"While the Constitution does provide a framework of fundamental principles, the document's intentionally vague language does not necessarily serve this unifying function."
					},
					{
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							"While the Constitution's intentionally vague language does contribute to the document's integrity and brevity, this is not the primary reason for its inclusion."
					}
				]
			}
		]
	},
	{
		pool: [
			{
				body: 'The constitutional amendment process requires near-unanimous agreement. Why might this be considered a disadvantage?',
				choices: [
					{
						body: 'Because it makes national government slow to respond to problems concerning political process and public policy.',
						correct: true,
						rejoinder:
							'The constitutional amendment process’s requirement for near-unanimous agreement can make national government slow to respond to policy concerns.'
					},
					{
						body: 'Because it provides an ultimate relief valve for resolving political conflict in our democratic society.',
						rejoinder:
							'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
					},
					{
						body: 'Because it provides fundamental principles that inform and unify national and state government.',
						rejoinder:
							'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
					},
					{
						body: 'Because it preserves the integrity and brevity of the document.',
						rejoinder:
							'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
					}
				]
			},
			{
				body: "What is one disadvantage of the constitutional amendment process's requirement for near-unanimous agreement?",
				choices: [
					{
						body: 'It can make national government slow to respond to policy concerns.',
						correct: true,
						rejoinder:
							"The constitutional amendment process's requirement for near-unanimous agreement can make the national government slow to respond to policy concerns."
					},
					{
						body: 'It provides an ultimate relief valve for resolving political conflict in our democratic society.',
						rejoinder:
							'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
					},
					{
						body: 'It provides a framework of fundamental principles that unifies national and state government.',
						rejoinder:
							'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
					},
					{
						body: 'It preserves the integrity and brevity of the document.',
						rejoinder:
							'This would be considered an advantage—not a disadvantage—of the constitutional amendment process.'
					}
				]
			},
			{
				body: "What is one way in which the constitutional amendment process's requirement for near-unanimous agreement could be considered a disadvantage?",
				choices: [
					{
						body: "It can hinder the national government's ability to respond quickly to policy concerns.",
						correct: true,
						rejoinder:
							"The constitutional amendment process's requirement for near-unanimous agreement can slow the national government's response to policy concerns."
					},
					{
						body: 'It provides a necessary mechanism for resolving political conflict in our democracy.',
						rejoinder:
							'While the constitutional amendment process is a mechanism for resolving political conflict, the requirement for near-unanimous agreement is not always necessary for this resolution.'
					},
					{
						body: 'It provides a framework of fundamental principles that unifies national and state government.',
						rejoinder:
							'While the Constitution does provide a framework of fundamental principles, the requirement for near-unanimous agreement is not always necessary for maintaining this unification.'
					},
					{
						body: 'It preserves the integrity and brevity of the document.',
						rejoinder:
							"While the Constitution's amendment process does help preserve the document's integrity and brevity, the requirement for near-unanimous agreement is not necessarily related to this preservation."
					}
				]
			}
		]
	}
].map((basePool, i) => {
	const pool = basePool.pool.map((baseQuestion, j) => {
		const choices = baseQuestion.choices.map((baseChoice, k) => {
			const choiceFamilyId = `pool-${i + 1}-question-${j + 1}-choice-${k + 1}`;
			const choiceId = (i + 1) * 100 + (j + 1) * 10 + (k + 1);
			return {
				body: baseChoice.body,
				is_correct: baseChoice.correct ?? false,
				family_id: choiceFamilyId,
				id: choiceId,
				metadata: {},
				type: 'NG::Soomo::MC::Choice' as const,
				rejoinder: baseChoice.rejoinder
			};
		});
		const questionFamilyId = `pool-${i + 1}-question-${j + 1}`;
		const questionId = (i + 1) * 100 + (j + 1) * 10;
		return {
			body: baseQuestion.body,
			choices,
			disabled: false,
			id: questionId,
			metadata: {},
			family_id: questionFamilyId,
			version: `${questionId}`,
			title: '',
			type: 'NG::Soomo::MC::Question' as const
		};
	});
	const poolFamilyId = `pool-${i + 1}`;
	const poolId = (i + 1) * 100;
	return {
		pool,
		family_id: poolFamilyId,
		id: poolId,
		version: `${poolId}`,
		title: '',
		type: 'NG::Soomo::MC::QuestionPool' as const,
		metadata: {}
	};
});

export default sqrQuestionPools;
