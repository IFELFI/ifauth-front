import { style } from "@vanilla-extract/css";

export const mainLogo = style({
  fontSize: '4rem',
});

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '20px',
  width: 'clamp(500px, 50%, 900px)',
  height: 'clamp(200px, 30vh, 500px)'
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column'
});

export const infoTitle = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  textTransform: 'capitalize'
});

export const infoText = style({
  fontSize: '1rem'
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const btn = style({
  padding: '1rem',
  margin: '1rem',
  borderRadius: '10px',
  backgroundColor: 'rgb(255, 115, 0)',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgb(255, 230, 0)'
    }
  }
});