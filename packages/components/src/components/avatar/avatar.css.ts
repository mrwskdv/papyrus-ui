import { atoms } from '@papyrus-ui/style-utils';
import { vars } from '@papyrus-ui/theme';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = atoms({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  rounded: 'full',
  overflow: 'hidden',
});

export const rootSize = {
  'xs': atoms({ width: 5, height: 5 }), // 20px
  'sm': atoms({ width: 6, height: 6 }), // 24px
  'md': atoms({ width: 8, height: 8 }), // 32px
  'lg': atoms({ width: 12, height: 12 }), // 48px
  'xl': atoms({ width: 16, height: 16 }), // 64px
  '2xl': atoms({ width: 20, height: 20 }), // 80px
};

export const text = style({
  position: 'absolute',
  lineHeight: 1,
});

export const textSize = styleVariants({
  'xs': { fontSize: vars.fontSize.xs }, // 12px
  'sm': { fontSize: vars.fontSize.xs }, // 12px
  'md': { fontSize: vars.fontSize.md }, // 16px
  'lg': { fontSize: vars.fontSize['2xl'] }, // 24px
  'xl': { fontSize: vars.fontSize['3xl'] }, // 28px
  '2xl': { fontSize: vars.fontSize['4xl'] }, // 36px
});

export const icon = atoms({ position: 'absolute', color: 'white' });

export const iconSize = {
  'xs': atoms({ fontSize: 'sm' }), // 14px
  'sm': atoms({ fontSize: 'md' }), // 16px
  'md': atoms({ fontSize: 'xl' }), // 24px
  'lg': atoms({ fontSize: '3xl' }), // 36px
  'xl': atoms({ fontSize: '4xl' }), // 48px
  '2xl': atoms({ fontSize: '5xl' }), // 60px
};

export const image = atoms({
  position: 'absolute',
  width: 'full',
  height: 'full',
  objectFit: 'cover',
});
