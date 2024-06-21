import { access } from '$stores/auth';

export const api = async (url: string, options: RequestInit) => {
	let accessToken: string | null = null;
	access.subscribe((value) => (accessToken = value));
	const response = await fetch(url, {
		credentials: 'include',
		headers: {
			...options.headers,
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		},
		...options,
	});
	return response;
};
