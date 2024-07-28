import { member } from '$lib/api/urls';
import type { Profile } from '$types/data';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_HOME_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch }) => {
	const profileApi = member.profile.get;
	const response = await fetch(profileApi.url, {
		method: profileApi.method
	});
	if (response.status === 200) {
		const profile = (await response.json()).data as Profile;
		return {
			profile
		};
	} else if (response.status === 401) {
		redirect(302, `${PUBLIC_HOME_URL}/signin`);
	}
	return {
		error: 'Failed to load profile'
	};
};
