import { HOME_URL } from '$env/static/private';
import { signin } from '$lib/api/auth.js';
import { errorHandler } from '$lib/api/errorHandler.js';
import { code } from '$lib/store.js';
import { fail, redirect } from '@sveltejs/kit';
import type { SigninPageServerLoad } from '../$types.js';

export const load: SigninPageServerLoad = async ({ cookies, url }) => {
	const redirectUrl = url.searchParams.get('redirectUrl');
	if (cookies.get('autoLogin')) {
		const response = await signin.auto();
		if (response.status === 200) {
			const body = await response.json();
			if (!body.code) {
				return;
			}
			code.set(body.code);
			if (redirectUrl) {
				redirect(302, `${redirectUrl}?code=${body.code}`);
			} else {
				redirect(302, HOME_URL);
			}
		}
	}
};

export const actions = {
	local: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const autoLogin = data.get('autoLogin')?.toString();
		const redirectUrl = data.get('redirectUrl')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		const response = await signin.local(email, password, autoLogin === 'on');

		if (response.status === 200) {
			const body = await response.json();

			if (!body.code) {
				return fail(401, {
					error: 'Invalid response'
				});
			}

			code.set(body.code);

			if (redirectUrl) {
				redirect(302, `${redirectUrl}?code=${body.code}`);
			} else {
				redirect(302, HOME_URL);
			}
		}

		return errorHandler(response);
	}
};
