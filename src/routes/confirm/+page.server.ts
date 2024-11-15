import { local } from '$lib/api/urls';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { IExceptionResponse } from '$types/reply';

export const load: PageServerLoad = async ({ url, fetch }) => {
	if (process.env.NODE_ENV === 'development') {
		return {
			status: 200,
			body: {
				message: 'Email confirmed'
			}
		};
	}
	const token = url.searchParams.get('token');
	if (!token) {
		error(400, {
			message: 'Token is required'
		});
	}
	const confirmApi = local.confirm(token);
	const response = await fetch(confirmApi.url, {
		method: confirmApi.method
	});

	if (!response.ok) {
		const errorResponse = (await response.json()) as IExceptionResponse;
		error(response.status, {
			message: errorResponse.message ?? 'Failed to confirm email'
		});
	}

	return {
		status: 200,
		body: {
			message: 'Email confirmed'
		}
	};
};
