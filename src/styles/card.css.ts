import { style } from "@vanilla-extract/css";
import { theme } from "./theme/contract.css";

export const cardContainer = style({
	display: 'block',
	padding: '4rem',
	borderRadius: '2rem',
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	justifyItems: 'center',
	boxSizing: 'border-box',
	backgroundColor: theme.page.contentContainer,

	width: 'clamp(35rem, 70%, 43rem)',
	height: 'auto',

	'@media': {
		// If the screen width is less than 600px, the width and height will be 100%.
		'screen and (max-width: 600px)': {
			width: '100%',
			minWidth: '10rem',
			padding: '2rem'
		}
	}
});

export const card = style({
	display: 'flex',
	flexDirection: 'row',
	gap: '3rem',
	width: '100%',
	height: '100%',

	'@media': {
		'screen and (max-width: 600px)': {
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem'
		}
	}
});

export const cardLeft = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1rem',
	height: '100%'
});

export const miniCardLeft = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: '1rem'
});

export const contentContainer = style({
	display: 'block',
	width: '80%',
	height: '100%',
	backgroundColor: 'white',
	alignItems: 'center'
});

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	padding: '1.5rem',
	boxSizing: 'border-box',
	width: '100%',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center'
});
