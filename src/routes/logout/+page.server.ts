import { access, code, isValid } from "$stores/auth";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PUBLIC_HOME_URL } from "$env/static/public";
import { user } from "$lib/api/urls";

export const load: PageServerLoad = async ({ fetch })=> {
  let currentAccess: string | null = null;
  access.subscribe((value) => (currentAccess = value));
  const api = user.logout;
  await fetch(api.url, {
    method: api.method,
    headers: {
      Authorization: `Bearer ${currentAccess}`
    }
  });

  access.set(null);
  code.set(null);
  isValid.set(false);

	redirect(302, PUBLIC_HOME_URL);
};