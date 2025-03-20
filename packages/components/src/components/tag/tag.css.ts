import { atoms, vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = atoms({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 'full',
  border: 1,
  gap: 0.5,
  overflow: 'hidden',
});

export const rootVariant = {
  primary: atoms({
    borderColor: 'transparent',
    color: 'primary700',
    bg: 'primary100',
  }),
  secondary: atoms({
    borderColor: 'transparent',
    color: 'secondary700',
    bg: 'secondary100',
  }),
  tertiary: atoms({
    borderColor: 'neutral300',
    color: 'neutral900',
    bg: 'neutral50',
  }),
  info: atoms({
    borderColor: 'transparent',
    color: 'info700',
    bg: 'info100',
  }),
  success: atoms({
    borderColor: 'transparent',
    color: 'success700',
    bg: 'success100',
  }),
  warning: atoms({
    borderColor: 'transparent',
    color: 'warning700',
    bg: 'warning100',
  }),
  danger: atoms({
    borderColor: 'transparent',
    color: 'danger700',
    bg: 'danger100',
  }),
  ghost: atoms({
    borderColor: 'light600',
    color: 'white',
    bg: 'light300',
  }),
};

export const rootSize = {
  sm: atoms({
    height: 4,
    px: 1,
  }),
  md: atoms({
    height: 6,
    px: 1.5,
  }),
};

export const rootRemovable = style({
  pointerEvents: 'none',

  selectors: {
    '&:hover': {
      opacity: 1,
    },
  },
});

export const rootDisabled = style({
  opacity: '0.4',
});

export const label = style({
  display: 'block',
  ...vars.typography.caption,
  lineHeight: 1,
  marginBottom: '-0.125rem',
});

export const remove = style({ pointerEvents: 'auto' });
