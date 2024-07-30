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

  width: 'clamp(600px, 50vw, 700px)',
  height: 'clamp(400px, 30vw, 100vh)',

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      height: '100%',
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