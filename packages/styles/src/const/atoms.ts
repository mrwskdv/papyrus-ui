export const POSITION = [
  'absolute',
  'fixed',
  'relative',
  'static',
  'sticky',
] as const;

export const DISPLAY = [
  'block',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'inline',
  'none',
] as const;

export const PADDING = {
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 272px
  80: '20rem', // 320px
  96: '24rem', // 336px
};

export const SPACING = {
  'auto': 'auto',
  ...PADDING,
  '-px': '-1px',
  '-0.5': '-0.125rem', // -2px
  '-1': '-0.25rem', // -4px
  '-1.5': '-0.375rem', // -6px
  '-2': '-0.5rem', // -8px
  '-2.5': '-0.625rem', // -10px
  '-3': '-0.75rem', // -12px
  '-3.5': '-0.875rem', // -14px
  '-4': '-1rem', // -16px
  '-5': '-1.25rem', // -20px
  '-5.5': '-1.375rem', // -22px
  '-6': '-1.5rem', // -24px
  '-7': '-1.75rem', // -28px
  '-8': '-2rem', // -32px
  '-9': '-2.25rem', // -36px
  '-10': '-2.5rem', // -40px
  '-11': '-2.75rem', // -44px
  '-12': '-3rem', // -48px
  '-14': '-3.5rem', // -56px
  '-16': '-4rem', // -64px
  '-20': '-5rem', // -80px
  '-24': '-6rem', // -96px
  '-28': '-7rem', // -112px
  '-32': '-8rem', // -128px
  '-36': '-9rem', // -144px
  '-40': '-10rem', // -160px
  '-44': '-11rem', // -176px
  '-48': '-12rem', // -192px
  '-52': '-13rem', // -208px
  '-56': '-14rem', // -224px
  '-60': '-15rem', // -240px
  '-64': '-16rem', // -256px
  '-72': '-18rem', // -272px
  '-80': '-20rem', // -320px
  '-96': '-24rem', // -336px
};

export const FLEX_BASIS = {
  'auto': 'auto',
  ...PADDING,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  'full': '100%',
};

export const FLEX_DIRECTION = [
  'row',
  'column',
  'row-reverse',
  'column-reverse',
] as const;

export const FLEX_WRAP = ['wrap', 'wrap-reverse', 'nowrap'] as const;

export const FLEX = {
  1: '1 1 0%',
  auto: '1 1 auto',
  initial: '0 1 auto',
  none: 'none',
};

export const FLEX_GROW = [1, 0] as const;

export const FLEX_SHRINK = [1, 0] as const;

export const ORDER = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  first: -9999,
  last: 9999,
  none: 0,
};

export const GRID_TEMPLATE = {
  1: 'repeat(1, minmax(0, 1fr))',
  2: 'repeat(2, minmax(0, 1fr))',
  3: 'repeat(3, minmax(0, 1fr))',
  4: 'repeat(4, minmax(0, 1fr))',
  5: 'repeat(5, minmax(0, 1fr))',
  6: 'repeat(6, minmax(0, 1fr))',
  7: 'repeat(7, minmax(0, 1fr))',
  8: 'repeat(8, minmax(0, 1fr))',
  9: 'repeat(9, minmax(0, 1fr))',
  10: 'repeat(10, minmax(0, 1fr))',
  11: 'repeat(11, minmax(0, 1fr))',
  12: 'repeat(12, minmax(0, 1fr))',
  none: 'none',
  subgrid: 'subgrid',
};

export const GRID_SPAN = {
  auto: 'auto',
  1: 'span 1 / span 1',
  2: 'span 2 / span 2',
  3: 'span 3 / span 3',
  4: 'span 4 / span 4',
  5: 'span 5 / span 5',
  6: 'span 6 / span 6',
  7: 'span 7 / span 7',
  8: 'span 8 / span 8',
  9: 'span 9 / span 9',
  10: 'span 10 / span 10',
  11: 'span 11 / span 11',
  12: 'span 12 / span 12',
  full: 'span 1 / span -1',
};

export const GRID_START_END = {
  auto: 'auto',
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
};

