import { PUBLIC_AUTH_API } from '$env/static/public';
import { access } from '$stores/auth';
import { incrementRequestCount, requestCount, resetRequestCount } from '$stores/requestCount';
import axios, { AxiosError } from 'axios';

export const axiosApi = axios.create({
	baseURL: PUBLIC_AUTH_API,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	},
});

axiosApi.interceptors.request.use(
	(config) => {
		let accessToken: string | null = null;
		access.subscribe((value) => (accessToken = value));
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosApi.interceptors.response.use(
	(response) => {
		resetRequestCount();
		return response;
	},
	async (error: AxiosError | Error) => {
		let accessToken: string | null = null;
		let count = 0;
		access.subscribe((value) => (accessToken = value));
		requestCount.subscribe((value) => (count = value));

		if (axios.isAxiosError(error) && error.response?.status === 401) {
			if (count < 1) {
				await axios
					.get(`${PUBLIC_AUTH_API}/token/refresh`, {
						withCredentials: true,
						headers: {
							Authorization: `Bearer ${accessToken}`
						}
					})
					.then((response) => {
						const newAccessToken = response.headers['authorization'].split(' ')[1];
						access.set(newAccessToken);
						incrementRequestCount();
						if (error.config) return axiosApi.request(error.config);
					})
					.catch(() => {
						return Promise.reject(error);
					});
			}
		}

		access.set(null);
		resetRequestCount();
		return Promise.reject(error);
	}
);