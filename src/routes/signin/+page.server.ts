import { fail, redirect, type Actions } from '@sveltejs/kit';
import { code } from '$stores/auth.js';
import { PUBLIC_HOME_URL } from '$env/static/public';
import { localV2 } from '$lib/api/auth';

export const actions = {
	local: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const auto = data.get('auto')?.toString() === 'on';
		const redirectUrl = data.get('redirectUrl')?.toString();
		
		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		const response = await fetch(localV2.signin.url, {
			method: localV2.signin.method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				auto
			})
		});

		if (response.status === 200) {
			const body = await response.json();
			const autoAuthCode = body.autoAuthCode as string || null;
			const authCode = body.code as string || null;

			if (autoAuthCode) {
				const api = localV2.issueAuto(autoAuthCode);
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
			error: (await response.json()).message
		});
	}
} satisfies Actions;
