import { useCallback, useState } from 'react';

import { useAriaLiveAnnouncer } from '@soomo/lib/components/AriaLiveAnnouncer';

import type {
	FamilyId,
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
} => {
	const { questionFamilyId, choiceFamilyId } = args;
	const [isRequestInProgress, setRequestInProgress] = useState(false);
	const { makeAssertiveAnnouncement } = useAriaLiveAnnouncer();

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
					questionFamilyId
				} as SQRResetPayload)
			});
			json = (await req.json()) as SQRResetResponse;
		} finally {
			setRequestInProgress(false);
		}
		return json;
	}, [isRequestInProgress, questionFamilyId]);

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
					choiceFamilyId
				} as SQRSavePayload)
			});
			json = (await req.json()) as SQRSaveResponse;
			makeAssertiveAnnouncement(
				`Answer saved. ${json.is_correct ? 'Correct.' : 'Incorrect.'} ${json.rejoinder}`
			);
		} finally {
			setRequestInProgress(false);
		}
		return json;
	}, [isRequestInProgress, questionFamilyId, choiceFamilyId, makeAssertiveAnnouncement]);

	return {
		isRequestInProgress,
		performReset,
		performSave
	};
};
