import type { ReplyData, ProfileReplyData } from '$types/reply';
import { axiosApi } from '.';

export const user = {
	logout: () => {
		return axiosApi.request<ReplyData<undefined>>({
			url: '/auth/auto/logout',
			method: 'GET'
		});
	},
	profile: () => {
		return axiosApi.request<ProfileReplyData>({
			url: '/user/profile',
			method: 'GET'
		});
	}
};
