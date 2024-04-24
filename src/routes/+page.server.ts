import { validate } from "$lib/api/token";
import { access } from "$lib/store";
import { redirect } from "@sveltejs/kit";

export async function load() {
  let accessToken: string | null = null;
  access.subscribe(value => accessToken = value);
  if (accessToken) {
    return;
  }
  
  const response = await validate();
  
  if (!response || response.status !== 200) {
    throw redirect(307, '/signin');
  }

  accessToken = response.headers.get('Authorization')?.split(' ')[1] ?? null;
  if (!accessToken) {
    throw redirect(307, '/signin');
  }

  access.set(accessToken);
}