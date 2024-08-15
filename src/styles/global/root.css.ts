import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('html', {
	width: '100%',
	height: '100%'
});

globalStyle('body', {
	display: 'flex',
	width: '100%',
	height: '100%',
	margin: 0,
	padding: 0,
	fontFamily: 'Roboto, sans-serif',
	userSelect: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	msUserSelect: 'none',
	backgroundColor: 'rgba(0, 0, 0, 0.05)',
	color: 'rgba(0, 0, 0, 0.8)'
});

export const defaultLink = style({
	textDecorationLine: 'none',
	color: 'rgb(255, 115, 0)',
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'color 0.3s',

	':hover': {
		color: 'rgb(255, 230, 0)'
	}
});

export const defaultButton = style({
	padding: '0.5rem 1rem',
	border: 'none',
	borderRadius: '10px',
	backgroundColor: 'rgb(255, 115, 0)',
	color: 'white',
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'background-color 0.3s',
	textDecorationLine: 'none',

	':hover': {
		backgroundColor: 'rgb(255, 230, 0)'
	},

	':disabled': {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		cursor: 'not-allowed'
	}
});
