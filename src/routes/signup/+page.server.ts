import { AUTH_API } from '$env/static/private';
import { signup } from '$lib/api/auth.js';
import { setRefresh } from '$lib/cookie';
import { setAccess } from '$lib/store.js';
import { fail, redirect } from '@sveltejs/kit';

export const load = async () => {
}

export const actions = {
	local: async ({ request, cookies }) => {
		return fail(400, {
			error: 'This route is not implemented yet.'
		})

		const data = await request.formData();
		const email = data.get('email')?.toString();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();
		const passwordConfirm = data.get('passwordConfirm')?.toString();

		if (password !== passwordConfirm) {
			return fail(400, {
				error: 'Passwords do not match'
			});
		}

		if (!email || !password || !username) {
			return fail(400, {
				error: 'Email, nickname and password are required'
			});
		}

		const url = AUTH_API + `/auth/local/signup`;
		const response = await signup.local(url, email, username, password);

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
};
