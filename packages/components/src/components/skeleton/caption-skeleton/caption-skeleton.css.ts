import { vars } from '@papyrus-ui/styles';
import { calculateTextHeight } from '@papyrus-ui/styles/src/utils/calculate-text-height';
import { style } from '@vanilla-extract/css';

export const root = style({
  height: calculateTextHeight(vars.typography.caption),
});

export const skeleton = style({
  height: vars.typography.caption.fontSize,
});
