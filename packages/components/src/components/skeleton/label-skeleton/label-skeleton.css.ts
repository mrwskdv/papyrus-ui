import { calculateTextHeight } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { style } from '@vanilla-extract/css';

export const root = style({
  height: calculateTextHeight(vars.typography.label),
});

export const skeleton = style({
  height: vars.typography.label.fontSize,
});
