import { member } from '$lib/api/urls';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_HOME_URL } from '$env/static/public';
import path from 'path';
import type { IProfile } from '$types/data';
import type { IExceptionResponse } from '$types/reply';

export const load: PageServerLoad = async ({ fetch }) => {
	const profileApi = member.profile.get;
	const response = await fetch(profileApi.url, {
		method: profileApi.method
	});

	if (response.status === 200) {
		const profile = (await response.json()).data as IProfile;
		return {
			profile
		};
	} else if (response.status === 401 || response.status === 404) {
		redirect(302, path.join(PUBLIC_HOME_URL, 'signin'));
	} else {
		const errorResponse = (await response.json()) as IExceptionResponse;
		error(response.status, {
			message: errorResponse.message ?? 'Failed to load profile'
		});
	}
};
