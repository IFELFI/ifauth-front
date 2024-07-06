import { isValid } from '$stores/server/member.store';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { session } from '$lib/api/urls';

export const load: PageServerLoad = async ({ fetch }) => {
	const logoutApi = session.destroy;
	await fetch(logoutApi.url, {
		method: logoutApi.method
	});

	isValid.set(false);

	redirect(302, PUBLIC_HOME_URL || '/');
};
