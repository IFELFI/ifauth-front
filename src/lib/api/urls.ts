import { PUBLIC_AUTH_API } from '$env/static/public';

export const auth = {
	local: {
		signin: {
			url: `${PUBLIC_AUTH_API}/auth/local/login`,
			method: 'POST'
		},
		signup: {
			url: `${PUBLIC_AUTH_API}/auth/local/signup`,
			method: 'POST'
		}
	}
};

export const auto = {
	verify: {
		url: `${PUBLIC_AUTH_API}/auto/verify`,
		method: 'GET'
	},
	issue: (code: string) => {
		return {
			url: `${PUBLIC_AUTH_API}/auto/issue?code=${code}`,
			method: 'GET'
		};
	}
};

export const token = {
	isValid: {
		url: `${PUBLIC_AUTH_API}/token/valid`,
		method: 'GET'
	},
	refresh: {
		url: `${PUBLIC_AUTH_API}/token/refresh`,
		method: 'GET'
	},
	issue: (code: string) => {
		return {
			url: `${PUBLIC_AUTH_API}/token/issue?code=${code}`,
			method: 'GET'
		};
	}
};

export const user = {
	profile: {
		url: `${PUBLIC_AUTH_API}/user/profile`,
		method: 'GET'
	},
  logout: { 
    url: `${PUBLIC_AUTH_API}/user/logout`,
    method: 'GET'
  }
};
