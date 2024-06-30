import { style } from '@vanilla-extract/css';

import { vars } from '../../../../styles';

export const rootInvalid = style({
  borderColor: vars.color.danger400,

  selectors: {
    '&:checked': {
      borderColor: 'transparent',
      backgroundColor: vars.color.danger500,
    },
    '&:checked:hover:not(:disabled)': {
      backgroundColor: vars.color.danger400,
    },
    '&:focus-visible': {
      boxShadow: vars.boxShadow.focusDanger,
    },
  },
});
