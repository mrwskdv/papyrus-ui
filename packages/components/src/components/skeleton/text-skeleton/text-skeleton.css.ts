import { vars } from '@papyrus-ui/styles';
import { calculateTextHeight } from '@papyrus-ui/styles/src/utils/calculate-text-height';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  variants: {
    size: {
      md: {},
      sm: {},
    },
    fontVariant: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: 'md',
        fontVariant: 'primary',
      },
      style: {
        height: calculateTextHeight(vars.typography.body.md.primary.regular),
        fontSize: vars.typography.body.md.primary.regular.fontSize,
      },
    },
    {
      variants: {
        size: 'md',
        fontVariant: 'secondary',
      },
      style: {
        height: calculateTextHeight(vars.typography.body.md.secondary.regular),
        fontSize: vars.typography.body.md.secondary.regular.fontSize,
      },
    },
    {
      variants: {
        size: 'sm',
        fontVariant: 'primary',
      },
      style: {
        height: calculateTextHeight(vars.typography.body.sm.primary.regular),
        fontSize: vars.typography.body.sm.primary.regular.fontSize,
      },
    },
    {
      variants: {
        size: 'sm',
        fontVariant: 'secondary',
      },
      style: {
        height: calculateTextHeight(vars.typography.body.sm.secondary.regular),
        fontSize: vars.typography.body.sm.secondary.regular.fontSize,
      },
    },
  ],
});

export const skeleton = style({
  height: '1em',
});
