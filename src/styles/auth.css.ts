import { globalStyle, style } from '@vanilla-extract/css';

export const authInfoContainer = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	height: '100%',
	justifyContent: 'center',
	paddingBottom: '2rem',

	'@media': {
		'(max-width: 800px)': {
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
	width: '100%',
	flexDirection: 'column',
	justifyContent: 'center'
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
		'(max-width: 800px)': {
			justifyContent: 'center'
		}
	}
});

globalStyle(`${authButtonContainer} button`, {
	padding: '0.5rem 1rem',
	border: 'none',
	borderRadius: '10px',
	backgroundColor: 'rgb(255, 115, 0)',
	color: 'white',
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'background-color 0.3s',
	textDecorationLine: 'none'
});

globalStyle(`${authButtonContainer} button:hover`, {
	backgroundColor: 'rgb(255, 230, 0)'
});

globalStyle(`${authButtonContainer} button:disabled`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	cursor: 'not-allowed'
});

globalStyle(`${authButtonContainer} a`, {
	textDecorationLine: 'none',
	color: 'rgb(255, 115, 0)',
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'color 0.3s'
});

globalStyle(`${authButtonContainer} a:hover`, {
	color: 'rgb(255, 230, 0)'
});
