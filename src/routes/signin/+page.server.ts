import { HOME_URL } from '$env/static/private';
import { issueAuto, signin } from '$lib/api/auth.js';
import { errorHandler } from '$lib/api/errorHandler.js';
import { setCookie } from '$lib/cookie';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
import type { SigninPageServerLoad } from '../$types.js';
import { code } from '$stores/auth.js';

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
	local: async ({ request, cookies }: { request: Request, cookies: Cookies }) => {
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
			if(body.autoAuthCode) {
				const autoCodeRes = await issueAuto.issue(body.autoAuthCode);
				if (autoCodeRes.status === 200) {
					setCookie(cookies, autoCodeRes);
				}
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
