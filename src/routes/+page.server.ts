import { isValid } from '$stores/auth';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad<{ valid: boolean }> = ({ cookies }) => {
	let currentIsValid = false;

	if (cookies.get('SID')) {
		isValid.set(true);
	}

	isValid.subscribe((value) => (currentIsValid = value));

	return {
		valid: currentIsValid
	};
};
