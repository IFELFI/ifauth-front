import { signin } from '$lib/api/auth.js';
import { code } from '$lib/store.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	local: async ({ request, url }) => {
		const redirectUrl: string | null = url.searchParams.get('redirect');

		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		const response = await signin.local(email, password);
		if (response.status !== 200) {
			const { message } = await response.json();
			return fail(401, {
				error: message
			});
		}

		const body = await response.json();
		if (!body.code) {
			return fail(401, {
				error: 'Invalid response'
			});
		}
		code.set(body.code);

		if (redirectUrl) {
			redirect(302, `${redirectUrl}?code=${body.code}`);
		}
		redirect(302, '/');
	}
};
