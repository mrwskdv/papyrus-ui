import { bpUp, SPACING, vars } from '@papyrus-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  position: 'sticky',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  gap: SPACING[4],
  padding: `${SPACING[3.5]} ${SPACING[4]}`,
  zIndex: 20,
});

export const rootSize = styleVariants({
  sm: {},
  md: [
    {
      borderColor: vars.color.neutral100,
      borderBottomWidth: 1,
      background: vars.color.white,
    },
    bpUp('tablet', {
      borderBottomWidth: 0,
      background: 'transparent',
    }),
  ],
  lg: [
    {
      borderColor: vars.color.neutral100,
      borderBottomWidth: 1,
      background: vars.color.white,
    },
    bpUp('tablet', {
      borderBottomWidth: 0,
      background: 'transparent',
    }),
  ],
  xl: [
    {
      borderColor: vars.color.neutral100,
      borderBottomWidth: 1,
      background: vars.color.white,
    },
    bpUp('desktop', {
      borderBottomWidth: 0,
      background: 'transparent',
    }),
  ],
});
