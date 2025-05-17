import { atoms, spacing } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { style } from '@vanilla-extract/css';

export const counter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: spacing[5],
  height: spacing[5],
  borderRadius: vars.borderRadius.full,
  color: vars.color.white,
  whiteSpace: 'nowrap',
  padding: `0 ${spacing[1]}`,
  overflow: 'hidden',
  ...vars.typography.caption,
});

export const dot = atoms({
  display: 'block',
  width: 2,
  height: 2,
  rounded: 'full',
});
