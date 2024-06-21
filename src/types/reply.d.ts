import type { profile } from './data';

export interface replyData<T = undefined> {
	message: string;
	data: T;
}

export interface replyProfile extends replyData<profile> {}
