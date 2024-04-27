import { token } from '$lib/api/token.js';
import { user } from '$lib/api/user.js';
import { setRefresh } from '$lib/cookie';
import { access, setAccess } from '$lib/store';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {

  const profileResponse = await user.profile();
  if (profileResponse && profileResponse.status === 200) {
    const profile = await profileResponse.json();
    if (profile) {
      return {
        data: profile
      };
    }
  }

	const signinUrl = './signin';

	const refreshResponse = await token.refresh();
	const issueResponse = await token.issue();

	if (issueResponse && issueResponse.status === 200) {
		const setAccessResult = setAccess(issueResponse);
		const setRefreshResult = setRefresh(cookies, issueResponse);
		if (!setAccessResult || !setRefreshResult) {
			throw redirect(301, signinUrl);
		}
	} else if (refreshResponse && refreshResponse.status === 200) {
		const setAccessResult = setAccess(refreshResponse);
		const setRefreshResult = setRefresh(cookies, refreshResponse);
		if (!setAccessResult || !setRefreshResult) {
			throw redirect(301, signinUrl);
		}
	}

	let accessToken: string | null = null;
	access.subscribe((value) => (accessToken = value));
	if (accessToken) {
    redirect(301, './');
	}

	throw redirect(307, signinUrl);
}
