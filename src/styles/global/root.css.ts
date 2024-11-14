import { theme } from '../../styles/theme/contract.css';
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
	color: 'rgba(0, 0, 0, 0.8)',
	backgroundColor: 'white'
});

export const fullPage = style({
	width: '100%',
	height: '100%'
});

export const flexCenter = style([
	fullPage,
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
]);

export const defaultPageContainer = style([
	flexCenter,
	{
		backgroundColor: theme.page.background,
		color: theme.text.normal
	}
]);

export const defaultLink = style({
	textDecorationLine: 'none',
	color: theme.primary.normal,
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'color 0.3s',

	':hover': {
		color: theme.primary.light
	}
});

export const defaultButton = style({
	padding: '0.5rem 1rem',
	border: 'none',
	borderRadius: '10px',
	backgroundColor: theme.primary.normal,
	color: 'white',
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'background-color 0.3s',
	textDecorationLine: 'none',

	':hover': {
		backgroundColor: theme.primary.light
	},

	':disabled': {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		cursor: 'not-allowed'
	}
});
