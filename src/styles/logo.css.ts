import { style } from '@vanilla-extract/css';

export const logoContainer = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	textDecorationLine: 'none',
	gap: '0.5rem'
});

export const logoText = style({
	display: 'block',
	alignContent: 'center',
	justifyContent: 'center',
	background: 'linear-gradient(90deg, rgb(255, 115, 0), rgb(255, 230, 0))',
	color: 'transparent',
	backgroundClip: 'text',
	textTransform: 'uppercase',
	fontWeight: 'bold',
	WebkitTextStroke: '1px black'
});

export const logoImg = style({
	display: 'block',
	alignContent: 'center',
	justifyContent: 'center',
	width: '100%'
});
