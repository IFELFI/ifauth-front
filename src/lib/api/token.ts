import { AUTH_API } from "$env/static/private";
import { access } from "$lib/store";

export const validate = async () => {
  const url = AUTH_API + `/token/validate`;
  let accessToken: string | null = null;
  access.subscribe(value => accessToken = value);

  if (!accessToken) {
    return null;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    credentials: 'same-origin'
  })

  return response;
}