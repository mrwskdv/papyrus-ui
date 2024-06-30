import { style } from '@vanilla-extract/css';

import { atoms, vars } from '../../../../styles';

export const root = atoms({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const rootSize = {
  xs: atoms({ width: 5, height: 5, rounded: 'sm' }),
  sm: atoms({ width: 6, height: 6, rounded: 'sm' }),
  md: atoms({ width: 8, height: 8, rounded: 'sm' }),
  lg: atoms({ width: 12, height: 12, rounded: 'md' }),
  xl: atoms({ width: 16, height: 16, rounded: 'lg' }),
};

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});

export const text = atoms({
  position: 'absolute',
  color: 'white',
  fontWeight: 'semiBold',
  lineHeight: 'none',
  whiteSpace: 'nowrap',
});

export const textSize = {
  xs: atoms({ fontSize: 'xs' }),
  sm: atoms({ fontSize: 'xs' }),
  md: atoms({ fontSize: 'sm' }),
  lg: atoms({ fontSize: '2xl' }),
  xl: atoms({ fontSize: '4xl' }),
};

export const icon = atoms({ position: 'absolute', color: 'white' });

export const iconSize = {
  xs: atoms({ fontSize: 'sm' }),
  sm: atoms({ fontSize: 'md' }),
  md: atoms({ fontSize: 'xl' }),
  lg: atoms({ fontSize: '3xl' }),
  xl: atoms({ fontSize: '5xl' }),
};

export const image = atoms({
  position: 'absolute',
  width: 'full',
  height: 'full',
  objectFit: 'cover',
});
