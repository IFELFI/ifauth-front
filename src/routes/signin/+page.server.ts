import { fail, redirect, type Actions } from '@sveltejs/kit';
import { access, code } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { auth, auto, token } from '$lib/api/urls';
import { invalidate } from '$app/navigation';

export const load = async ({ fetch, cookies, url }) => {
	const redirectUrl = url.searchParams.get('redirect');
	let accessToken: string | null = null;
	access.subscribe((value) => {
		accessToken = value;
	});
	
	if (accessToken) {
		const api = token.refresh;
		const response = await fetch(api.url, {
			method: api.method,
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		if (response.status === 200 && !redirectUrl) {
			redirect(302, PUBLIC_HOME_URL);
		}
	}
	
	if (cookies.get('AUTO')) {
		const api = auto.verify;
		const response = await fetch(api.url, {
			method: api.method,
		});
		
		if (response.status === 200) {
			const body = await response.json();
			const authCode = body.code as string || null;
			if (authCode && redirectUrl) {
				code.set(authCode);
				redirect(302, `${redirectUrl}?code=${authCode}`);
			} else if (authCode) {
				code.set(authCode);
				await invalidate('/');
				redirect(302, PUBLIC_HOME_URL);
			}
		}
	}
}

export const actions = {
	local: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const autoOn = data.get('auto')?.toString() === 'on';
		const redirectUrl = data.get('redirect')?.toString();
		
		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		const api = auth.local.signin;
		const response = await fetch(api.url, {
			method: api.method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				auto: autoOn
			})
		});

		const body = await response.json();
		if (response.status === 200) {
			const autoAuthCode = body.autoAuthCode as string || null;
			const authCode = body.code as string || null;

			if (autoAuthCode) {
				const api = auto.issue(autoAuthCode);
				await fetch(api.url, {
					method: api.method,
				});
			}
			
			code.set(authCode);
			if (redirectUrl) {
				redirect(302, `${redirectUrl}?code=${authCode}`);
			} else {
				redirect(302, PUBLIC_HOME_URL);
			}
		}

		return fail(response.status, {
			error: body.message
		});
	}
} satisfies Actions;
