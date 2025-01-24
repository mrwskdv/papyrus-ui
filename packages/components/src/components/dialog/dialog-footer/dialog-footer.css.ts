import { atoms, bpUp, vars } from '@papyrus-ui/styles';
import { styleVariants } from '@vanilla-extract/css';

export const root = atoms({
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  align: 'center',
  gap: 4,
  py: 3.5,
  px: 4,
  zIndex: 20,
});

export const rootSize = styleVariants({
  sm: {},
  md: [
    {
      borderColor: vars.color.neutral100,
      borderTopWidth: 1,
      background: vars.color.white,
    },
    bpUp('tablet', {
      borderTopWidth: 0,
      background: 'transparent',
    }),
  ],
  lg: [
    {
      borderColor: vars.color.neutral100,
      borderTopWidth: 1,
      background: vars.color.white,
    },
    bpUp('tablet', {
      borderTopWidth: 0,
      background: 'transparent',
    }),
  ],
  xl: [
    {
      borderColor: vars.color.neutral100,
      borderTopWidth: 1,
      background: vars.color.white,
    },
    bpUp('desktop', {
      borderTopWidth: 0,
      background: 'transparent',
    }),
  ],
});
