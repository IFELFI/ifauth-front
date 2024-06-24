import { token } from '$lib/api/token.js';
import { redirect } from '@sveltejs/kit';
import type { MainPageServerLoad } from './$types';
import path from 'path';
import { access, code } from '$stores/auth';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { setCookie } from '$lib/cookie';
import { user } from '$lib/api/user';
import { errorHandler } from '$lib/api/errorHandler';
import type { Profile } from '$types/data';

export const load: MainPageServerLoad = async ({ cookies }) => {
	let currentCode: string | null = null;
	let currentAccess: string | null = null;
	const signinUrl = path.join(PUBLIC_HOME_URL, 'signin');
	code.subscribe((value) => (currentCode = value));
	access.subscribe((value) => (currentAccess = value));

	if (currentCode) {
		await token
			.issue(currentCode)
			.then((response) => {
				const accessToken = response.headers['authorization'].split(' ')[1];
				access.set(accessToken);
				setCookie(cookies, response);
			})
			.catch(() => {
				throw redirect(307, signinUrl);
			});
	}

	if (currentAccess) {
		let profile: Profile | null = null;
		const error = await user
			.profile()
			.then((response) => {
				if (response.status === 200) {
					profile = response.data.data;
				}
			})
			.catch((error) => {
				return errorHandler(error);
			});

		if (error) {
			return error;
		}
		return {
			profile: profile
		};
	}
	return {
		profile: null
	};
};
