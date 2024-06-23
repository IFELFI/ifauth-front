import { token } from '$lib/api/token.js';
import { redirect } from '@sveltejs/kit';
import type { MainPageServerLoad } from './$types';
import path from 'path';
import { code } from '$stores/auth';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { setCookie } from '$lib/cookie';

export const load: MainPageServerLoad = async ({ cookies }) => {
	let currentCode: string | null = null;
	const signinUrl = path.join(PUBLIC_HOME_URL, 'signin');
	code.subscribe((value) => (currentCode = value));

	if (currentCode) {
		await token.issue(currentCode).then((response) => {
			setCookie(cookies, response);
		}).catch(() => {
			throw redirect(307, signinUrl);
		});
	}
};
