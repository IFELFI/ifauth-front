import { AUTH_API } from "$env/static/private";
import { apiFetch } from "./util/fetch";

export const signin = {
  local: async (email: string, password: string) => {
    const url = AUTH_API + '/auth/local/login';
    const response = await apiFetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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