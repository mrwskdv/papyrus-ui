import { bpUp } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  variants: {
    level: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
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
        level: 1,
      },
      style: [
        {
          ...vars.typography.heading.h1.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h1.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        level: 2,
      },
      style: [
        {
          ...vars.typography.heading.h2.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h2.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        level: 3,
      },
      style: [
        {
          ...vars.typography.heading.h3.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h3.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        level: 4,
      },
      style: [
        {
          ...vars.typography.heading.h4.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h4.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        level: 5,
      },
      style: [
        {
          ...vars.typography.heading.h5.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h5.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'primary',
        level: 6,
      },
      style: [
        {
          ...vars.typography.heading.h6.primary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h6.primary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        level: 1,
      },
      style: [
        {
          ...vars.typography.heading.h1.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h1.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        level: 2,
      },
      style: [
        {
          ...vars.typography.heading.h2.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h2.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        level: 3,
      },
      style: [
        {
          ...vars.typography.heading.h3.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h3.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        level: 4,
      },
      style: [
        {
          ...vars.typography.heading.h4.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h4.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        level: 5,
      },
      style: [
        {
          ...vars.typography.heading.h5.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h5.secondary.desktop,
        }),
      ],
    },
    {
      variants: {
        fontVariant: 'secondary',
        level: 6,
      },
      style: [
        {
          ...vars.typography.heading.h6.secondary.mobile,
        },
        bpUp('desktop', {
          ...vars.typography.heading.h6.secondary.desktop,
        }),
      ],
    },
  ],
});
