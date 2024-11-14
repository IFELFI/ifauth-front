import type { IProfile } from './data';

export interface IAuthReplyData {
	code?: string;
	message?: string;
}

export interface IReply<T = undefined> {
	message: string;
	data: T;
}

export interface IProfileReply extends IReply<IProfile> {}

export interface IExceptionResponse {
	statusCode: number;
	error: string;
	message: string;
	path: string;
	timestamp: string;
}
