import { atoms } from '@papyrus-ui/style-utils';

export const root = atoms({
  display: 'flex',
  flexDirection: 'column',
  my: '-0.5',
});

export const rootVariant = {
  primary: atoms({
    bg: 'white',
  }),
  secondary: atoms({
    bg: 'white',
  }),
  ghost: atoms({
    bg: 'primary700',
  }),
};
