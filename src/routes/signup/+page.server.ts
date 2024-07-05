import { fail, redirect, type Actions } from '@sveltejs/kit';
import { auth } from '$lib/api/urls.js';
import type { AuthReplyData } from '$types/reply';

export const load = async () => {};

export const actions = {
	local: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();
		const passwordConfirm = data.get('passwordConfirm')?.toString();

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
			redirect(302, '/signin');
		}
		
		const signupRes = await response.json() as AuthReplyData;
		return fail(response.status, {
			error: signupRes.message || 'Failed to sign up'
		});
	}
} satisfies Actions;