import { atoms } from '@papyrus-ui/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  pointerEvents: 'auto',
});

export const dismiss = atoms({
  position: 'absolute',
  top: 2,
  right: 2,
});
