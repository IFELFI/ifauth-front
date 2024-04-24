import { AUTH_API } from '$env/static/private';
import { signin } from '$lib/api/auth.js';
import { access } from '$lib/store.js';
import { fail, redirect } from '@sveltejs/kit';
import scp from 'set-cookie-parser';
import type { CookieSerializeOptions } from 'cookie';

export const actions = {
	local: async ({ request, url, cookies }) => {
		const redirectUrl: string | null =
			url.searchParams.get('redirect');

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

			const setCookie = scp.parse(response.headers.getSetCookie());
			setCookie.forEach(cookie => {
				cookies.set(cookie.name, cookie.value, {
					maxAge: cookie.maxAge,
					domain: cookie.domain ?? '',
					path: cookie.path ?? '/',
					expires: cookie.expires,
					httpOnly: cookie.httpOnly,
					secure: cookie.secure,
					sameSite: cookie.sameSite as CookieSerializeOptions['sameSite']
				});
			})

			const accessToken = response.headers.get('Authorization')?.split(' ')[1]

			if (!accessToken) {
				return fail(500, {
					error: 'Internal server error'
				});
			}

			access.set(accessToken);
	
			redirect(302, '/');
		}
	}
};
