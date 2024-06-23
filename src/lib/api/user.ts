import { PUBLIC_AUTH_API } from '$env/static/public';
import { api } from '.';

export const user = {
	logout: async () => {
		const url = PUBLIC_AUTH_API + '/user/logout';
		const response = await api(url, {
			method: 'GET'
		});

		return response;
	},
	profile: async () => {
		const url = PUBLIC_AUTH_API + '/user/profile';
		const response = await api(url, {
			method: 'GET'
		});

		return response;
	}
};
