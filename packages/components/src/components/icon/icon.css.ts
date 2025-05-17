import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-block',
  lineHeight: 1,
  verticalAlign: '-0.167em',
  transition: vars.transition.base,
});

export const rootRotate = styleVariants({
  90: {
    transform: 'rotate(90deg)',
  },
  180: {
    transform: 'rotate(180deg)',
  },
  270: {
    transform: 'rotate(270deg)',
  },
});

export const rootFlip = styleVariants({
  horizontal: {
    transform: 'scaleX(-1)',
  },
  vertical: {
    transform: 'scaleY(-1)',
  },
});
