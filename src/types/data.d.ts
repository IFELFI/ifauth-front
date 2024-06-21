export interface profile {
	email: string;
	nickname: string;
	imageUrl: string | null;
	joinDate: string;
	updateDate: string;
	provider: provider_type;
}

export type provider_type = 'local' | 'google'