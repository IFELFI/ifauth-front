import { writable } from "svelte/store";

export const redirectStore = writable<string | null>(null);