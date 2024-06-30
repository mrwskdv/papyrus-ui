import { atoms, MIN_WIDTH, SPACING, vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  minWidth: MIN_WIDTH[36],
  borderRadius: vars.borderRadius.md,
  color: vars.color.neutral900,
  textAlign: 'start',
  transition: vars.transition.base,
  padding: `${SPACING[0.5]} ${SPACING[1]}`,
  margin: `${SPACING[0.5]} ${SPACING[1]}`,

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
});

export const rootSelected = style({
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
      background: 'transparent',
    },
  },
});

export const startIcon = atoms({
  color: 'neutral500',
  fontSize: 'xl',
  mx: 1,
});

export const startIconSelected = style({
  color: vars.color.primary500,
});

export const startIconDisabled = style({
  color: 'inherit',
});

export const label = atoms({
  flex: 1,
  display: 'block',
  fontSize: 'md',
  lineHeight: 'normal',
  mx: 1,
});

export const labelSelected = atoms({
  fontWeight: 'semiBold',
});
