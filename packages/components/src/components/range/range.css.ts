import { vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

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
