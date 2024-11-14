import { defaultButton, defaultPageContainer } from '../../styles/global/root.css';
import { style } from '@vanilla-extract/css';

export const pageContainer = defaultPageContainer;

export const homeContainer = style({
	display: 'flex',
	width: '100%',
	height: '100%',
	flexDirection: 'column',
	alignItems: 'flex-end',
	justifyContent: 'center',
	gap: '1rem'
});

export const infoContainer = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start'
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
			justifyContent: 'center'
		}
	}
});

export const homeButton = style([defaultButton,{
	padding: '1rem',
}]);
