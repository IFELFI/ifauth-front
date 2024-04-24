import { writable } from "svelte/store";

export const access = writable<string | null>(null);

export const setAccess = (response: Response) => {
  const accessToken = response.headers.get('Authorization')?.split(' ')[1];
  if (!accessToken) {
    return false;
  }
  access.set(accessToken);
}