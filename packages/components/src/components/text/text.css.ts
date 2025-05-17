import { vars } from '@papyrus-ui/theme';
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
    bold: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: 'md',
        fontVariant: 'primary',
        bold: false,
      },
      style: {
        ...vars.typography.body.md.primary.regular,
      },
    },
    {
      variants: {
        size: 'md',
        fontVariant: 'primary',
        bold: true,
      },
      style: {
        ...vars.typography.body.md.primary.bold,
      },
    },
    {
      variants: {
        size: 'md',
        fontVariant: 'secondary',
        bold: false,
      },
      style: {
        ...vars.typography.body.md.secondary.regular,
      },
    },
    {
      variants: {
        size: 'md',
        fontVariant: 'secondary',
        bold: true,
      },
      style: {
        ...vars.typography.body.md.secondary.bold,
      },
    },
    {
      variants: {
        size: 'sm',
        fontVariant: 'primary',
        bold: false,
      },
      style: {
        ...vars.typography.body.sm.primary.regular,
      },
    },
    {
      variants: {
        size: 'sm',
        fontVariant: 'primary',
        bold: true,
      },
      style: {
        ...vars.typography.body.sm.primary.bold,
      },
    },
    {
      variants: {
        size: 'sm',
        fontVariant: 'secondary',
        bold: false,
      },
      style: {
        ...vars.typography.body.sm.secondary.regular,
      },
    },
    {
      variants: {
        size: 'sm',
        fontVariant: 'secondary',
        bold: true,
      },
      style: {
        ...vars.typography.body.sm.secondary.bold,
      },
    },
  ],
});
