import { writable } from 'svelte/store';

export const access = writable<string | null>(null);
export const code = writable<string | null>(null);
export const lang = writable<string>('ko');
export const home = writable<string>('/');

export const setAccess = (response: Response) => {
	const accessToken = response.headers.get('Authorization')?.split(' ')[1];
	if (!accessToken) {
		return false;
	}
	access.set(accessToken);
  return true;
};
