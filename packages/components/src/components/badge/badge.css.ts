import { SPACING, vars } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const counter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: SPACING[5],
  height: SPACING[5],
  borderRadius: vars.borderRadius.full,
  color: vars.color.white,
  whiteSpace: 'nowrap',
  padding: `0 ${SPACING[1]}`,
  overflow: 'hidden',
  ...vars.typography.caption,
});
