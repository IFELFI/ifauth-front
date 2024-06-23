import { writable } from "svelte/store";

export const requestCount = writable<number>(0);

export const incrementRequestCount = () => {
  requestCount.update((count) => count + 1);
};
export const resetRequestCount = () => {
  requestCount.set(0);
};