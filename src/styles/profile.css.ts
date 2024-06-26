import { style } from "@vanilla-extract/css";

export const profilePageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '90vw',
  minHeight: '70vh',
  padding: '2rem',
});

export const profilePageLogo = style({
  display: 'flex',
  fontSize: '4rem',
  fontWeight: 'bold',
  justifyContent: 'center',
  marginTop: '2rem',
  marginBottom: '2rem',
});

export const profilePageColumnContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})

export const cardContainer = style({  
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
  border: '1px solid gray',
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  padding: '4rem',
  marginBottom: '2rem',
  backgroundColor: 'white',
})

export const imageContainer = style({
	display: 'flex',
	position: 'relative',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	':hover': {

  }
});

export const image = style({
	width: '300px',
	height: '300px',
	borderRadius: '50%',
	backgroundColor: 'white',
	transition: '.5s ease',
	backfaceVisibility: 'hidden'
});

export const middle = style({
  transition: '.5s ease',
  opacity: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
})

export const text = style({
  opacity: 0.8,
  padding: '10px',
  borderRadius: '20px',
  fontSize: '1rem',
  color: 'white',
  backgroundColor: '#4855ff'
})

export const infoContainer = style({
  display: 'grid',
  gridTemplateColumns: '0.5fr 1fr',
  width: '80%',
  rowGap: '1rem',
})

export const infoTitle = style({
  fontSize: '1.25rem',
  textTransform: 'capitalize',
  marginRight: '1rem',
  ':after': {
    content: '":"',
  }
})

export const infoContent = style({
  fontSize: '0.8rem',
  border: '1px solid gray',
  alignContent: 'center',
  width: '100%',
  paddingLeft: '0.5rem',
})