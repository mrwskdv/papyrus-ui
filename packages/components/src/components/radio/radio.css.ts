import { atoms } from '@papyrus-ui/style-utils';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'baseline',
  cursor: 'pointer',
});

export const rootDisabled = style({
  cursor: 'default',
});

export const label = atoms({
  flex: 1,
});
