import type { profile } from '$lib/api/interfaces/data.interface';
import type { Cookies } from '@sveltejs/kit';

export interface MainPageData {
	profile: profile;
}

export type MainPageServerLoad = ({ cookies }: { cookies: Cookies }) => Promise<MainPageData>;

export interface LayoutData {
	homeUrl: string;
}

export type LayoutServerLoad = () => Promise<LayoutData>;

export type SigninPageServerLoad = ({
	cookies,
	url
}: {
	cookies: Cookies;
	url: URL;
}) => Promise<void>;
