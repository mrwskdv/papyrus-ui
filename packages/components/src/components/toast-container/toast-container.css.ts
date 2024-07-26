import { atoms, bpUp } from '@papyrus-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const root = atoms({
  pointerEvents: 'none',
});

export const rootPlacement = styleVariants({
  'top': {
    top: 0,
    left: '50%',
    justifyContent: 'center',
    transform: 'translateX(-50%)',
  },
  'top-start': [
    {
      top: 0,
      left: '50%',
      justifyContent: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineStart: 0,
      justifyContent: 'flex-start',
      transform: 'none',
    }),
  ],
  'top-end': [
    {
      top: 0,
      left: '50%',
      justifyContent: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineEnd: 0,
      justifyContent: 'flex-end',
      transform: 'none',
    }),
  ],
  'bottom': {
    bottom: 0,
    left: '50%',
    justifyContent: 'center',
    transform: 'translateX(-50%)',
  },
  'bottom-start': [
    {
      bottom: 0,
      left: '50%',
      justifyContent: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineStart: 0,
      justifyContent: 'flex-start',
      transform: 'none',
    }),
  ],
  'bottom-end': [
    {
      bottom: 0,
      left: '50%',
      justifyContent: 'center',
      transform: 'translateX(-50%)',
    },
    bpUp('mobileLg', {
      left: 'auto',
      insetInlineEnd: 0,
      justifyContent: 'flex-end',
      transform: 'none',
    }),
  ],
});
