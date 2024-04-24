export const signin = {
  local: async (url: string, email: string, password: string) => {
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
  local: async (url: string, email: string, name: string, password: string) => {
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