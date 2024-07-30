import { style } from '@vanilla-extract/css';

export const cardContainer = style({
	display: 'block',
	padding: '3rem 4rem',
	borderRadius: '2rem',
	backgroundColor: 'white',
	justifyContent: 'center',
	alignContent: 'center',
  alignItems: 'center',
  justifyItems: 'center',

  boxSizing: 'border-box',

  width: 'clamp(35rem, 50vw, 43rem)',
  height: '25rem',

  '@media': {
    // If the screen width is less than 600px, the width and height will be 100%.
    'screen and (max-width: 600px)': {
      width: '100%',
      height: '100%',
    },
    // If the screen height is less than 25rem, the height will be filled.
    'screen and (max-height: 25rem)': {
      height: 'clamp(20rem, 100vh, 25rem)',
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
      gap: '1rem',
    }
  }
})

export const cardLeft = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  height: '100%',
})

export const miniCardLeft = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100%',
  gap: '1rem',
})