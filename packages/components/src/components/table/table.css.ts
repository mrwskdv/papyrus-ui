import { vars } from '@papyrus-ui/theme';
import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
  color: vars.color.neutral900,
  background: vars.color.white,
  overflow: 'auto',
});

globalStyle(`.${root} tr`, {
  borderBottom: `1px solid ${vars.color.neutral200}`,
});

globalStyle(`.${root} th, .${root} td`, {
  textAlign: 'left',
  verticalAlign: 'top',
});

export const rootSize = styleVariants({
  md: {},
  sm: {},
});

globalStyle(`${rootSize.md} th, .${root}.${rootSize.md}  td`, {
  padding: '0.75rem',
});

globalStyle(`${rootSize.sm} th, .${root}.${rootSize.sm}  td`, {
  padding: '0.375rem 0.75rem',
});

export const rootFontVariant = styleVariants({
  primary: {},
  secondary: {},
});

globalStyle(`.${rootSize.md}.${rootFontVariant.primary}`, {
  ...vars.typography.body.md.primary.regular,
});

globalStyle(`.${rootSize.md}.${rootFontVariant.primary} th`, {
  ...vars.typography.body.md.primary.bold,
});

globalStyle(`.${rootSize.md}.${rootFontVariant.secondary}`, {
  ...vars.typography.body.md.secondary.regular,
});

globalStyle(`.${rootSize.md}.${rootFontVariant.secondary} th`, {
  ...vars.typography.body.md.secondary.bold,
});

globalStyle(`.${rootSize.sm}.${rootFontVariant.primary}`, {
  ...vars.typography.body.sm.primary.regular,
});

globalStyle(`.${rootSize.sm}.${rootFontVariant.primary} th`, {
  ...vars.typography.body.sm.primary.bold,
});

globalStyle(`.${rootSize.sm}.${rootFontVariant.secondary}`, {
  ...vars.typography.body.sm.secondary.regular,
});

globalStyle(`.${rootSize.sm}.${rootFontVariant.secondary} th`, {
  ...vars.typography.body.sm.secondary.bold,
});

export const rootBordered = style({});

globalStyle(`.${rootBordered} th, .${rootBordered} td`, {
  border: `1px solid ${vars.color.neutral200}`,
});

export const rootStriped = style({});

globalStyle(`.${rootStriped} tr:nth-of-type(2n)`, {
  background: vars.color.neutral50,
});
