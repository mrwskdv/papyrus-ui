import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

export const link = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: vars.borderRadius.sm,
  textAlign: 'start',
  transition: vars.transition.base,
  cursor: 'pointer',
});

export const linkVariant = styleVariants({
  primary: {
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
  secondary: {
    selectors: {
      '&:hover': {
        background: vars.color.neutral100,
      },
      '&:active': {
        background: vars.color.neutral200,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
  ghost: {
    selectors: {
      '&:hover': {
        background: vars.color.light300,
      },
      '&:active': {
        background: vars.color.light400,
      },
      '&:disabled': {
        background: 'transparent',
      },
    },
  },
});

export const linkActiveVariant = styleVariants({
  primary: {
    background: vars.color.neutral100,
  },
  secondary: {
    background: vars.color.neutral100,
  },
  ghost: {
    background: vars.color.light300,
  },
});

export const linkSelectedVariant = styleVariants({
  primary: {},
  secondary: {},
  ghost: {
    background: vars.color.primary500,
    selectors: {
      '&:hover': {
        background: vars.color.primary400,
      },
      '&:active': {
        background: vars.color.primary300,
      },
    },
  },
});

export const linkActiveSelectedVariant = styleVariants({
  primary: {},
  secondary: {},
  ghost: {
    background: vars.color.primary400,
  },
});

export const linkDisabled = style({
  background: 'transparent',
  pointerEvents: 'none',
});

export const linkCollapsed = style({
  flexDirection: 'column',
  minWidth: 0,
  height: '3rem',
  padding: `0 0.5rem`,
});

export const iconSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },
  secondary: {
    color: vars.color.primary500,
  },
  ghost: {},
});

export const iconDanger = style({
  color: vars.color.danger500,
});

export const iconDisabledVariant = styleVariants({
  primary: {
    color: vars.color.neutral300,
  },
  secondary: {
    color: vars.color.neutral300,
  },
  ghost: {
    color: vars.color.light400,
  },
});

export const label = style({
  display: 'block',
  ...vars.typography.body.md.primary.regular,
  margin: `0 0.25rem`,
});

export const labelSelectedVariant = styleVariants({
  primary: {},
  secondary: {
    color: vars.color.primary500,
  },
  ghost: {},
});

export const labelCollapsedSelectedVariant = styleVariants({
  primary: {
    color: vars.color.primary500,
  },
  secondary: {
    color: vars.color.primary500,
  },
  ghost: {},
});

export const labelDanger = style({
  color: vars.color.danger500,
});

export const labelDisabledVariant = styleVariants({
  primary: {
    color: vars.color.neutral300,
  },
  secondary: {
    color: vars.color.neutral300,
  },
  ghost: {
    color: vars.color.light400,
  },
});

export const underlineDanger = style({
  background: vars.color.danger500,
});
