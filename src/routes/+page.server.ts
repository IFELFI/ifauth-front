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

	const tokenResponse = await token.generate();

	if (!tokenResponse) {
		throw redirect(301, signinUrl);
	}

	if (tokenResponse.status === 200) {
		const setAccessResult = setAccess(tokenResponse);
		const setRefreshResult = setRefresh(cookies, tokenResponse);
		if (!setAccessResult || !setRefreshResult) {
			throw redirect(301, signinUrl);
		}
	}

	let accessToken: string | null = null;
	access.subscribe((value) => (accessToken = value));
	if (accessToken) {

	}

	throw redirect(307, signinUrl);
}
