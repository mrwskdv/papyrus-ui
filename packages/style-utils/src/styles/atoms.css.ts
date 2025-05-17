import { vars } from '@papyrus-ui/theme';
import {
  ConditionalValue,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import mapValues from 'lodash/mapValues';

import {
  alignContent,
  alignItems,
  alignSelf,
  borderStyle,
  borderWidth,
  breakpoints,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  gridAuto,
  gridAutoFlow,
  gridSpan,
  gridStartEnd,
  gridTemplate,
  height,
  inset,
  justifyContent,
  justifyItems,
  justifySelf,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  objectFit,
  order,
  overflow,
  padding,
  placeContent,
  placeItems,
  placeSelf,
  position,
  spacing,
  textAlign,
  textDecoration,
  textOverflow,
  textTransform,
  whiteSpace,
  width,
  zIndex,
} from '../const';

const baseProperties = defineProperties({
  properties: {
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    insetInlineStart: inset,
    insetInlineEnd: inset,
    boxShadow: vars.boxShadow,
    borderStyle,
    textTransform,
    textDecoration,
    textOverflow,
    whiteSpace,
    objectFit,
    zIndex,
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
  conditions: mapValues(breakpoints, (bp) =>
    bp === 0 ? {} : { '@media': `(min-width: ${bp}px)` },
  ),

  responsiveArray: ['mobile', 'tablet', 'laptop', 'desktop'],
  defaultCondition: 'mobile',

  properties: {
    position,
    display,
    flexBasis,
    flexDirection,
    flexWrap,
    flex,
    flexGrow,
    flexShrink,
    order,
    gridTemplateColumns: gridTemplate,
    gridColumn: gridSpan,
    gridColumnStart: gridStartEnd,
    gridColumnEnd: gridStartEnd,
    gridTemplateRows: gridTemplate,
    gridRow: gridSpan,
    gridRowStart: gridStartEnd,
    gridRowEnd: gridStartEnd,
    gridAutoFlow,
    gridAutoColumns: gridAuto,
    gridAutoRows: gridAuto,
    rowGap: padding,
    columnGap: padding,
    justifyContent,
    justifyItems,
    justifySelf,
    alignContent,
    alignItems,
    alignSelf,
    placeContent,
    placeItems,
    placeSelf,
    aspectRatio: vars.aspectRatio,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    borderTopLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    borderStartStartRadius: vars.borderRadius,
    borderStartEndRadius: vars.borderRadius,
    borderEndStartRadius: vars.borderRadius,
    borderEndEndRadius: vars.borderRadius,
    borderBottomWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderInlineStartWidth: borderWidth,
    borderInlineEndWidth: borderWidth,
    fontSize: vars.fontSize,
    textAlign,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    marginTop: spacing,
    marginInlineStart: spacing,
    marginInlineEnd: spacing,
    paddingBottom: padding,
    paddingLeft: padding,
    paddingRight: padding,
    paddingTop: padding,
    paddingInlineStart: padding,
    paddingInlineEnd: padding,
    overflowX: overflow,
    overflowY: overflow,
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

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    borderColor: vars.color,
    color: vars.color,
    background: { ...vars.color, ...vars.gradient },
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
