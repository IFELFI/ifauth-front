import { writable } from 'svelte/store';

export const access = writable<string | null>(null);
export const code = writable<string | null>(null);
export const isValid = writable<boolean>(false);
