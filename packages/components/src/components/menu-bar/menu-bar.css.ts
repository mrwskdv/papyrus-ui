import { atoms } from '@papyrus-ui/style-utils';

export const root = atoms({
  display: 'inline-flex',
  mx: '-0.5',
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

export const rootBlock = atoms({
  width: 'full',
});
