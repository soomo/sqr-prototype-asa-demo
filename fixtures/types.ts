/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-interface */
export type FamilyId = string; // a UUID

export interface NGFamily {
	familyId: FamilyId;
	metadata?: { [key: string]: any };
}

export interface MCQuestion extends NGFamily {
	body: string;
	choices: MCChoice[];
}

export interface MCChoice extends NGFamily {
	body: string;
}

export interface MCQuestionPool extends NGFamily {
	questions: MCQuestion[];
}

export interface QuizResponse {
	// in the prototype we'll just have a single implied user and course
	// user: User;
	// course: Course;

	/**
	 * For MCQs on SQR-enabled pages, this will always be a MCQuestionPool;
	 * "standalone" SQR-enabled MCQs are wrapped in a MCQuestionPool as well
	 * (in which case the pool only has one question in it).
	 *
	 * For MCQs on legacy PPR pages, this is the page family ID.
	 */
	assignmentFamilyId: FamilyId;
	/**
	 * For both pooled and unpooled SQR-enabled MCQs, this is used to shuffle the *choices* of a given pool item.
	 * Its initial value is the user ID and it advances each time a question is reset.
	 */
	seed: number;
}

export interface SQRSavePayload {
	questionFamilyId: FamilyId;
	choiceFamilyId: FamilyId;
}

export interface SQRSaveResponse {
	question_family_id: FamilyId;
	choice_family_id: FamilyId;
	rejoinder: string;
	is_correct: boolean;
	attempts_remaining: number; // -1 for unlimited resets

	// if they just used their final attempt, we should show the information for the correct choice
	correct_choice?: {
		family_id: FamilyId;
		rejoinder: string;
	};
}

export interface SQRResetPayload {
	questionFamilyId: FamilyId;
}

export interface SQRResetResponse {
	was_reset: boolean; // or maybe just return a different status code besides 200 if reset failed?
	reset_count: number;
	new_pool_item: MCQuestion;
}
