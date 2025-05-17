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
  COLOR,
  DISPLAY,
  FLEX,
  FLEX_DIRECTION,
  FLEX_WRAP,
  HEIGHT,
  JUSTIFY_CONTENT,
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
  FLEX_BASIS,
  FLEX_GROW,
  FLEX_SHRINK,
  GRID_TEMPLATE,
  GRID_SPAN,
  GRID_START_END,
  GRID_AUTO_FLOW,
  GRID_AUTO,
  GAP,
  JUSTIFY_ITEMS,
  JUSTIFY_SELF,
  ALIGN_CONTENT,
  PLACE_CONTENT,
  PLACE_ITEMS,
  PLACE_SELF,
  breakpoints,
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
    textTransform: TEXT_TRANSFORM,
    textDecoration: TEXT_DECORATION,
    textOverflow: TEXT_OVERFLOW,
    whiteSpace: WHITE_SPACE,
    objectFit: OBJECT_FIT,
    verticalAlign: VERTICAL_ALIGN,
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

const borderRadiusValues = {
  ...vars.borderRadius,
  ...BORDER_RADIUS,
};

const responsiveProperties = defineProperties({
  conditions: mapValues(breakpoints, (bp) =>
    bp === 0 ? {} : { '@media': `(min-width: ${bp}px)` },
  ),

  responsiveArray: ['mobile', 'tablet', 'laptop', 'desktop'],
  defaultCondition: 'mobile',

  properties: {
    position: POSITION,
    display: DISPLAY,

    flexBasis: FLEX_BASIS,
    flexDirection: FLEX_DIRECTION,
    flexWrap: FLEX_WRAP,
    flex: FLEX,
    flexGrow: FLEX_GROW,
    flexShrink: FLEX_SHRINK,
    order: ORDER,

    gridTemplateColumns: GRID_TEMPLATE,
    gridColumn: GRID_SPAN,
    gridColumnStart: GRID_START_END,
    gridColumnEnd: GRID_START_END,
    gridTemplateRows: GRID_TEMPLATE,
    gridRow: GRID_SPAN,
    gridRowStart: GRID_START_END,
    gridRowEnd: GRID_START_END,

    gridAutoFlow: GRID_AUTO_FLOW,
    gridAutoColumns: GRID_AUTO,
    gridAutoRows: GRID_AUTO,

    rowGap: GAP,
    columnGap: GAP,

    justifyContent: JUSTIFY_CONTENT,
    justifyItems: JUSTIFY_ITEMS,
    justifySelf: JUSTIFY_SELF,

    alignContent: ALIGN_CONTENT,
    alignItems: ALIGN_ITEMS,
    alignSelf: ALIGN_SELF,

    placeContent: PLACE_CONTENT,
    placeItems: PLACE_ITEMS,
    placeSelf: PLACE_SELF,

    aspectRatio: { ...vars.aspectRatio, ...ASPECT_RATIO },

    width: WIDTH,
    maxWidth: MAX_WIDTH,
    minWidth: MIN_WIDTH,

    height: HEIGHT,
    maxHeight: MAX_HEIGHT,
    minHeight: MIN_HEIGHT,

    borderTopLeftRadius: borderRadiusValues,
    borderTopRightRadius: borderRadiusValues,
    borderBottomLeftRadius: borderRadiusValues,
    borderBottomRightRadius: borderRadiusValues,
    borderStartStartRadius: borderRadiusValues,
    borderStartEndRadius: borderRadiusValues,
    borderEndStartRadius: borderRadiusValues,
    borderEndEndRadius: borderRadiusValues,

    borderBottomWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
    borderTopWidth: BORDER_WIDTH,
    borderInlineStartWidth: BORDER_WIDTH,
    borderInlineEndWidth: BORDER_WIDTH,

    fontSize: vars.fontSize,
    textAlign: TEXT_ALIGN,

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
    basis: ['flexBasis'],
    direction: ['flexDirection'],
    wrap: ['flexWrap'],
    grow: ['flexGrow'],
    shrink: ['flexShrink'],

    column: ['gridColumn'],
    columnStart: ['gridColumnStart'],
    columnEnd: ['gridColumnEnd'],

    row: ['gridRow'],
    rowStart: ['gridRowStart'],
    rowEnd: ['gridRowEnd'],

    autoFlow: ['gridAutoFlow'],
    autoColumns: ['gridAutoColumns'],
    autoRows: ['gridAutoRows'],

    templateColumns: ['gridTemplateColumns'],
    templateRows: ['gridTemplateRows'],

    gap: ['rowGap', 'columnGap'],

    justify: ['justifyContent'],
    align: ['alignItems'],

    w: ['width'],
    minW: ['minWidth'],
    maxW: ['maxWidth'],

    h: ['height'],
    minH: ['minHeight'],
    maxH: ['maxHeight'],

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
    roundedStart: ['borderStartStartRadius', 'borderEndStartRadius'],
    roundedEnd: ['borderStartEndRadius', 'borderEndEndRadius'],
    roundedTopStart: ['borderStartStartRadius'],
    roundedTopEnd: ['borderStartEndRadius'],
    roundedBottomStart: ['borderEndStartRadius'],
    roundedBottomEnd: ['borderEndEndRadius'],

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

const backgroundValues = {
  ...vars.gradient,
  ...colorValues,
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
    background: backgroundValues,
  },
  shorthands: {
    bg: ['background'],
  },
});

export type Atoms = Parameters<typeof atoms>[0];

export type PositionAtoms = Pick<
  Atoms,
  | 'position'
  | 'inset'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'start'
  | 'end'
  | 'zIndex'
>;

export type FlexAtoms = Pick<
  Atoms,
  'align' | 'alignContent' | 'justify' | 'direction' | 'wrap'
>;

export type FlexItemAtoms = Pick<
  Atoms,
  'basis' | 'flex' | 'grow' | 'shrink' | 'order' | 'alignSelf'
>;

export type GridAtoms = Pick<
  Atoms,
  | 'autoColumns'
  | 'autoFlow'
  | 'autoRows'
  | 'templateColumns'
  | 'templateRows'
  | 'justify'
  | 'justifyItems'
  | 'align'
  | 'alignContent'
  | 'placeContent'
  | 'placeItems'
>;

export type GridItemAtoms = Pick<
  Atoms,
  | 'column'
  | 'columnStart'
  | 'columnEnd'
  | 'row'
  | 'rowStart'
  | 'rowEnd'
  | 'justifySelf'
  | 'alignSelf'
  | 'placeSelf'
>;

export type SizingAtoms = Pick<
  Atoms,
  'aspectRatio' | 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'
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
  'color' | 'whiteSpace' | 'textAlign' | 'textTransform' | 'textDecoration'
>;

export type MarginAtoms = Pick<
  Atoms,
  'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'ms' | 'me' | 'mx' | 'my'
>;

export type GapAtoms = Pick<Atoms, 'gap' | 'rowGap' | 'columnGap'>;

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
