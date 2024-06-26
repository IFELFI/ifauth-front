import type { Profile } from './data';

export interface ReplyData<T = undefined> {
	message: string;
	data: T;
}

export interface ProfileReplyData extends ReplyData<Profile> {}

export interface AuthReplyData extends ReplyData {
	code: string;
	autoAuthCode: string;
}
