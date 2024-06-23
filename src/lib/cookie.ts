import type { Cookies } from '@sveltejs/kit';
import type { AxiosResponse } from 'axios';
import type { CookieSerializeOptions } from 'cookie';
import scp from 'set-cookie-parser';

export const setCookie = (cookies: Cookies, response: AxiosResponse) => {
	const setCookie = response.headers['set-cookie'];
	if (!setCookie) return false;

	const parsedSetCookie = scp.parse(setCookie);

	parsedSetCookie.forEach((cookie) => {
		cookies.set(cookie.name, cookie.value, {
			maxAge: cookie.maxAge,
			domain: cookie.domain ?? '',
			path: cookie.path ?? '/',
			expires: cookie.expires,
			httpOnly: cookie.httpOnly,
			secure: cookie.secure,
			sameSite: cookie.sameSite as CookieSerializeOptions['sameSite']
		});
	});

	return true;
};
