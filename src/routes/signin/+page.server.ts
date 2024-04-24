import { AUTH_API } from '$env/static/private';
import { signin } from '$lib/api/auth.js';
import { setAccess } from '$lib/store.js';
import { fail, redirect } from '@sveltejs/kit';
import { setRefresh } from '$lib/cookie.js';

export const actions = {
	local: async ({ request, url, cookies }) => {
		const redirectUrl: string | null = url.searchParams.get('redirect');

		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		if (redirectUrl) {
			const url = AUTH_API + `/oauth/local`;
			const response = await signin.local(url, email, password);

			if (response.status !== 200) {
				const { message } = await response.json();
				return fail(401, {
					error: message
				});
			}
			const { code } = await response.json();
			redirect(302, `${redirectUrl}?code=${code}`);
		} else {
			const url = AUTH_API + `/auth/local/login`;
			const response = await signin.local(url, email, password);

			if (response.status !== 200) {
				const { message } = await response.json();
				return fail(401, {
					error: message
				});
			}

			const setAccessResult = setAccess(response);
			const setRefreshResult = setRefresh(cookies, response);
			if (!setAccessResult || !setRefreshResult) {
				return fail(500, {
					error: 'Internal Server Error'
				});
			}

			redirect(302, '/');
		}
	}
};
