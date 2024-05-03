import type { Cookies } from '@sveltejs/kit';
import type { CookieSerializeOptions } from 'cookie';
import scp from 'set-cookie-parser';

export const setRefresh = (cookies: Cookies, response: Response) => {
	const setCookie = response.headers.getSetCookie();
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
