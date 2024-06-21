import { AUTH_API } from '$env/static/private';
import type { Cookies } from '@sveltejs/kit';
import { api } from '.';
import { setCookie } from '$lib/cookie';
import { code, setAccess, access } from '$stores/auth';
import type { replyData } from '$types/reply';

export const token = {
	issue: async (cookies: Cookies): Promise<{ result: boolean; response: Response | null }> => {
		let currentCode: string | null = null;
		code.subscribe((value) => (currentCode = value));

		if (!currentCode) {
			return { result: false, response: null };
		}
		const url = AUTH_API + `/token/issue?code=${currentCode}`;
		const response = await api(url, {
			method: 'GET',
			credentials: 'include'
		});

		code.set(null);

		if (response.status === 200) {
			const setAccessResult = setAccess(response);
			const setRefreshResult = setCookie(cookies, response);
			if (!setAccessResult || !setRefreshResult) {
				return { result: false, response: response };
			}
			return { result: true, response: response };
		}
		return { result: false, response: response };
	},
	refresh: async (cookies: Cookies): Promise<{ result: boolean; response: Response | null }> => {
		const url = AUTH_API + `/token/refresh`;
		let accessToken: string | null = null;
		access.subscribe((value) => (accessToken = value));

		if (!accessToken) {
			return { result: false, response: null };
		}

		const response = await api(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`
			},
			credentials: 'include'
		});

		if (response.status === 200) {
			const setAccessResult = setAccess(response);
			const setRefreshResult = setCookie(cookies, response);
			if (!setAccessResult || !setRefreshResult) {
				return { result: false, response: response };
			}
			return { result: true, response: response };
		}
		return { result: false, response: response };
	},
	validate: async (
		response: Response,
		cookies: Cookies
	): Promise<{ result: boolean; refreshResponse: Response | null }> => {
		if (response.status === 200) return { result: true, refreshResponse: null };
		const replyData = (await response.json()) as replyData;
		const message = replyData.message;
		if (response.status === 401 && message !== 'Access token needs to be refreshed') {
			const refreshResult = await token.refresh(cookies);
			if (!refreshResult.response) {
				return { result: false, refreshResponse: null };
			}
			if (refreshResult.result) {
				return { result: true, refreshResponse: refreshResult.response };
			} else {
				return { result: false, refreshResponse: refreshResult.response };
			}
		}
		return { result: false, refreshResponse: null };
	}
};
