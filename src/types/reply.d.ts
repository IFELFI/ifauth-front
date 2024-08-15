import type { Profile } from './data';

export interface AuthReplyData {
	code?: string;
	message?: string;
}

export interface ReplyData<T = undefined> {
	message: string;
	data: T;
}

export interface ProfileReplyData extends ReplyData<Profile> {}
