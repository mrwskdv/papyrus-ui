import {
  ConditionalValue,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import mapValues from 'lodash/mapValues';

import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  ASPECT_RATIO,
  BORDER_STYLE,
  BORDER_WIDTH,
  BREAKPOINTS,
  COLOR,
  DISPLAY,
  FLEX,
  FLEX_DIRECTION,
  FLEX_WRAP,
  HEIGHT,
  JUSTIFY_CONTENT,
  LINE_HEIGHT,
  SPACING,
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_HEIGHT,
  MIN_WIDTH,
  OBJECT_FIT,
  ORDER,
  PADDING,
  TEXT_ALIGN,
  TEXT_DECORATION,
  TEXT_OVERFLOW,
  TEXT_TRANSFORM,
  VERTICAL_ALIGN,
  WHITE_SPACE,
  WIDTH,
  BORDER_RADIUS,
  POSITION,
  INSET,
  Z_INDEX,
  OVERFLOW,
  POINTER_EVENTS,
} from '../const';

import { vars } from './global.css';

const baseProperties = defineProperties({
  properties: {
    top: INSET,
    right: INSET,
    bottom: INSET,
    left: INSET,
    insetInlineStart: INSET,
    insetInlineEnd: INSET,
    borderStyle: BORDER_STYLE,
    boxShadow: vars.boxShadow,
    fontFamily: vars.fontFamily,
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    lineHeight: { ...vars.lineHeight, ...LINE_HEIGHT },
    textTransform: TEXT_TRANSFORM,
    objectFit: OBJECT_FIT,
    textDecoration: TEXT_DECORATION,
    textOverflow: TEXT_OVERFLOW,
    transition: vars.transition,
    verticalAlign: VERTICAL_ALIGN,
    whiteSpace: WHITE_SPACE,
    pointerEvents: POINTER_EVENTS,
    zIndex: Z_INDEX,
  },
  shorthands: {
    inset: ['top', 'right', 'bottom', 'left'],
    start: ['insetInlineStart'],
    end: ['insetInlineEnd'],
    shadow: ['boxShadow'],
  },
});

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const responsiveProperties = defineProperties({
  conditions: mapValues(BREAKPOINTS, (bp) =>
    bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  ),

  responsiveArray: ['mobile', 'mobileLg', 'tablet', 'desktop', 'desktopLg'],
  defaultCondition: 'mobile',

  properties: {
    position: POSITION,

    display: DISPLAY,

    fontSize: vars.fontSize,
    textAlign: TEXT_ALIGN,

    flex: FLEX,
    flexWrap: FLEX_WRAP,
    flexDirection: FLEX_DIRECTION,
    alignItems: ALIGN_ITEMS,
    alignSelf: ALIGN_SELF,
    justifyContent: JUSTIFY_CONTENT,
    order: ORDER,

    aspectRatio: ASPECT_RATIO,

    width: WIDTH,
    maxWidth: MAX_WIDTH,
    minWidth: MIN_WIDTH,

    height: HEIGHT,
    maxHeight: MAX_HEIGHT,
    minHeight: MIN_HEIGHT,

    borderTopLeftRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderTopRightRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderBottomLeftRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderBottomRightRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderTopStartRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderTopEndRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderBottomStartRadius: { ...vars.borderRadius, ...BORDER_RADIUS },
    borderBottomEndRadius: { ...vars.borderRadius, ...BORDER_RADIUS },

    borderBottomWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
    borderTopWidth: BORDER_WIDTH,
    borderInlineStartWidth: BORDER_WIDTH,
    borderInlineEndWidth: BORDER_WIDTH,

    marginBottom: SPACING,
    marginLeft: SPACING,
    marginRight: SPACING,
    marginTop: SPACING,
    marginInlineStart: SPACING,
    marginInlineEnd: SPACING,

    paddingBottom: PADDING,
    paddingLeft: PADDING,
    paddingRight: PADDING,
    paddingTop: PADDING,
    paddingInlineStart: PADDING,
    paddingInlineEnd: PADDING,

    overflowX: OVERFLOW,
    overflowY: OVERFLOW,
  },

  shorthands: {
    rounded: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],

    roundedTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
    roundedRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
    roundedBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    roundedLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    roundedTopRight: ['borderTopRightRadius'],
    roundedTopLeft: ['borderTopLeftRadius'],
    roundedBottomLeft: ['borderBottomLeftRadius'],
    roundedBottomRight: ['borderBottomRightRadius'],
    roundedStart: ['borderTopStartRadius', 'borderBottomStartRadius'],
    roundedEnd: ['borderTopEndRadius', 'borderBottomEndRadius'],
    roundedTopStart: ['borderTopStartRadius'],
    roundedTopEnd: ['borderTopEndRadius'],
    roundedBottomStart: ['borderBottomStartRadius'],
    roundedBottomEnd: ['borderBottomEndRadius'],

    border: [
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth',
      'borderTopWidth',
    ],

    borderLeft: ['borderLeftWidth'],
    borderRight: ['borderRightWidth'],
    borderTop: ['borderTopWidth'],
    borderBottom: ['borderBottomWidth'],
    borderStart: ['borderInlineStartWidth'],
    borderEnd: ['borderInlineEndWidth'],
    borderX: ['borderLeftWidth', 'borderRightWidth'],
    borderY: ['borderBottomWidth', 'borderTopWidth'],

    m: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mt: ['marginTop'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginBottom', 'marginTop'],
    ms: ['marginInlineStart'],
    me: ['marginInlineEnd'],

    p: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingBottom', 'paddingTop'],
    ps: ['paddingInlineStart'],
    pe: ['paddingInlineEnd'],

    overflow: ['overflowX', 'overflowY'],
  },
});

