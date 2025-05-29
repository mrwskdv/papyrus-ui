import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },
  '100%': {
    transform: 'rotate(359deg)',
  },
});

export const root = style({
  animation: `${spin} 2s linear infinite`,
});
