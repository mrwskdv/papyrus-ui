import { style } from '@vanilla-extract/css';

import { atoms, vars } from '../../../../styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: vars.borderRadius.md,
  outline: '1px solid transparent',
  background: vars.color.neutral100,
  transition: vars.transition.base,
  overflow: 'hidden',
  cursor: 'text',

  selectors: {
    '&:hover': {
      outlineColor: vars.color.primary400,
    },
  },
});

export const rootSize = {
  sm: atoms({
    minHeight: 7,
    px: 1.5,
    py: 0.5,
  }),
  md: atoms({
    minHeight: 9,
    px: 2,
    py: 1.5,
  }),
  lg: atoms({
    minHeight: 11,
    px: 2.5,
    py: 2.5,
  }),
};

export const rootFocused = style({
  outlineColor: vars.color.primary400,
  boxShadow: vars.boxShadow.focus,
});

export const rootInvalid = style({
  outlineColor: vars.color.danger400,
  selectors: {
    '&:hover': {
      outlineColor: vars.color.danger400,
    },
  },
});

export const rootInvalidFocused = style({
  boxShadow: vars.boxShadow.focusDanger,
});

export const rootSuccess = style({
  outlineColor: vars.color.success400,
  selectors: {
    '&:hover': {
      outlineColor: vars.color.success400,
    },
  },
});

export const rootSuccessFocused = style({
  boxShadow: vars.boxShadow.focusSuccess,
});

export const rootDisabled = style({
  background: vars.color.neutral50,
  outlineColor: 'transparent',
  boxShadow: 'none',
  cursor: 'default',

  selectors: {
    '&:hover': {
      outlineColor: 'transparent',
    },
  },
});

export const rootReadonly = style({
  outlineColor: 'transparent',
  boxShadow: 'none',

  selectors: {
    '&:hover': {
      outlineColor: 'transparent',
    },
  },
});
