import { bpUp, vars } from '@papyrus-ui/styles';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  variants: {
    size: {
      '3xl': {},
      '2xl': {},
      'xl': {},
      'lg': {},
      'md': {},
      'sm': {},
    },
    fontVariant: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        fontVariant: 'primary',
        size: '3xl',
      },
      style: [
        {
          ...vars.typography.heading['3xl'].primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading['3xl'].primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        size: '2xl',
      },
      style: [
        {
          ...vars.typography.heading['2xl'].primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading['2xl'].primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        size: 'xl',
      },
      style: [
        {
          ...vars.typography.heading.xl.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.xl.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        size: 'lg',
      },
      style: [
        {
          ...vars.typography.heading.lg.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.lg.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        size: 'md',
      },
      style: [
        {
          ...vars.typography.heading.md.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.md.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        size: 'sm',
      },
      style: [
        {
          ...vars.typography.heading.sm.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.sm.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        size: '3xl',
      },
      style: [
        {
          ...vars.typography.heading['3xl'].secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading['3xl'].secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        size: '2xl',
      },
      style: [
        {
          ...vars.typography.heading['2xl'].secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading['2xl'].secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        size: 'xl',
      },
      style: [
        {
          ...vars.typography.heading.xl.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.xl.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        size: 'lg',
      },
      style: [
        {
          ...vars.typography.heading.lg.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.lg.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        size: 'md',
      },
      style: [
        {
          ...vars.typography.heading.md.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.md.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        size: 'sm',
      },
      style: [
        {
          ...vars.typography.heading.sm.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.sm.secondary.desktop,
        }),
      ],
    },
  ],
});
