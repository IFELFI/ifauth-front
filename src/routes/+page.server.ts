import { isValid } from "$stores/auth";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{ valid: boolean }> = () => {
	let currentIsValid = false;
	isValid.subscribe((value) => (currentIsValid = value));
	return {
		valid: currentIsValid
	};
};