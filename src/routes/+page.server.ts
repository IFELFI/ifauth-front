import type { PageServerLoad } from './$types';
import { session } from '$lib/api/urls';

export const load: PageServerLoad<{ valid: boolean }> = async ({ cookies, fetch, url }) => {
	if (process.env.NODE_ENV !== 'development') {
		const loggedIn = url.searchParams.get('loggedIn');
		if (loggedIn === 'true') {
			return {
				valid: true
			};
		}
	}

	if (cookies.get('SID')) {
		const checkSessionApi = session.check;
		const response = await fetch(checkSessionApi.url, {
			method: checkSessionApi.method
		});
		if (response.ok) {
			return {
				valid: true
			};
		}
	}

	return {
		valid: false
	};
};
