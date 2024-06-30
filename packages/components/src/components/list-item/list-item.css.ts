import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',

  selectors: {
    '& + &': {
      marginTop: '.5em',
    },
  },
});
