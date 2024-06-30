import { atoms } from '@papyrus-ui/styles';

export const menuList = atoms({
  display: 'flex',
  flexDirection: 'column',
  py: 0.5,
});

export const menuListVariant = {
  primary: atoms({
    bg: 'neutral50',
  }),
  secondary: atoms({
    bg: 'neutral50',
  }),
  dark: atoms({
    bg: 'primary800',
  }),
};
