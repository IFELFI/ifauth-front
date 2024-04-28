import { AUTH_API } from '$env/static/private';
import { access, code } from '$lib/store';
import { apiFetch } from './util/fetch';

export const token = {
	issue: async () => {
		let currentCode: string | null = null;
		code.subscribe((value) => (currentCode = value));

		if (!currentCode) {
			return null;
		}

		const url = AUTH_API + `/token/issue?code=${currentCode}`;
		const response = await apiFetch(url, {
			method: 'GET',
			credentials: 'same-origin'
		});

		return response;
	},
	refresh: async () => {
		const url = AUTH_API + `/token/refresh`;
		let accessToken: string | null = null;
		access.subscribe((value) => (accessToken = value));

		if (!accessToken) {
			return null;
		}

		const response = await apiFetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`
			},
			credentials: 'same-origin'
		});

		return response;
	},

	generate: async () => {
		const issueResponse = await token.issue();
		if (issueResponse && issueResponse.status === 200) {
			return issueResponse;
		}

		const refreshResponse = await token.refresh();
		if (refreshResponse && refreshResponse.status === 200) {
			return refreshResponse;
		}

		return null;
	}
};