import { atoms } from '@papyrus-ui/styles';

export const root = atoms({
  width: 'full',
  maxWidth: 'lg',
  minWidth: 64,
  rounded: 'lg',
  px: 4,
  py: 3,
  shadow: 'lg',
  overflow: 'hidden',
  pointerEvents: 'auto',
});

export const rootVariant = {
  primary: atoms({
    bg: 'primary600',
  }),
  success: atoms({
    bg: 'success600',
  }),
  warning: atoms({
    bg: 'warning600',
  }),
  danger: atoms({
    bg: 'danger600',
  }),
};
