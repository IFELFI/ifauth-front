import { AUTH_API } from "$env/static/private"

export const user = {
  logout: async () => {
    const url = AUTH_API + '/user/logout';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })

    return response;
  },

  profile: async () => {
    const url = AUTH_API + '/user/profile';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })

    return response;
  }
}