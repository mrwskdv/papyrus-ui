import { atoms } from '../../../../styles';

export const root = atoms({
  display: 'inline-flex',
  px: 0.5,
});

export const rootVariant = {
  primary: atoms({
    bg: 'white',
  }),
  secondary: atoms({
    bg: 'white',
  }),
  dark: atoms({
    bg: 'primary700',
  }),
};

export const rootBlock = atoms({
  width: 'full',
});
