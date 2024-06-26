import { style, type StyleRule } from "@vanilla-extract/css"

const alertCox: StyleRule = {
  padding: '1rem',
  backgroundColor: 'grey',
  borderRadius: '10px',
  margin: '1rem',
  color: 'white',
} as const;

export const success = style({
  ...alertCox,
  backgroundColor: 'lightgreen',
});

export const error = style({
  ...alertCox,
  backgroundColor: 'lightcoral',
});

export const warning = style({
  ...alertCox,
  backgroundColor: 'rgb(255, 154, 46)',
});

export const info = style({
  ...alertCox,
  backgroundColor: 'rgb(150, 217, 239)',
});