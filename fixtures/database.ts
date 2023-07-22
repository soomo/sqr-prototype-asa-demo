import type { FamilyId, QuizResponse } from '../types';

export const FAKE_USER_ID = 0;

const localStorageQuizResponses = localStorage.getItem('quizResponses');
let quizResponses: { [assignmentFamilyId: FamilyId]: QuizResponse } = localStorageQuizResponses
	? JSON.parse(localStorageQuizResponses)
	: {};

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
		localStorage.setItem('quizResponses', JSON.stringify(quizResponses));
	}
	return { ...qr };
}

export function updateQuizResponse(respondableFamilyId: FamilyId, qr: QuizResponse) {
	quizResponses[respondableFamilyId] = qr;
	localStorage.setItem('quizResponses', JSON.stringify(quizResponses));
}

export function deleteQuizResponse(respondableFamilyId: FamilyId) {
	delete quizResponses[respondableFamilyId];
	localStorage.setItem('quizResponses', JSON.stringify(quizResponses));
}

export function deleteAllQuizResponses() {
	quizResponses = {};
	localStorage.removeItem('quizResponses');
}
