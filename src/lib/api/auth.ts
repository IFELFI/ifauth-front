import { PUBLIC_AUTH_API } from '$env/static/public';
import type { ReplyData, AuthReplyData } from '$types/reply';
import { axiosApi } from '.';

export const local = {
	signin: async (email: string, password: string, auto: boolean = false) => {
		return await axiosApi.request<AuthReplyData>({
			url: '/auth/local/login',
			method: 'POST',
			data: { email, password, auto }
		});
	},
	signup: async (email: string, name: string, password: string) => {
		return await axiosApi.request<AuthReplyData>({
			url: '/auth/local/signup',
			method: 'POST',
			data: { email, name, password }
		});
	}
};

export const auto = {
	verify: async () => {
		return await axiosApi.request<AuthReplyData>({
			url: '/auth/auto/verify',
			method: 'GET'
		});
	},
	issue: async (code: string) => {
		return await axiosApi.request<ReplyData<undefined>>({
			url: `/auth/auto/issue?code=${code}`,
			method: 'GET'
		});
	}
};

export const localV2 = {
	signin: {
		url: `${PUBLIC_AUTH_API}/auth/local/login`,
		method: 'POST',
	},
	issueAuto: (code: string) => {
		return {
			url: `${PUBLIC_AUTH_API}/auth/auto/issue?code=${code}`,
			method: 'GET',
		}
	}
}