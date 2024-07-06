import { member } from "$lib/api/urls";
import { isValid } from "$stores/auth";
import type { Profile } from "$types/data";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PUBLIC_HOME_URL } from "$env/static/public";

export const load: PageServerLoad = async ({ fetch }) => {
	let valid: boolean = false;
	isValid.subscribe((value) => (valid = value));

	if (valid) {
		const profileApi = member.profile.get;
		const response = await fetch(profileApi.url, {
			method: profileApi.method,
		});
		if (response.status === 200) {
			const profile = (await response.json()).data as Profile;
			return {
				profile
			};
		}
		const body = await response.json();
		console.error(JSON.stringify(body));
	}

	redirect(302, `${PUBLIC_HOME_URL}/signin`);
};
