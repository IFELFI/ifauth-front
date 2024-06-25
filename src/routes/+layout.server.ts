import { token } from '$lib/api/urls';
import { code, access } from '$stores/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	let currentCode: string | null = null;
	let currentAccess: string | null = null;
	code.subscribe((value) => (currentCode = value));
	access.subscribe((value) => (currentAccess = value));

	if (currentCode) {
		const api = token.issue(currentCode);
		const response = await fetch(api.url, {
			method: api.method
		});

		if (response.status === 200) {
			const accessToken = response.headers.get('authorization')?.split(' ')[1] ?? '';
			access.set(accessToken);
		}
		code.set(null);
	}

	const api = token.isValid;
	const response = await fetch(api.url, {
		method: api.method,
		headers: {
			Authorization: `Bearer ${currentAccess}`
		}
	});
	if (response.status === 200) {
		return {
			valid: true
		};
	} else {
		access.set(null);
		return {
			valid: false
		};
	}
};
