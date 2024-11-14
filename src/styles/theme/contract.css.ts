import { createThemeContract } from '@vanilla-extract/css';

export const theme = createThemeContract({
	primary: {
		normal: '',
		dark: '',
		light: ''
	},
	page: {
		background: '',
		contentContainer: ''
	},
	text: {
		normal: '',
		light: '',
		dark: '',
		primary: ''
	}
});
