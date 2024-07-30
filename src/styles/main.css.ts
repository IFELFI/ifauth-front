import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
	width: '100%',
	height: '100%',
  flexDirection: 'column',
	justifyContent: 'center',
  gap: '1rem',
});

export const infoContainer = style({
	display: 'flex',
	flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const infoTitle = style({
	fontSize: '2rem',
	fontWeight: 'bold',
	textTransform: 'capitalize',
	whiteSpace: 'nowrap'
});

export const infoText = style({
	fontSize: '1rem'
});

export const buttonContainer = style({
	display: 'flex',
	justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',

	'@media': {
		'screen and (max-width: 600px)': {
			justifyContent: 'center',
		}
	}
});

export const btn = style({
	padding: '1rem',
	borderRadius: '10px',
	backgroundColor: 'rgb(255, 115, 0)',
	color: 'white',
	fontSize: '1rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	transition: 'background-color 0.3s',
  textDecorationLine: 'none',
	selectors: {
		'&:hover': {
			backgroundColor: 'rgb(255, 230, 0)'
		}
	}
});
