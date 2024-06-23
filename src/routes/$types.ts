import type { Cookies } from '@sveltejs/kit';

export type MainPageServerLoad = ({ cookies }: { cookies: Cookies }) => Promise<void>;

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
