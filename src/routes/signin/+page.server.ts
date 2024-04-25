import { signin } from '$lib/api/auth.js';
import { errorHandler } from '$lib/api/errorHandler.js';
import { code } from '$lib/store.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	local: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const redirectUrl = data.get('redirectUrl')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required'
			});
		}

		const response = await signin.local(email, password);

		if (response.status === 200) {
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

		return errorHandler(response);
	}
};
