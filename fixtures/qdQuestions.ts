const qdQuestions = [
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
			rejoinder: baseChoice.rejoinder
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

export default qdQuestions;
