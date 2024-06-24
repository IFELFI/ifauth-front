import type { ReplyData } from "$types/reply"
import { fail } from "@sveltejs/kit"
import axios from "axios"

export const errorHandler = async (error: unknown) => {
  if (axios.isAxiosError<ReplyData<undefined>>(error)) {
    return fail(error.status || 400, {
      error: error.response?.data?.message || "Invalid response"
    })
  }
  return fail (400, {
    error: "Invalid response"
  })
}