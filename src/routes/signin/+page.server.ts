import { fail, redirect } from '@sveltejs/kit';
import { code } from '$stores/auth.js';
import { local } from '$lib/api/auth.js';
import { errorHandler } from '$lib/api/errorHandler.js';
import { PUBLIC_HOME_URL } from '$env/static/public';

export const actions = {
	local: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const auto = data.get('auto')?.toString();
		const redirectUrl = data.get('redirectUrl')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		let redirectPath = PUBLIC_HOME_URL;

		const error = await local.signin(email, password, auto === 'on').then((response) => {
			if (response.status === 200) {
				const authCode = response.data.code;
				code.set(authCode);
				if (redirectUrl) {
					redirectPath = `${redirectUrl}?code=${authCode}`;
				}
			}
		}).catch((error) => {
			return errorHandler(error);
		});

		if (error) {
			return error;
		}

		redirect(302, redirectPath);
	}
};
