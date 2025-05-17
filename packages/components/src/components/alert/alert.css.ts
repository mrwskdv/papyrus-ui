import { atoms } from '@papyrus-ui/style-utils';

export const root = atoms({
  position: 'relative',
  rounded: 'lg',
  ps: 4,
  py: 3,
  border: 1,
  overflow: 'hidden',
});

export const rootVariant = {
  primary: atoms({
    borderColor: 'primary200',
    color: 'primary600',
    bg: 'primary50',
  }),
  info: atoms({
    borderColor: 'info200',
    color: 'info600',
    bg: 'info50',
  }),
  success: atoms({
    borderColor: 'success200',
    color: 'success600',
    bg: 'success50',
  }),
  warning: atoms({
    borderColor: 'warning200',
    color: 'warning600',
    bg: 'warning50',
  }),
  danger: atoms({
    borderColor: 'danger200',
    color: 'danger600',
    bg: 'danger50',
  }),
};

export const icon = atoms({
  fontSize: '3xl',
});

export const iconVariant = {
  primary: atoms({
    color: 'primary500',
  }),
  info: atoms({
    color: 'info500',
  }),
  success: atoms({
    color: 'success500',
  }),
  warning: atoms({
    color: 'warning500',
  }),
  danger: atoms({
    color: 'danger500',
  }),
};

export const close = atoms({
  position: 'absolute',
  top: 3,
  end: 3,
});
