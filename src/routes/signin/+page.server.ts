import { setCookie } from '$lib/cookie';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
import { code } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { local } from '$lib/api/auth.js';

export const actions = {
	local: async ({ request, cookies }: { request: Request, cookies: Cookies }) => {
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

		await local.signin(email, password, auto === 'on').then((response) => {
			if (response.status === 200) {
				const authCode = response.data.code;
				if (!authCode) {
					return fail(401, {
						error: 'Invalid response'
					});
				}
				setCookie(cookies, response);
				code.set(authCode);
				
				if (redirectUrl) {
					return redirect(302, `${redirectUrl}?code=${authCode}`);
				} else {
					return redirect(302, PUBLIC_HOME_URL);
				}
			}
			return fail(401, {
				error: 'Invalid response'
			});
		}).catch(() => {
			return fail(401, {
				error: 'Invalid response'
			});
		});
	}
};
