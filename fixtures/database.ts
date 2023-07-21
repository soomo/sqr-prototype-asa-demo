import type { FamilyId, QuizResponse } from '../types';

export const FAKE_USER_ID = 0;

let quizResponses: { [assignmentFamilyId: FamilyId]: QuizResponse } = {};

if (localStorage.getItem('quizResponses')) {
	quizResponses = JSON.parse(localStorage.getItem('quizResponses'));
}

addEventListener('beforeunload', () => {
	localStorage.setItem('quizResponses', JSON.stringify(quizResponses));
});

export function getAllQuizResponses() {
	return { ...quizResponses };
}

export function getOrCreateQuizResponse(respondableFamilyId: FamilyId) {
	let qr: QuizResponse = quizResponses[respondableFamilyId];
	if (!qr) {
		qr = {
			reset_count: 0,
			answers: [],
			assignment_family_id: respondableFamilyId,
			seed: FAKE_USER_ID
		};
		quizResponses[respondableFamilyId] = qr;
	}
	return { ...qr };
}

export function updateQuizResponse(respondableFamilyId: FamilyId, qr: QuizResponse) {
	quizResponses[respondableFamilyId] = qr;
}

export function deleteQuizResponse(respondableFamilyId: FamilyId) {
	delete quizResponses[respondableFamilyId];
}

export function deleteAllQuizResponses() {
	quizResponses = {};
	localStorage.removeItem('quizResponses');
}
