import { createTheme } from '@vanilla-extract/css';
import { theme } from './contract.css';

export const darkTheme = createTheme(theme, {
	primary: {
		normal: 'black',
		dark: 'black',
		light: 'black'
	},
	page: {
		background: '#000000',
		contentContainer: '#333333'
	},
	text: {
		normal: 'white',
		light: 'white',
		dark: 'white',
		primary: 'white'
	}
});
