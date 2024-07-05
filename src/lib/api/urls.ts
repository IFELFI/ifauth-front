import { PUBLIC_AUTH_API, PUBLIC_MEMBER_API } from '$env/static/public';

export const auth = {
	local: {
		signin: {
			url: `${PUBLIC_AUTH_API}/local/signin`,
			method: 'POST'
		},
		signup: {
			url: `${PUBLIC_AUTH_API}/local/signup`,
			method: 'POST'
		}
	}
};

export const session = {
	issue: (code: string) => {
		return {
			url: `${PUBLIC_AUTH_API}/session/issue?code=${code}`,
			method: 'GET'
		};
	},
};

export const member = {
	profile: {
		url: `${PUBLIC_MEMBER_API}/profile`,
		method: 'GET'
	},
	logout: {
		url: `${PUBLIC_MEMBER_API}/logout`,
		method: 'GET'
	}
};
