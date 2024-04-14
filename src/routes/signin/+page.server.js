import { AUTH_API } from '$env/static/private'
export const actions = {
  login: async ({ request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')
    if (!email || !password) {
      return {
        status: 400,
        body: {
          message: 'Email and password are required'
        }
      }
    }
    const response = await fetch(AUTH_API + '/auth/local/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      return {
        status: 200,
        body: {
          message: 'Signin successful'
        }
      }
    }

    return {
      status: response.status,
      body: await response.json()
    }
  }
}