import { bpUp, calculateTextHeight } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { style } from '@vanilla-extract/css';
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
          height: calculateTextHeight(
            vars.typography.heading.h1.primary.mobile,
          ),
          fontSize: vars.typography.heading.h1.primary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h1.primary.desktop,
          ),
          fontSize: vars.typography.heading.h1.primary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h2.primary.mobile,
          ),
          fontSize: vars.typography.heading.h2.primary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h2.primary.desktop,
          ),
          fontSize: vars.typography.heading.h2.primary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h3.primary.mobile,
          ),
          fontSize: vars.typography.heading.h3.primary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h3.primary.desktop,
          ),
          fontSize: vars.typography.heading.h3.primary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h4.primary.mobile,
          ),
          fontSize: vars.typography.heading.h4.primary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h4.primary.desktop,
          ),
          fontSize: vars.typography.heading.h4.primary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h5.primary.mobile,
          ),
          fontSize: vars.typography.heading.h5.primary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h5.primary.desktop,
          ),
          fontSize: vars.typography.heading.h5.primary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h6.primary.mobile,
          ),
          fontSize: vars.typography.heading.h6.primary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h6.primary.desktop,
          ),
          fontSize: vars.typography.heading.h6.primary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h1.secondary.mobile,
          ),
          fontSize: vars.typography.heading.h1.secondary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h1.secondary.desktop,
          ),
          fontSize: vars.typography.heading.h1.secondary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h2.secondary.mobile,
          ),
          fontSize: vars.typography.heading.h2.secondary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h2.secondary.desktop,
          ),
          fontSize: vars.typography.heading.h2.secondary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h3.secondary.mobile,
          ),
          fontSize: vars.typography.heading.h3.secondary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h3.secondary.desktop,
          ),
          fontSize: vars.typography.heading.h3.secondary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h4.secondary.mobile,
          ),
          fontSize: vars.typography.heading.h4.secondary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h4.secondary.desktop,
          ),
          fontSize: vars.typography.heading.h4.secondary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h5.secondary.mobile,
          ),
          fontSize: vars.typography.heading.h5.secondary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h5.secondary.desktop,
          ),
          fontSize: vars.typography.heading.h5.secondary.desktop.fontSize,
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
          height: calculateTextHeight(
            vars.typography.heading.h6.secondary.mobile,
          ),
          fontSize: vars.typography.heading.h6.secondary.mobile.fontSize,
        },
        bpUp('desktop', {
          height: calculateTextHeight(
            vars.typography.heading.h6.secondary.desktop,
          ),
          fontSize: vars.typography.heading.h6.secondary.desktop.fontSize,
        }),
      ],
    },
  ],
});

export const skeleton = style({
  height: '1em',
});
