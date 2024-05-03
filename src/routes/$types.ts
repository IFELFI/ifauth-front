import type { profile } from '$lib/api/interfaces/data.interface';
import type { Cookies } from '@sveltejs/kit';

export interface pageData {
	profile: profile;
}

export type PageServerLoad = ({ cookies }: { cookies: Cookies }) => Promise<pageData>;

export interface layoutData {
	homeUrl: string;
}

export type LayoutServerLoad = () => Promise<layoutData>;