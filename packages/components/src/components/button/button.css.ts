import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.borderRadius.md,
  borderWidth: '1px',
  borderStyle: 'solid',
  transition: vars.transition.base,
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
      '&:focus-visible': {
        boxShadow: vars.boxShadow.focus,
      },
    },
  },
  secondary: {
    borderColor: 'transparent',
    color: vars.color.white,
    backgroundImage: vars.gradient.highlight,
    backgroundSize: '200%',
    backgroundPosition: 'left',
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        backgroundPosition: 'right',
      },
      '&:disabled': {
        background: vars.color.neutral200,
      },
      '&:focus-visible': {
        boxShadow: vars.boxShadow.focus,
      },
    },
  },
  tertiary: {
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
  plain: {
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
  info: {
    borderColor: 'transparent',
    color: vars.color.white,
    backgroundColor: vars.color.info500,
    boxShadow: vars.boxShadow.sm,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.info400,
      },
      '&:active': {
        backgroundColor: vars.color.info600,
      },
      '&:disabled': {
        backgroundColor: vars.color.neutral200,
      },
      '&:focus-visible': {
        boxShadow: vars.boxShadow.focus,
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
      '&:focus-visible': {
        boxShadow: vars.boxShadow.focus,
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
      '&:focus-visible': {
        boxShadow: vars.boxShadow.focus,
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
      '&:focus-visible': {
        boxShadow: vars.boxShadow.focus,
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

export const label = style({
  display: 'inline-block',
  ...vars.typography.button,
  marginBottom: '-0.125rem',
});
