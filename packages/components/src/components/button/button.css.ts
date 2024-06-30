import { style, styleVariants } from '@vanilla-extract/css';

import { atoms, vars } from '../../../../styles';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  border: 1,
  transition: vars.transition.base,
});

export const rootVariant = styleVariants({
  primary: {
    borderColor: 'transparent',
    color: vars.color.white,
    background: vars.color.primary500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary600,
      },
      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },
  accent: {
    borderColor: 'transparent',
    color: vars.color.white,
    background: vars.gradient.highlight,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        background: vars.gradient.highlightAlt,
      },
      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },
  secondary: {
    borderColor: 'transparent',
    color: vars.color.neutral900,
    background: vars.color.neutral100,
    selectors: {
      '&:hover': {
        background: vars.color.neutral200,
      },
      '&:active': {
        background: vars.color.neutral300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
      },
    },
  },
  tertiary: {
    borderColor: 'transparent',
    color: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary100,
      },
      '&:active': {
        background: vars.color.primary200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  success: {
    borderColor: 'transparent',
    color: vars.color.white,
    background: vars.color.success500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        background: vars.color.success400,
      },
      '&:active': {
        background: vars.color.success600,
      },
      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },
  warning: {
    borderColor: 'transparent',
    color: vars.color.white,
    background: vars.color.warning500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        background: vars.color.warning400,
      },
      '&:active': {
        background: vars.color.warning600,
      },
      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },
  danger: {
    borderColor: 'transparent',
    color: vars.color.white,
    background: vars.color.danger500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        background: vars.color.danger400,
      },
      '&:active': {
        background: vars.color.danger600,
      },
      '&:disabled': {
        background: vars.color.neutral200,
      },
    },
  },
  ghost: {
    borderColor: vars.color.light600,
    color: vars.color.white,
    selectors: {
      '&:hover': {
        background: vars.color.light300,
      },
      '&:active': {
        background: vars.color.light400,
      },
      '&:disabled': {
        borderColor: vars.color.light400,
        color: vars.color.light400,
        background: 'transparent',
      },
    },
  },
});

export const rootSize = {
  sm: atoms({
    minWidth: 24,
    height: 7,
    px: 2,
  }),
  md: atoms({
    minWidth: 28,
    height: 9,
    px: 3,
  }),
  lg: atoms({
    minWidth: 32,
    height: 11,
    px: 4,
  }),
};

export const rootBlock = atoms({
  width: 'full',
});
