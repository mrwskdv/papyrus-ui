import { style } from '@vanilla-extract/css';

import { vars } from '../../../../styles';

export const rootInvalid = style({
  selectors: {
    '&::-webkit-slider-thumb': {
      background: vars.color.danger500,
    },

    '&::-moz-range-thumb': {
      background: vars.color.danger500,
    },

    '&:focus-visible::-webkit-slider-thumb': {
      boxShadow: vars.boxShadow.focusDanger,
    },

    '&:focus-visible::-moz-range-thumb': {
      boxShadow: vars.boxShadow.focusDanger,
    },
  },
});
