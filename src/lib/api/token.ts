import { axiosApi } from '.';
import type { AxiosResponse } from 'axios';
import type { ReplyData } from '$types/reply';

export const token = {
	issue: (code: string): Promise<AxiosResponse<ReplyData<undefined>>> => {
		return axiosApi.request<ReplyData<undefined>>({
			url: `/token/issue?code=${code}`,
			method: 'GET'
		});
	},
	refresh: (): Promise<AxiosResponse<ReplyData<undefined>>> => {
		return axiosApi.request<ReplyData<undefined>>({
			url: '/token/refresh',
			method: 'GET'
		});
	},
	isValid: (): Promise<AxiosResponse<ReplyData<undefined>>> => {
		return axiosApi.request<ReplyData<undefined>>({
			url: '/token/valid',
			method: 'GET'
		});
	}
};
