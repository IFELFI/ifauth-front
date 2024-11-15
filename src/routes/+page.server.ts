import type { PageServerLoad } from './$types';
import { session } from '$lib/api/urls';

export const load: PageServerLoad<{ valid: boolean }> = async ({ cookies, fetch, url }) => {
  // Check if the environment is development
	if (process.env.NODE_ENV === 'development') {
		const loggedIn = url.searchParams.get('logged_in');
		if (loggedIn === 'true') {
			return {
				valid: true
			};
		}
	}

  // Get the session ID from the cookies
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
