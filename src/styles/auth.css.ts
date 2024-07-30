import { style } from '@vanilla-extract/css';

export const authCard = style({
	display: 'grid',
	gridTemplateRows: 'auto 1fr',
	gridTemplateColumns: '1fr 1.5fr',
	width: 'clamp(400px, 50%, 800px)',
	minHeight: '300px',
	padding: '3rem 4rem',
	borderRadius: '20px',
	backgroundColor: 'white',

	'@media': {
		'(min-width: 400px)': {
			width: '50%',
			padding: '3rem 4rem'
		}
	}
});

export const logoContainer = style({
	display: 'flex',
	justifyContent: 'center',
	selectors: {
		[`&:first-child`]: {
			gridColumn: '1 / span 2'
		}
	}
});

export const authLogo = style({
	fontSize: '2rem'
});

export const infoContainer = style({
	display: 'flex',
	flexDirection: 'column'
});

export const pathContainer = style({
	display: 'flex',
	fontSize: '2.5rem'
});

export const guideContainer = style({
	display: 'flex',
	fontSize: '1rem'
});

export const formContainer = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
});
