import { bpUp } from '@papyrus-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  pointerEvents: 'none',
});

export const rootPlacement = styleVariants({
  'top': {
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  'top-start': [
    {
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineStart: 0,
      transform: 'none',
    }),
  ],
  'top-end': [
    {
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineEnd: 0,
      transform: 'none',
    }),
  ],
  'bottom': {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  'bottom-start': [
    {
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineStart: 0,
      transform: 'none',
    }),
  ],
  'bottom-end': [
    {
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineEnd: 0,
      transform: 'none',
    }),
  ],
});
