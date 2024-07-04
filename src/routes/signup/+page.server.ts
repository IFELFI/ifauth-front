import { fail, redirect, type Actions } from '@sveltejs/kit';
import { isValid } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { auth } from '$lib/api/urls.js';

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

		const api = auth.local.signup;
		const response = await fetch(api.url, {
			method: api.method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				username,
				password
			})
		});

		const body = await response.text();
		if (response.status === 200) {
			isValid.set(true);
			redirect(302, PUBLIC_HOME_URL);
		}

		return fail(response.status, {
			error: body
		});
	}
} satisfies Actions;