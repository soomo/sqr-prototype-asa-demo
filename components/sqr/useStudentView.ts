import { useCallback, useContext, useState } from 'react';

import { useAriaLiveAnnouncer } from '@soomo/lib/components/AriaLiveAnnouncer';
import { emitCustomEvent } from '@soomo/lib/utils/emitCustomEvent';

import { getOrCreateQuizResponse, updateQuizResponse } from '../../fixtures/database';
import { PageContext } from '../Layout';
import { TEST_getRespondableFamilyId } from '../../fixtures/getRespondableFamilyId';

import type {
	FamilyId,
	FullMCChoice,
	SQRResetPayload,
	SQRResetResponse,
	SQRSavePayload,
	SQRSaveResponse
} from '../../types';

export const useStudentView = (args: {
	questionFamilyId: FamilyId;
	choiceFamilyId: FamilyId;
}): {
	isRequestInProgress: boolean;
	performReset: () => Promise<SQRResetResponse>;
	performSave: () => Promise<SQRSaveResponse>;
	correctChoice?: FullMCChoice;
} => {
	const { questionFamilyId, choiceFamilyId } = args;
	const [isRequestInProgress, setRequestInProgress] = useState(false);
	const [correctChoice, setCorrectChoice] = useState<FullMCChoice | null>(null);
	const { maxAttempts } = useContext(PageContext);
	const { makeAssertiveAnnouncement } = useAriaLiveAnnouncer();

	const TEST_respondableFamilyId = TEST_getRespondableFamilyId(questionFamilyId);

	const performReset = useCallback(async () => {
		if (isRequestInProgress) {
			return;
		}

		let json: SQRResetResponse | null = null;
		setRequestInProgress(true);
		try {
			const req = await fetch('/api/reset_sqr_mc_question', {
				method: 'POST',
				body: JSON.stringify({
					questionFamilyId,
					TEST_quizResponse: getOrCreateQuizResponse(TEST_respondableFamilyId)
				} as SQRResetPayload)
			});
			json = (await req.json()) as SQRResetResponse;
			emitCustomEvent('question-reset', json);
			updateQuizResponse(TEST_respondableFamilyId, json.TEST_modifiedQuizResponse);
		} finally {
			setRequestInProgress(false);
		}
		return json;
	}, [TEST_respondableFamilyId, isRequestInProgress, questionFamilyId]);

	const performSave = useCallback(async () => {
		if (isRequestInProgress) {
			return;
		}

		let json: SQRSaveResponse | null = null;
		setRequestInProgress(true);
		try {
			const req = await fetch('/api/save_sqr_mc_question', {
				method: 'POST',
				body: JSON.stringify({
					questionFamilyId,
					choiceFamilyId,
					TEST_quizResponse: getOrCreateQuizResponse(TEST_respondableFamilyId),
					TEST_maxAttempts: maxAttempts
				} as SQRSavePayload)
			});
			json = (await req.json()) as SQRSaveResponse;
			if (json.correct_choice) {
				setCorrectChoice(json.correct_choice);
			}
			emitCustomEvent('question-saved', json);
			makeAssertiveAnnouncement(
				`Answer saved. ${json.is_correct ? 'Correct.' : 'Incorrect.'} ${json.rejoinder}`
			);
			updateQuizResponse(TEST_respondableFamilyId, json.TEST_modifiedQuizResponse);
		} finally {
			setRequestInProgress(false);
		}
		return json;
	}, [
		isRequestInProgress,
		questionFamilyId,
		choiceFamilyId,
		TEST_respondableFamilyId,
		maxAttempts,
		makeAssertiveAnnouncement
	]);

	return {
		isRequestInProgress,
		correctChoice,
		performReset,
		performSave
	};
};
