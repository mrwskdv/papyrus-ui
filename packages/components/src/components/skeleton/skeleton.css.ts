import { vars } from '@papyrus-ui/styles';
import { style, keyframes } from '@vanilla-extract/css';

const pulse = keyframes({
  '50%': {
    backgroundColor: vars.color.neutral50,
  },
});

export const root = style({
  backgroundColor: vars.color.neutral100,
  animation: `${pulse} 1.2s cubic-bezier(.4,0,.6,1) infinite`,
});
