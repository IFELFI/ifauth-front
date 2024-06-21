import { AUTH_API } from '$env/static/private';
import { api } from '.';

export const user = {
	logout: async () => {
		const url = AUTH_API + '/user/logout';
		const response = await api(url, {
			method: 'GET'
		});

		return response;
	},
	profile: async () => {
		const url = AUTH_API + '/user/profile';
		const response = await api(url, {
			method: 'GET'
		});

		return response;
	}
};
