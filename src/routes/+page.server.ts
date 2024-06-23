import { token } from '$lib/api/token.js';
import { user } from '$lib/api/user.js';
import { redirect } from '@sveltejs/kit';
import type { MainPageServerLoad } from './$types';
import path from 'path';
import { code } from '$stores/auth';
import type { replyProfile } from '$types/reply';
import { PUBLIC_HOME_URL } from '$env/static/public';

export const load: MainPageServerLoad = async ({ cookies }) => {
	const signinUrl = path.join(PUBLIC_HOME_URL, 'signin');

	if (code.subscribe((value) => value) !== null) {
		const result = await token.issue(cookies);
		if (result.result === false) {
			throw redirect(307, signinUrl);
		}
	}

	const profileResponse = await user.profile();
	const validateResult = await token.validate(profileResponse, cookies);
	if (
		validateResult.result === false &&
		validateResult.refreshResponse &&
		validateResult.refreshResponse.status === 200
	) {
		const profileResponseAfterRefresh = await user.profile();
		if (profileResponseAfterRefresh.status === 200) {
			const replyData = (await profileResponseAfterRefresh.json()) as replyProfile;
			return {
				profile: replyData.data
			};
		}
	} else if (validateResult.result === true && profileResponse.status === 200) {
		const replyData = (await profileResponse.json()) as replyProfile;
		return {
			profile: replyData.data
		};
	}

	throw redirect(307, signinUrl);
};
