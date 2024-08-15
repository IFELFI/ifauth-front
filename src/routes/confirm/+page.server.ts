import { local } from "$lib/api/urls";
import { fail } from "@sveltejs/kit";

export const load = async ({ url, fetch }) => {
  const token = url.searchParams.get('token');
  if (!token) {
    return fail(400, {
      error: 'Token is required'
    });
  }
  const confirmApi = local.confirm(token);
  const response = await fetch(confirmApi.url, {
    method: confirmApi.method
  });

  if (!response.ok) {
    return fail(400, {
      error: 'Invalid token'
    });
  }

  return {
    status: 200,
    body: {
      message: 'Email confirmed'
    }
  };
}