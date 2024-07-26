import { atoms, vars } from '@papyrus-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const root = atoms({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  rounded: 'md',
  border: 1,
  borderStyle: 'solid',
  transition: 'base',
});

export const rootVariant = styleVariants({
  primary: {
    borderColor: 'transparent',
    color: vars.color.white,
    backgroundColor: vars.color.primary500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.primary400,
      },
      '&:active': {
        backgroundColor: vars.color.primary600,
      },
      '&:disabled': {
        backgroundColor: vars.color.neutral200,
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
    backgroundColor: vars.color.neutral100,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.neutral200,
      },
      '&:active': {
        backgroundColor: vars.color.neutral300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        backgroundColor: vars.color.neutral50,
      },
    },
  },
  tertiary: {
    borderColor: 'transparent',
    color: vars.color.primary500,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.primary100,
      },
      '&:active': {
        backgroundColor: vars.color.primary200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        backgroundColor: 'transparent',
      },
    },
  },
  success: {
    borderColor: 'transparent',
    color: vars.color.white,
    backgroundColor: vars.color.success500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.success400,
      },
      '&:active': {
        backgroundColor: vars.color.success600,
      },
      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },
  warning: {
    borderColor: 'transparent',
    color: vars.color.white,
    backgroundColor: vars.color.warning500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.warning400,
      },
      '&:active': {
        backgroundColor: vars.color.warning600,
      },
      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },
  danger: {
    borderColor: 'transparent',
    color: vars.color.white,
    backgroundColor: vars.color.danger500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.danger400,
      },
      '&:active': {
        backgroundColor: vars.color.danger600,
      },
      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
    },
  },
  ghost: {
    borderColor: vars.color.light600,
    color: vars.color.white,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.light300,
      },
      '&:active': {
        backgroundColor: vars.color.light400,
      },
      '&:disabled': {
        borderColor: vars.color.light400,
        color: vars.color.light400,
        backgroundColor: 'transparent',
      },
    },
  },
});

export const rootSize = {
  sm: atoms({
    minWidth: 24,
    height: 7,
    px: 2.5,
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