const colorValues = {
  ...vars.color,
  ...COLOR,
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    borderColor: colorValues,
    color: colorValues,
    background: { ...colorValues, ...vars.gradient },
  },
  shorthands: {
    bg: ['background'],
  },
});

export type Atoms = Parameters<typeof atoms>[0];

export type PositionAtoms = Pick<
  Atoms,
  'position' | 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end' | 'zIndex'
>;

export type FlexAtoms = Pick<
  Atoms,
  'alignItems' | 'justifyContent' | 'flexDirection' | 'flexWrap'
>;

export type FlexItemAtoms = Pick<
  Atoms,
  'alignSelf' | 'flex' | 'order' | 'lineHeight'
>;

export type SizingAtoms = Pick<
  Atoms,
  | 'aspectRatio'
  | 'inset'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'height'
  | 'minHeight'
  | 'maxHeight'
>;

export type RoundedAtoms = Pick<
  Atoms,
  | 'rounded'
  | 'roundedTop'
  | 'roundedBottom'
  | 'roundedLeft'
  | 'roundedRight'
  | 'roundedStart'
  | 'roundedEnd'
  | 'roundedTopLeft'
  | 'roundedTopRight'
  | 'roundedBottomLeft'
  | 'roundedBottomRight'
  | 'roundedTopStart'
  | 'roundedTopEnd'
  | 'roundedBottomStart'
  | 'roundedBottomEnd'
>;

export type BorderAtoms = Pick<
  Atoms,
  | 'border'
  | 'borderTop'
  | 'borderBottom'
  | 'borderLeft'
  | 'borderRight'
  | 'borderStart'
  | 'borderEnd'
  | 'borderX'
  | 'borderY'
  | 'borderColor'
>;

export type TextAtoms = Pick<
  Atoms,
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'whiteSpace'
  | 'textAlign'
  | 'textTransform'
  | 'textDecoration'
>;

export type MarginAtoms = Pick<
  Atoms,
  'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'ms' | 'me' | 'mx' | 'my'
>;

export type PaddingAtoms = Pick<
  Atoms,
  'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'ps' | 'pe' | 'px' | 'py'
>;

export type OverflowAtoms = Pick<Atoms, 'overflow' | 'overflowX' | 'overflowY'>;

export const atoms = createSprinkles(
  baseProperties,
  responsiveProperties,
  colorProperties,
);
