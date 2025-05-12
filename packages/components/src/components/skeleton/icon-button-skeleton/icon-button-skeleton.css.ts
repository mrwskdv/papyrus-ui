import { atoms, vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const rootSize = {
  sm: atoms({
    width: 7,
    height: 7,
  }),
  md: atoms({
    width: 9,
    height: 9,
  }),
  lg: atoms({
    width: 12,
    height: 12,
  }),
};

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});
