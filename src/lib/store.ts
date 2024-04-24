import { writable } from "svelte/store";

export const access = writable<string | null>(null);