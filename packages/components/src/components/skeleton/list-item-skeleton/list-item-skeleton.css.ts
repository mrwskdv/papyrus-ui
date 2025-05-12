import { style } from '@vanilla-extract/css';

export const root = style({
  selectors: {
    '& + &': {
      marginTop: '.5em',
    },
  },
});
