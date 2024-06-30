import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  paddingInlineStart: '1.5em',
});

export const rootType = styleVariants({
  none: {},
  disc: {},
  dash: {},
});

globalStyle(`.${rootType.disc} > li:before, .${rootType.dash} > li:before`, {
  position: 'absolute',
  display: 'inline-block',
  width: '1em',
  textAlign: 'center',
  marginInlineStart: '-1.5em',
});

globalStyle(`.${rootType.disc} > li:before`, {
  content: '\\2022',
});

globalStyle(`.${rootType.dash} > li:before`, {
  content: '\\2014',
});
