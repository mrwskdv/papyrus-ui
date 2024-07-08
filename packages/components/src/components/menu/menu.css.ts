import { atoms } from '@papyrus-ui/styles';

export const root = atoms({
  display: 'flex',
  flexDirection: 'column',
  py: 0.5,
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
