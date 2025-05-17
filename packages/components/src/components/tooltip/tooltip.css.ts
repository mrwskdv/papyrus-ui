import { vars } from '@papyrus-ui/theme';
import { style } from '@vanilla-extract/css';

export const root = style({
  minHeight: '1.75rem',
  maxWidth: '20rem',
  borderRadius: vars.borderRadius.sm,
  color: vars.color.white,
  ...vars.typography.body.sm.primary.regular,
  background: vars.color.dark800,
  boxShadow: vars.boxShadow.md,
  padding: '0.25rem 0.5rem',
});

export const arrow = style({
  fill: vars.color.neutral800,
});
