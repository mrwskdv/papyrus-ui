import { atoms } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

import { IconButtonSize } from './icon-button';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '1px',
  borderRadius: vars.borderRadius.button,
  lineHeight: 1,
  transition: vars.transition.base,
});

export const rootSize = {
  sm: atoms({
    width: 7,
    height: 7,
  }),
  md: atoms({
    width: 9,
    height: 9,
  }),
  lg: atoms({
    width: 12,
    height: 12,
  }),
};

export const rootVariant = styleVariants({
  primary: {
    borderColor: 'transparent',
    color: vars.color.primary500,
    background: vars.color.primary100,
    selectors: {
      '&:hover': {
        background: vars.color.primary200,
      },
      '&:active': {
        background: vars.color.primary300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
      },
    },
  },
  secondary: {
    borderColor: 'transparent',
    color: vars.color.secondary500,
    background: vars.color.secondary100,
    selectors: {
      '&:hover': {
        background: vars.color.secondary200,
      },
      '&:active': {
        background: vars.color.secondary300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
      },
    },
  },
  tertiary: {
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
        background: vars.color.neutral100,
      },
    },
  },
  plain: {
    borderColor: 'transparent',
    color: vars.color.neutral900,
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: 'transparent',
      },
    },
  },
  info: {
    borderColor: 'transparent',
    color: vars.color.info500,
    background: vars.color.info100,
    selectors: {
      '&:hover': {
        background: vars.color.info200,
      },
      '&:active': {
        background: vars.color.info300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
      },
    },
  },
  success: {
    borderColor: 'transparent',
    color: vars.color.success500,
    background: vars.color.success100,
    selectors: {
      '&:hover': {
        background: vars.color.success200,
      },
      '&:active': {
        background: vars.color.success300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
      },
    },
  },
  warning: {
    borderColor: 'transparent',
    color: vars.color.warning500,
    background: vars.color.warning100,
    selectors: {
      '&:hover': {
        background: vars.color.warning200,
      },
      '&:active': {
        background: vars.color.warning300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
      },
    },
  },
  danger: {
    borderColor: 'transparent',
    color: vars.color.danger500,
    background: vars.color.danger100,
    selectors: {
      '&:hover': {
        background: vars.color.danger200,
      },
      '&:active': {
        background: vars.color.danger300,
      },
      '&:disabled': {
        color: vars.color.neutral300,
        background: vars.color.neutral50,
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

export const rootRounded = style({
  borderRadius: vars.borderRadius.full,
});

export const iconSize: Record<IconButtonSize, string> = {
  sm: atoms({ fontSize: 'md' }),
  md: atoms({ fontSize: 'xl' }),
  lg: atoms({ fontSize: '2xl' }),
};
