import { fail, redirect } from '@sveltejs/kit';
import { code } from '$stores/auth.js';
import { local } from '$lib/api/auth';
import { errorHandler } from '$lib/api/errorHandler.js';
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

		const error = await local.signup(email, username, password).then((response) => {
			if (response.status === 200) {
				const authCode = response.data.code;
				code.set(authCode);
			}
		}).catch((error) => {
			return errorHandler(error);
		});

		if (error) {
			return error;
		}

		redirect(302, PUBLIC_HOME_URL)
	}
};
