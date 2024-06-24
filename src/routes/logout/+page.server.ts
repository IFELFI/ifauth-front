import { access, code } from "$stores/auth";
import type { Cookies } from "@sveltejs/kit";
import type { LogoutPageServerLoad } from "../$types";

export const load: LogoutPageServerLoad = async ({cookies}: {cookies: Cookies}) => {
  access.set(null);
  code.set(null);
  cookies.set("refresh", "", {path: "/", httpOnly: true, maxAge: 0});
  cookies.set("autoLogin", "", {path: "/", httpOnly: true, maxAge: 0});
}