import { globalStyle, style } from '@vanilla-extract/css';

export const authInfoContainer = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	height: '100%',
	justifyContent: 'center',
	paddingBottom: '2rem',

	'@media': {
		'(max-width: 600px)': {
			width: '100%',
			alignItems: 'center'
		}
	}
});

export const authPath = style({
	display: 'flex',
	fontSize: '2.5rem',
	textTransform: 'capitalize',
	whiteSpace: 'nowrap'
});

export const authGuide = style({
	display: 'flex',
	fontSize: '1rem'
});

export const formContainer = style({
	display: 'flex',
	height: '100%',
	width: '100%',
	flexDirection: 'column',
	justifyContent: 'center',

	'@media': {
		'(max-width: 600px)': {
			width: '100%'
		}
	}
});

// Signin Form
export const loginForm = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem'
});

globalStyle(`${loginForm} input`, {
	padding: '1rem',
	width: '100%',
	borderRadius: '10px',
	border: '1px solid rgba(0, 0, 0, 0.2)',
	fontSize: '1rem',
	outline: 'none',
	transition: 'border-color 0.3s',
	boxSizing: 'border-box'
});

globalStyle(`${loginForm} input:focus`, {
	borderColor: 'rgb(255, 115, 0)'
});

// Signup Form
export const signupForm = style({
	display: 'flex',
	width: '100%',
	flexDirection: 'column',
	gap: '1rem'
});

globalStyle(`${signupForm} input`, {
	padding: '0.75rem 1rem',
	width: '100%',
	borderRadius: '10px',
	border: '1px solid rgba(0, 0, 0, 0.2)',
	fontSize: '1rem',
	outline: 'none',
	transition: 'border-color 0.3s',
	boxSizing: 'border-box'
});

globalStyle(`${signupForm} input:focus`, {
	borderColor: 'rgb(255, 115, 0)'
});

export const authButtonContainer = style({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	gap: '1rem',

	'@media': {
		'(max-width: 600px)': {
			justifyContent: 'center'
		}
	}
});

globalStyle(`${authButtonContainer} a:hover`, {
	color: 'rgb(255, 230, 0)'
});