export const GRID_AUTO = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)',
};
export const GRID_AUTO_FLOW = {
  'row': 'row',
  'column': 'column',
  'dense': 'dense',
  'row-dense': 'row dense',
  'column-dense': 'column dense',
};

export const GAP = PADDING;

export const JUSTIFY_CONTENT = {
  normal: 'normal',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
};

export const JUSTIFY_ITEMS = ['start', 'end', 'center', 'stretch'] as const;

export const JUSTIFY_SELF = [...JUSTIFY_ITEMS, 'auto'] as const;

export const ALIGN_CONTENT = {
  normal: 'normal',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  baseline: 'baseline',
  stretch: 'stretch',
};

export const ALIGN_ITEMS = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

export const ALIGN_SELF = {
  ...ALIGN_ITEMS,
  auto: 'auto',
};

export const PLACE_CONTENT = {
  normal: 'normal',
  center: 'center',
  start: 'start',
  end: 'end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  baseline: 'baseline',
  stretch: 'stretch',
};

export const PLACE_ITEMS = [
  'start',
  'end',
  'center',
  'baseline',
  'stretch',
] as const;

export const PLACE_SELF = [
  'auto',
  'start',
  'end',
  'center',
  'stretch',
] as const;

export const ASPECT_RATIO = {
  square: '1/1',
  landscape: '4/3',
  photo: '3/2',
  widescreen: '16/9',
  portrait: '3/4',
  portraitPhoto: '2/3',
  portraitWidescreen: '9/16',
  auto: 'auto',
};

export const BORDER_RADIUS = {
  none: 'none',
};

export const BORDER_STYLE = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'hidden',
  'none',
] as const;

export const BORDER_WIDTH = [0, 1, 2, 4, 8] as const;

export const OBJECT_FIT = ['contain', 'cover'] as const;

export const INSET = { ...SPACING, auto: 'auto' };

export const HEIGHT = {
  'auto': 'auto',
  ...PADDING,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  'full': '100%',
  'screen': '100vh',
  'svw': '100svw',
  'lvw': '100lvw',
  'dvw': '100dvw',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
};

export const MAX_HEIGHT = {
  ...PADDING,
  none: 'none',
  full: '100%',
  screen: '100vh',
  svh: '100svh',
  lvh: '100lvh',
  dvh: '100dvh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const MAX_WIDTH = {
  'none': 'none',
  0: '0rem',
  'xs': '20rem', // 320px
  'sm': '24rem', // 384px
  'md': '28rem', // 448px
  'lg': '32rem', // 512px
  'xl': '36rem', // 576px
  '2xl': '42rem', // 672px
  '3xl': '48rem', // 768px
  '4xl': '56rem', // 896px
  '5xl': '64rem', // 1024px
  '6xl': '72rem', // 1152px
  '7xl': '80rem', // 1280px
  'full': '100%', // 100%
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  'prose': '65ch',
};

export const MIN_HEIGHT = {
  ...PADDING,
  full: '100%',
  screen: '100vh',
  svh: '100svh',
  lvh: '100lvh',
  dvh: '100dvh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const MIN_WIDTH = {
  ...PADDING,
  0: '0px',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const WIDTH = {
  'auto': 'auto',
  ...PADDING,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  'full': '100%',
  'screen': '100vw',
  'svh': '100svh',
  'lvh': '100lvh',
  'dvh': '100dvh',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
};

export const COLOR = {
  currentColor: 'currentColor',
  inherit: 'inherit',
  transparent: 'transparent',
};

export const TEXT_ALIGN = [
  'left',
  'right',
  'center',
  'justify',
  'start',
  'end',
] as const;

export const TEXT_DECORATION = [
  'none',
  'underline',
  'line-through',
  'overline',
] as const;

export const TEXT_OVERFLOW = ['ellipsis', 'clip'] as const;

export const TEXT_TRANSFORM = [
  'none',
  'uppercase',
  'lowercase',
  'capitalize',
] as const;

export const VERTICAL_ALIGN = ['baseline', 'top', 'middle', 'bottom'] as const;

export const WHITE_SPACE = ['normal', 'nowrap'] as const;

export const OVERFLOW = ['hidden', 'auto'] as const;

export const Z_INDEX = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};
