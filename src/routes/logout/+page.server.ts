import { access, code } from "$stores/auth";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PUBLIC_HOME_URL } from "$env/static/public";
import { user } from "$lib/api/urls";

export const load: PageServerLoad = async ({ fetch })=> {
  let currentAccess: string | null = null;
  access.subscribe((value) => (currentAccess = value));
  const api = user.logout;
  const response = await fetch(api.url, {
    method: api.method,
    headers: {
      Authorization: `Bearer ${currentAccess}`
    }
  });

  if (response.status === 200) {
    access.set(null);
    code.set(null);
  }

	redirect(302, PUBLIC_HOME_URL);
};