import { AUTH_API } from "$env/static/private"
import { apiFetch } from "./util/fetch";

export const user = {
  logout: async () => {
    const url = AUTH_API + '/user/logout';
    const response = await apiFetch(url, {
      method: 'GET',
    })

    return response;
  },
  profile: async () => {
    const url = AUTH_API + '/user/profile';
    const response = await apiFetch(url, {
      method: 'GET',
    })

    console.log(response);
    
    return response;
  }
}