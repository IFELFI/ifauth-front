import { access } from "$lib/store";

export const apiFetch = async (url: string, options: RequestInit) => {
	let accessToken: string | null = null;
	access.subscribe((value) => (accessToken = value));
	const response = await fetch(url, {
		...options,
		credentials: 'same-origin',
		headers: {
			...options.headers,
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json'
		}
	});
	return response;
};