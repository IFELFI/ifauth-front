import { AUTH_API } from '$env/static/private';
import { access, code } from '$lib/store';

export const issue = async () => {
  let currentCode: string | null = null;
  code.subscribe((value) => (currentCode = value));

  if (!currentCode) {
    return null;
  }

  const url = AUTH_API + `/token/issue?code=${currentCode}`;
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin'
  });

  return response;
}

export const refresh = async () => {
	const url = AUTH_API + `/token/refresh`;
	let accessToken: string | null = null;
	access.subscribe((value) => (accessToken = value));

	if (!accessToken) {
		return null;
	}

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`
		},
		credentials: 'same-origin'
	});

	return response;
};
