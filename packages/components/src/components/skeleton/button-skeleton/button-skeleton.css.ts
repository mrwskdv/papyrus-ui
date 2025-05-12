import { atoms, vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const rootSize = {
  sm: atoms({
    minWidth: 24,
    height: 7,
  }),
  md: atoms({
    minWidth: 28,
    height: 9,
  }),
  lg: atoms({
    minWidth: 36,
    height: 12,
  }),
};

export const rootBlock = style({
  width: '100%',
});

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});
