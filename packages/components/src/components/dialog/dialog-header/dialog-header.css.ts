import { atoms } from '@papyrus-ui/styles';

export const root = atoms({
  display: 'flex',
  alignItems: 'center',
  bg: 'white',
});

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
      mobile: 2.5,
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
      mobile: 2.5,
      tablet: 4,
    },
    zIndex: 20,
  }),
};
