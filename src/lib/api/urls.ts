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
	destroy: {
		url: `${PUBLIC_AUTH_API}/session/destroy`,
		method: 'GET'
	},
	check: {
		url: `${PUBLIC_AUTH_API}/session/check`,
		method: 'GET'
	}
};

export const member = {
	profile: {
		get: {
			url: `${PUBLIC_MEMBER_API}/member/profile`,
			method: 'GET'
		},
		update: {
			url: `${PUBLIC_MEMBER_API}/member/profile`,
			method: 'PUT'
		}
	}
};
