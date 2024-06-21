import { AUTH_API } from '$env/static/private';
import { api } from '.';

export const signin = {
	local: async (email: string, password: string, auto: boolean = false) => {
		const url = AUTH_API + '/auth/local/login';
		const response = await api(url, {
			method: 'POST',
			body: JSON.stringify({ email, password, auto })
		});
		return response;
	},
	auto: async () => {
		const url = AUTH_API + '/auth/auto/verify';
		const response = await api(url, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Access-Control-Allow-Credentials': 'true',
				'Set-Cookie': 'refresh=true; Path=/; HttpOnly; SameSite=Strict'
			},
			mode: 'cors'
		});
		
		return response;
	}
};

export const issueAuto = {
	issue: async (code: string) => {
		const url = AUTH_API + `/auth/auto/issue?code=${code}`;
		const response = await api(url, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Access-Control-Allow-Credentials': 'true'
			}
		});
		return response;
	}
};

export const signup = {
	local: async (email: string, name: string, password: string) => {
		const url = AUTH_API + '/auth/local/signup';
		const response = await api(url, {
			method: 'POST',
			body: JSON.stringify({ email, name, password })
		});
		return response;
	}
};
