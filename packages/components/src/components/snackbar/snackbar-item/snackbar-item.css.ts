import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

import { bpUp } from '../../../utils/bp';

export const root = style({
  width: '100%',
  maxWidth: '32rem',
  minWidth: '16rem',
  borderRadius: vars.borderRadius.lg,
  color: 'white',
  padding: '0.75rem 1rem',
  boxShadow: vars.boxShadow.lg,
  transition: vars.transition.base,
  overflow: 'hidden',
  pointerEvents: 'auto',
});

export const rootPlacement = styleVariants({
  'top-start': [
    {
      transform: 'translateY(0) scale(0)',
      opacity: 0,
      selectors: {
        '&:nth-child(2)': {
          position: 'absolute',
          transform: 'translateY(0.5rem) scale(0)',
          opacity: 1,
          zIndex: -1,
        },
        '&:nth-child(3)': {
          position: 'absolute',
          transform: 'translateY(1rem) scale(0)',
          opacity: 1,
          zIndex: -2,
        },
        '&:nth-child(n+4)': {
          display: 'none',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(-200%)',
      opacity: 1,
      selectors: {
        '&:not(:first-child)': {
          marginTop: '0.5rem',
        },
        '&:nth-child(n+2)': {
          position: 'static',
          transform: 'translateX(-200%)',
          zIndex: 'unset',
        },
        '&:nth-child(n+4)': {
          display: 'block',
        },
        '&:nth-child(n+6)': {
          display: 'none',
        },
      },
    }),
  ],
  'top': {
    transform: 'translateY(0) scale(0)',
    opacity: 0,
    selectors: {
      '&:nth-child(2)': {
        position: 'absolute',
        transform: 'translateY(0.5rem) scale(0)',
        opacity: 1,
        zIndex: -1,
      },
      '&:nth-child(3)': {
        position: 'absolute',
        transform: 'translateY(1rem) scale(0)',
        opacity: 1,
        zIndex: -2,
      },
      '&:nth-child(n+4)': {
        display: 'none',
      },
    },
  },
  'top-end': [
    {
      transform: 'translateY(0) scale(0)',
      opacity: 0,
      selectors: {
        '&:nth-child(2)': {
          position: 'absolute',
          transform: 'translateY(0.5rem) scale(0)',
          opacity: 1,
          zIndex: -1,
        },
        '&:nth-child(3)': {
          position: 'absolute',
          transform: 'translateY(1rem) scale(0)',
          opacity: 1,
          zIndex: -2,
        },
        '&:nth-child(n+4)': {
          display: 'none',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(200%)',
      opacity: 1,
      selectors: {
        '&:not(:first-child)': {
          marginTop: '0.5rem',
        },
        '&:nth-child(n+2)': {
          position: 'static',
          transform: 'translateX(200%)',
          zIndex: 'unset',
        },
        '&:nth-child(n+4)': {
          display: 'block',
        },
        '&:nth-child(n+6)': {
          display: 'none',
        },
      },
    }),
  ],
  'bottom-start': [
    {
      transform: 'translateY(-1rem) scale(0)',
      opacity: 0,
      selectors: {
        '&:nth-child(2)': {
          position: 'absolute',
          transform: 'translateY(-0.5rem) scale(0)',
          opacity: 1,
          zIndex: -1,
        },
        '&:nth-child(3)': {
          position: 'absolute',
          transform: 'translateY(0) scale(0)',
          opacity: 1,
          zIndex: -2,
        },
        '&:nth-child(n+4)': {
          display: 'none',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(-200%)',
      opacity: 1,

      selectors: {
        '&:not(:first-child)': {
          marginTop: '0.5rem',
        },
        '&:nth-child(n+2)': {
          position: 'static',
          transform: 'translateX(-200%)',
          zIndex: 'unset',
        },
        '&:nth-child(n+4)': {
          display: 'block',
        },
        '&:nth-child(n+6)': {
          display: 'none',
        },
      },
    }),
  ],
  'bottom': {
    transform: 'translateY(-1rem) scale(0)',
    opacity: 0,
    selectors: {
      '&:nth-child(2)': {
        position: 'absolute',
        transform: 'translateY(-0.5rem) scale(0)',
        opacity: 1,
        zIndex: -1,
      },
      '&:nth-child(3)': {
        position: 'absolute',
        transform: 'translateY(0) scale(0)',
        opacity: 1,
        zIndex: -2,
      },
      '&:nth-child(n+4)': {
        display: 'none',
      },
    },
  },
  'bottom-end': [
    {
      transform: 'translateY(-1rem) scale(0)',
      opacity: 0,
      selectors: {
        '&:nth-child(2)': {
          position: 'absolute',
          transform: 'translateY(-0.5rem) scale(0)',
          opacity: 1,
          zIndex: -1,
        },
        '&:nth-child(3)': {
          position: 'absolute',
          transform: 'translateY(0) scale(0)',
          opacity: 1,
          zIndex: -2,
        },
        '&:nth-child(n+4)': {
          display: 'none',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(200%)',
      opacity: 1,
      selectors: {
        '&:not(:first-child)': {
          marginTop: '0.5rem',
        },
        '&:nth-child(n+2)': {
          position: 'static',
          transform: 'translateX(200%)',
          zIndex: 'unset',
        },
        '&:nth-child(n+4)': {
          display: 'block',
        },
        '&:nth-child(n+6)': {
          display: 'none',
        },
      },
    }),
  ],
});

export const rootVisiblePlacement = styleVariants({
  'top-start': [
    {
      transform: 'translateY(0) scale(1)',
      opacity: 1,
      selectors: {
        '&:nth-child(2)': {
          transform: 'translateY(0.5rem) scale(0.95)',
        },
        '&:nth-child(3)': {
          transform: 'translateY(1rem) scale(0.90)',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(0)',

      selectors: {
        '&:nth-child(n+2)': {
          transform: 'translateX(0)',
        },
      },
    }),
  ],
  'top': {
    transform: 'translateY(0) scale(1)',
    opacity: 1,
    selectors: {
      '&:nth-child(2)': {
        transform: 'translateY(0.5rem) scale(0.95)',
      },
      '&:nth-child(3)': {
        transform: 'translateY(1rem) scale(0.90)',
      },
    },
  },
  'top-end': [
    {
      transform: 'translateY(0) scale(1)',
      opacity: 1,
      selectors: {
        '&:nth-child(2)': {
          transform: 'translateY(0.5rem) scale(0.95)',
        },
        '&:nth-child(3)': {
          transform: 'translateY(1rem) scale(0.90)',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(0)',

      selectors: {
        '&:nth-child(n+2)': {
          transform: 'translateX(0)',
        },
      },
    }),
  ],
  'bottom-start': [
    {
      transform: 'translateY(-1rem) scale(1)',
      opacity: 1,
      selectors: {
        '&:nth-child(2)': {
          transform: 'translateY(-0.5rem) scale(0.95)',
        },
        '&:nth-child(3)': {
          transform: 'translateY(0) scale(0.90)',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(0)',

      selectors: {
        '&:nth-child(n+2)': {
          transform: 'translateX(0)',
        },
      },
    }),
  ],
  'bottom': {
    transform: 'translateY(-1rem) scale(1)',
    opacity: 1,
    selectors: {
      '&:nth-child(2)': {
        transform: 'translateY(-0.5rem) scale(0.95)',
      },
      '&:nth-child(3)': {
        transform: 'translateY(0) scale(0.90)',
      },
    },
  },
  'bottom-end': [
    {
      transform: 'translateY(-1rem) scale(1)',
      opacity: 1,
      selectors: {
        '&:nth-child(2)': {
          transform: 'translateY(-0.5rem) scale(0.95)',
        },
        '&:nth-child(3)': {
          transform: 'translateY(0) scale(0.90)',
        },
      },
    },
    bpUp('tablet', {
      transform: 'translateX(0)',

      selectors: {
        '&:nth-child(n+2)': {
          transform: 'translateX(0)',
        },
      },
    }),
  ],
});
