import { style } from '@vanilla-extract/css';

export const cardContainer = style({
	display: 'block',
	width: 'clamp(400px, 50%, 800px)',
	minHeight: '200px',
	padding: '3rem 4rem',
	borderRadius: '2rem',
	backgroundColor: 'white',
	justifyContent: 'center',
	alignContent: 'center'
});

export const card = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

export const cardLeft = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  gap: '1rem',
})