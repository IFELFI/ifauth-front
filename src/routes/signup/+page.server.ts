import { fail, redirect, type Actions } from '@sveltejs/kit';
import { auth, session } from '$lib/api/urls.js';
import type { AuthReplyData } from '$types/reply';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { isValid } from '$stores/server/member.store';
import { redirectStore } from '$stores/server/redirect.store';

export const load = async ({ cookies }) => {
	let redirectUrl: string | null = null;

	redirectStore.subscribe(value => {
		redirectUrl = value;
	});

	if (cookies.get('SID')) {
		const checkSessionApi = session.check;
		const response = await fetch(checkSessionApi.url, {
			method: checkSessionApi.method
		});
		if (response.ok) {
			isValid.set(true);
			redirect(302, redirectUrl || PUBLIC_HOME_URL);
		} else {
			isValid.set(false);
		}
	}
};

export const actions = {
	local: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();
		const passwordConfirm = data.get('passwordConfirm')?.toString();

		let redirectUrl: string | null = null;

		redirectStore.subscribe(value => {
			redirectUrl = value;
		});

		if (password !== passwordConfirm) {
			return fail(400, {
				error: 'Passwords do not match'
			});
		}

		if (!email || !password || !username) {
			return fail(400, {
				error: 'Email, nickname and password are required'
			});
		}

		const signupApi = auth.local.signup;
		const response = await fetch(signupApi.url, {
			method: signupApi.method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				username,
				password
			})
		});

		if (response.status === 201) {
			redirect(302, redirectUrl || PUBLIC_HOME_URL || '/');
		}
		
		const signupRes = await response.json() as AuthReplyData;
		return fail(response.status, {
			error: signupRes.message || 'Failed to sign up'
		});
	}
} satisfies Actions;