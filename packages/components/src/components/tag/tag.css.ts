import { atoms } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = atoms({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 'full',
  border: 1,
  overflow: 'hidden',
});

export const rootSize = {
  sm: atoms({
    height: 4,
    px: 1,
  }),
  md: atoms({
    height: 6,
    px: 1.5,
  }),
};

export const rootRemovable = style({
  pointerEvents: 'none',

  selectors: {
    '&:hover': {
      opacity: 1,
    },
  },
});

export const remove = style({ pointerEvents: 'auto' });
