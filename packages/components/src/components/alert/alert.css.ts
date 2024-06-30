import { atoms } from '../../../../styles';

export const root = atoms({
  border: 1,
  px: 4,
  py: 3,
  rounded: 'lg',
});

export const rootVariant = {
  primary: atoms({
    borderColor: 'primary200',
    color: 'primary500',
    bg: 'primary50',
  }),
  success: atoms({
    borderColor: 'success200',
    color: 'success500',
    bg: 'success50',
  }),
  warning: atoms({
    borderColor: 'warning200',
    color: 'warning500',
    bg: 'warning50',
  }),
  danger: atoms({
    borderColor: 'danger200',
    color: 'danger500',
    bg: 'danger50',
  }),
};

export const iconVariant = {
  primary: atoms({
    color: 'primary400',
  }),
  success: atoms({
    color: 'success400',
  }),
  warning: atoms({
    color: 'warning400',
  }),
  danger: atoms({
    color: 'danger400',
  }),
};
