import { fail } from '@sveltejs/kit';

export const apiErrorHandler = (response: Response) => {
	return fail(response.status, {
		error: response.statusText
	});
};
