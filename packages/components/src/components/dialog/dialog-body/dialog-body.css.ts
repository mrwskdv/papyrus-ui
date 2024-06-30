import { atoms } from '@papyrus-ui/styles';

export const root = atoms({
  flex: 1,
});

export const rootSize = {
  sm: atoms({
    px: 4,
  }),
  md: atoms({
    px: 4,
    py: {
      mobile: 4,
      tablet: 0,
    },
  }),
  lg: atoms({
    px: 4,
    py: {
      mobile: 4,
      tablet: 0,
    },
  }),
};
