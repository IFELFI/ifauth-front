import { PUBLIC_AUTH_API } from "$env/static/public";

export const auth = {
  local: {
    signin: {
      url: `${PUBLIC_AUTH_API}/auth/local/login`,
      method: 'POST',
    },
    signup: {
      url: `${PUBLIC_AUTH_API}/auth/local/signup`,
      method: 'POST',
    }
  }
}

export const auto = {
  verify: {
    url: `${PUBLIC_AUTH_API}/auth/auto/verify`,
    method: 'GET',
  },
  issue: (code: string) => {
    return {
      url: `${PUBLIC_AUTH_API}/auth/auto/issue?code=${code}`,
      method: 'GET',
    }
  }
}

export const token = {
  verify: {
    url: `${PUBLIC_AUTH_API}/auth/token/verify`,
    method: 'GET',
  },
  refresh: {
    url: `${PUBLIC_AUTH_API}/auth/token/refresh`,
    method: 'GET',
  }
}