import { style } from '@vanilla-extract/css';

export const authContainer = style({
	display: 'grid',
	gridTemplateRows: 'auto 1fr',
	gridTemplateColumns: '1fr 1.5fr',
	width: 'clamp(400px, 50%, 800px)',
	minHeight: '300px',
	padding: '3rem 4rem',
	borderRadius: '20px',
	backgroundColor: 'white',
});

export const logoContainer = style({
	selectors: {
		[`&:first-child`]: {
			gridColumn: '1 / span 2'
		}
	}
});

export const logo = style({
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const pathContainer = style({
  display: 'flex',
  fontSize: '2.5rem',
});

export const guideContainer = style({
  display: 'flex',
  fontSize: '1rem',
});

export const alertContainer = style({
  position: 'absolute',
  bottom: '0',
  right: '0',
});

export const formContainer = style({ 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});