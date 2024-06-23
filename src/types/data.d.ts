export interface Profile {
	email: string;
	nickname: string;
	imageUrl: string | null;
	joinDate: string;
	updateDate: string;
	provider: ProviderType;
}

export type ProviderType = 'local' | 'google';
