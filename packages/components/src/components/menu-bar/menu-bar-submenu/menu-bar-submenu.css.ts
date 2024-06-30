import { atoms } from '@papyrus-ui/styles';

export const menuList = atoms({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 80,
  maxWidth: 'xs',
  border: 1,
  rounded: 'lg',
  boxShadow: 'lg',
  py: 0.5,
  zIndex: 10,
});

export const menuListVariant = {
  primary: atoms({
    borderColor: 'neutral100',
    bg: 'white',
  }),
  secondary: atoms({
    borderColor: 'neutral100',
    bg: 'white',
  }),
  dark: atoms({
    borderColor: 'primary800',
    bg: 'primary700',
  }),
};
