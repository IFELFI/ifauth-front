import { PUBLIC_HOME_URL } from "$env/static/public";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  return {
    homeUrl: PUBLIC_HOME_URL 
  }
}