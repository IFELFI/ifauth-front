import { access, code } from "$stores/auth";
import { redirect, type Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }: { cookies: Cookies }) => {
	access.set(null);
	code.set(null);
	cookies.set('REF', '', { path: '/', httpOnly: true, maxAge: 0 });
	cookies.set('AUTO', '', { path: '/', httpOnly: true, maxAge: 0 });
	redirect(302, '/');
};