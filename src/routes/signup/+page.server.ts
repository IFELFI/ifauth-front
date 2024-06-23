import { signup } from '$lib/api/auth.js';
import { fail, redirect } from '@sveltejs/kit';
import { code } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';

export const load = async () => {};

export const actions = {
	local: async ({ request }: { request: Request }) => {
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

		const response = await signup.local(email, username, password);
		if (response.status !== 201) {
			const { message } = await response.json();
			return fail(401, {
				error: message
			});
		}

		const body = await response.json();
		if (!body.code) {
			return fail(401, {
				error: 'Invalid response'
			});
		}
		code.set(body.code);

		redirect(302, PUBLIC_HOME_URL);
	}
};
