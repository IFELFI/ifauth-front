import { user } from "$lib/api/urls";
import { access, isValid } from "$stores/auth";
import type { Profile } from "$types/data";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	let currentAccess: string | null = null;
	let valid: boolean = false;
	access.subscribe((value) => (currentAccess = value));
	isValid.subscribe((value) => (valid = value));

	if (!valid) {
		return {
			profile: null
		};
	}

	if (currentAccess) {
		const api = user.profile;
		const response = await fetch(api.url, {
			method: api.method,
			headers: {
				Authorization: `Bearer ${currentAccess}`
			}
		});
		if (response.status === 200) {
			const profile = (await response.json()).data as Profile;
			return {
				profile
			};
		}
	}
	return {
		profile: null
	};
};
