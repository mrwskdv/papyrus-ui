import { style } from '@vanilla-extract/css';

import { atoms } from '../../../../styles';

export const root = style({
  pointerEvents: 'auto',
});

export const dismiss = atoms({
  position: 'absolute',
  top: 2,
  right: 2,
});
