import { fail, redirect } from '@sveltejs/kit';
import { code } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { local } from '$lib/api/auth';

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

		await local.signup(email, username, password).then((response) => {
			if (response.status === 200) {
				const authCode = response.data.code;
				if (!authCode) {
					return fail(401, {
						error: 'Invalid response'
					});
				}
				code.set(authCode);
				redirect(302, PUBLIC_HOME_URL);
			}
		}).catch((error) => {
			console.log(error);
			
			return fail(401, {
				error: 'Invalid response'
			});
		});
	}
};
