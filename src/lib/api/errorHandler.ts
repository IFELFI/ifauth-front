import { fail } from "@sveltejs/kit"

export const errorHandler = async (response: Response) => {
  if (response.status === 502) {
    return fail(502, {
      error: 'Server is down'
    })
  }

  try {
    const { message } = await response.json();
    return fail(response.status, {
      error: message
    })
  } catch (error) {
    return fail(response.status, {
      error: 'Unknown error'
    })
  }
}