export interface profile {
	email: string;
	nickname: string;
	imageUrl: string | null;
	joinDate: Date;
	updateDate: Date;
	provider: provider_type;
}

export type provider_type = 'local' | 'google'