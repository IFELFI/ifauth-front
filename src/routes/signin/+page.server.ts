import { fail, redirect, type Actions } from '@sveltejs/kit';
import { isValid } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { auth, session } from '$lib/api/urls';

// export const load = async ({ fetch, cookies, url }) => {
// 	const redirectUrl = url.searchParams.get('redirect');
	
// 	if (cookies.get('AUTO')) {
// 		const api = auto.verify;
// 		const response = await fetch(api.url, {
// 			method: api.method,
// 		});
		
// 		if (response.status === 200) {
// 			const body = await response.json();
// 			const authCode = body.code as string || null;
// 			code.set(authCode);
// 			isValid.set(true);
// 			if (authCode && redirectUrl) {
// 				redirect(302, `${redirectUrl}?code=${authCode}`);
// 			} else if (authCode) {
// 				redirect(302, PUBLIC_HOME_URL);
// 			}
// 		}
// 	}
// }

export const actions = {
	local: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		// const autoOn = data.get('auto')?.toString() === 'on';
		const redirectUrl = data.get('redirect')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		const api = auth.local.signin;
		const response = await fetch(api.url, {
			method: api.method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});

		const body = await response.json();
		if (response.status === 200) {
			isValid.set(true);
			const issueCode = body.code as string || null;
			if (!issueCode) return fail(400, { error: 'No code returned' });
			const sessionApi = session.issue(issueCode);
			const response = await fetch(sessionApi.url, {
				method: sessionApi.method
			});

			if (response.status === 200) {
				if (redirectUrl) {
					redirect(302, `${redirectUrl}`);
				} else {
					redirect(302, PUBLIC_HOME_URL);
				}
			}
			return fail(response.status, {
				error: 'Failed to issue session'
			});
		}

		return fail(response.status, {
			error: body
		});
	}
} satisfies Actions;
