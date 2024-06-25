import { user } from "$lib/api/urls";
import { access } from "$stores/auth";
import type { Profile } from "$types/data";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	let currentAccess: string | null = null;
	access.subscribe((value) => (currentAccess = value));

	if (currentAccess) {
		const api = user.profile;
		const response = await fetch(api.url, {
			method: api.method
		});
		if (response.status === 200) {
			const profile = (await response.json()) as Profile;
			return {
				profile
			};
		}
	}
	return {
		profile: null
	};
};
