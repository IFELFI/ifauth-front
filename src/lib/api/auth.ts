import { AUTH_API } from "$env/static/private";
import { apiFetch } from "./util/fetch";

export const signin = {
  local: async (email: string, password: string, auto: boolean = false) => {
    const url = AUTH_API + '/auth/local/login';
    const response = await apiFetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password, auto }),
    });

    return response;
  },
  auto: async () => {
    const url = AUTH_API + '/auth/auto/verify'
    const response = await apiFetch(url, {
      method: 'GET',
    });

    return response;
  }
}

export const signup = {
  local: async (email: string, name: string, password: string) => {
    const url = AUTH_API + '/auth/local/signup';
    const response = await apiFetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
    });

    return response;
  }
}