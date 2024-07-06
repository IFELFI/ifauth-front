import type { PageServerLoad } from './$types';
import { isValid } from '$stores/server/member.store';
import { session } from '$lib/api/urls';

export const load: PageServerLoad<{ valid: boolean }> = async ({ cookies, fetch }) => {
	let currentIsValid = false;

	if (cookies.get('SID')) {
		const checkSessionApi = session.check;
		const response = await fetch(checkSessionApi.url, {
			method: checkSessionApi.method
		});

		isValid.set(response.ok);
	}

	isValid.subscribe((value) => (currentIsValid = value));

	return {
		valid: currentIsValid
	};
};
