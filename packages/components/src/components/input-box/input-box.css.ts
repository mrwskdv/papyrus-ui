import { vars } from '@papyrus-ui/theme';
import { style } from '@vanilla-extract/css';

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

    '&:focus-within': {
      outlineColor: vars.color.primary400,
      boxShadow: vars.boxShadow.focus,
    },
  },
});

export const rootInvalid = style({
  outlineColor: vars.color.danger400,
  selectors: {
    '&:hover': {
      outlineColor: vars.color.danger400,
    },

    '&:focus-within': {
      boxShadow: vars.boxShadow.focusDanger,
    },
  },
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
