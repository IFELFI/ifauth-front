import { issue, refresh } from '$lib/api/token';
import { setRefresh } from '$lib/cookie';
import { access, setAccess } from '$lib/store';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const issueResponse = await issue();
	if (issueResponse && issueResponse.status === 200) {
		const setAccessResult = setAccess(issueResponse);
		const setRefreshResult = setRefresh(cookies, issueResponse);
		if (!setAccessResult || !setRefreshResult) {
			throw redirect(307, './signin');
		}
		return;
	}

	let accessToken: string | null = null;
	access.subscribe((value) => (accessToken = value));
	if (accessToken) {
		return;
	}

	const refreshResponse = await refresh();

	if (refreshResponse && refreshResponse.status === 200) {
		const setAccessResult = setAccess(refreshResponse);
		const setRefreshResult = setRefresh(cookies, refreshResponse);
		if (!setAccessResult || !setRefreshResult) {
			throw redirect(307, './signin');
		}
		return;
	}

	throw redirect(307, './signin');
}
