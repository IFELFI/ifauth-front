import { AUTH_API } from "$env/static/private";

export const signin = {
  local: async (email: string, password: string) => {
    const url = AUTH_API + '/auth/local/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    return response;
  }
}

export const signup = {
  local: async (email: string, name: string, password: string) => {
    const url = AUTH_API + '/auth/local/signup';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    return response;
  }
}