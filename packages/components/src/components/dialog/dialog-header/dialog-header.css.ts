import { atoms, bpUp, vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style([
  {
    display: 'flex',
    alignItems: 'center',
    background: vars.color.white,
  },
  bpUp('tablet', {
    background: 'transparent',
  }),
]);

export const rootSize = {
  sm: atoms({
    p: 4,
  }),
  md: atoms({
    position: {
      mobile: 'sticky',
      tablet: 'static',
    },
    bottom: 0,
    borderColor: 'neutral100',
    borderBottom: {
      mobile: 1,
      tablet: 0,
    },
    px: 4,
    py: {
      mobile: 1.5,
      tablet: 4,
    },
    zIndex: 20,
  }),
  lg: atoms({
    position: {
      mobile: 'sticky',
      tablet: 'static',
    },
    bottom: 0,
    borderColor: 'neutral100',
    borderBottom: {
      mobile: 1,
      tablet: 0,
    },
    px: 4,
    py: {
      mobile: 1.5,
      tablet: 4,
    },
    zIndex: 20,
  }),
};
