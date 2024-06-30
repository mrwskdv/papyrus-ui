import { style } from '@vanilla-extract/css';

import { atoms, MIN_WIDTH, SPACING, vars } from '../../../../styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: MIN_WIDTH[40],
  borderRadius: vars.borderRadius.md,
  color: vars.color.neutral900,
  transition: vars.transition.base,
  cursor: 'pointer',
  padding: SPACING[1.5],
  margin: `${SPACING[0.5]} ${SPACING[1]}`,

  selectors: {
    '&:hover': {
      background: vars.color.neutral100,
    },
    '&:active': {
      background: vars.color.neutral200,
    },
  },
});

export const rootActive = style({
  background: vars.color.neutral100,
});

export const rootSelected = style({
  background: vars.color.primary100,

  selectors: {
    '&:hover': {
      background: vars.color.primary200,
    },
    '&:active': {
      background: vars.color.primary300,
    },
  },
});

export const rootSelectedActive = style({
  background: vars.color.primary200,
});

export const rootDisabled = style({
  color: vars.color.neutral300,
  background: 'transparent',
  pointerEvents: 'none',

  selectors: {
    '&:hover': {
      background: 'transparent',
    },
  },
});

export const icon = atoms({
  color: 'neutral500',
  fontSize: 'xl',
  mx: 1.5,
});

export const iconSelected = style({
  color: vars.color.primary500,
});

export const iconDisabled = style({
  color: 'inherit',
});

export const label = atoms({
  flex: 1,
  display: 'block',
});
