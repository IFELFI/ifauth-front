import { fail, redirect, type Actions } from '@sveltejs/kit';
import { local, session } from '$lib/api/urls.js';
import type { AuthResponse } from '$types/reply';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { redirectStore } from '$stores/server/redirect.store';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ cookies }) => {
	let redirectUrl: string | null = null;

	redirectStore.subscribe((value) => {
		redirectUrl = value;
	});

	if (cookies.get('SID')) {
		const checkSessionApi = session.check;
		const response = await fetch(checkSessionApi.url, {
			method: checkSessionApi.method
		});
		if (response.ok) {
			redirect(302, redirectUrl || PUBLIC_HOME_URL);
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

		redirectStore.subscribe((value) => {
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

		const signupApi = local.signup;
		const response = await fetch(signupApi.url, {
			method: signupApi.method,
			headers: {
				'Content-Type': 'application/json'
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

		const signupRes = (await response.json()) as AuthResponse;
		return fail(response.status, {
			error: signupRes.message || 'Failed to sign up'
		});
	}
} satisfies Actions;
