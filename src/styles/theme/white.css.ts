import { createTheme } from '@vanilla-extract/css';
import { theme } from './contract.css';

export const whiteTheme = createTheme(theme, {
	primary: {
		normal: '#ff7700',
		dark: '#CF6100',
		light: '#ffe600'
	},
	page: {
		background: '#F5F5F5',
		contentContainer: '#FFFFFF'
	},
	text: {
		normal: '#222222',
		light: '242424',
		dark: '000000',
		primary: '#ff7700'
	}
});
