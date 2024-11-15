export interface AuthResponse {
	code?: string;
	message?: string;
}

export interface CustomResponse<T = undefined> {
	message: string;
	data: T;
}

export interface IExceptionResponse {
	statusCode: number;
	error: string;
	message: string;
	path: string;
	timestamp: string;
}
