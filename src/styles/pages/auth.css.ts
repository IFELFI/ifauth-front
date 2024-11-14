import { style } from '@vanilla-extract/css';
import { defaultButton, defaultLink, defaultPageContainer } from '../global/root.css';

export const pageContainer = defaultPageContainer;

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
	fontSize: '2rem',
	fontWeight: 'bold',
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
  height: '100%',
	flexDirection: 'column',
	gap: '1rem'
});

export const authForm = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
});

export const authFormInput = style({
	padding: '1rem',
	width: '100%',
	borderRadius: '10px',
	border: '1px solid rgba(0, 0, 0, 0.2)',
	fontSize: '1rem',
	outline: 'none',
	transition: 'border-color 0.3s',
	boxSizing: 'border-box',

  ':focus': { 
    borderColor: 'rgb(255, 115, 0)'
  }
});

export const authFormInputSmall = style([authFormInput, {
  padding: '0.75rem 1rem',
}]);

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

export const authFormButton = defaultButton;

export const authFormLink = defaultLink;

