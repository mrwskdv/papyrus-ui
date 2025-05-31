import { style, styleVariants } from '@vanilla-extract/css';

import { bpUp } from '../../utils/bp';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
  position: 'fixed',
  width: 'max-content',
  zIndex: 50,
  pointerEvents: 'none',
});

export const rootPlacement = styleVariants({
  'top-start': [
    {
      top: 0,
      left: '50%',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('tablet', {
      left: 'auto',
      insetInlineStart: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      transform: 'none',
    }),
  ],
  'top': [
    {
      top: 0,
      left: '50%',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('tablet', {
      flexDirection: 'column',
    }),
  ],
  'top-end': [
    {
      top: 0,
      left: '50%',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('tablet', {
      left: 'auto',
      insetInlineEnd: 0,
      flexDirection: 'column',
      alignItems: 'flex-end',
      transform: 'none',
    }),
  ],
  'bottom': {
    bottom: 0,
    left: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'translateX(-50%)',
  },
  'bottom-start': [
    {
      bottom: 0,
      left: '50%',
      flexDirection: 'column',
      alignItems: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('tablet', {
      left: 'auto',
      insetInlineStart: 0,
      alignItems: 'flex-start',
      transform: 'none',
    }),
  ],
  'bottom-end': [
    {
      bottom: 0,
      left: '50%',
      flexDirection: 'column',
      alignItems: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('tablet', {
      left: 'auto',
      insetInlineEnd: 0,
      alignItems: 'flex-end',
      transform: 'none',
    }),
  ],
});
