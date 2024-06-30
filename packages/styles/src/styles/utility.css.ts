import { style } from '@vanilla-extract/css';

import { vars } from './global.css';

/**
 * Typography
 * ==========
 */
export const breakWordStyle = style({
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});

export const truncateStyle = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const highlightStyle = style({
  background: vars.gradient.highlight,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

/**
 * Transitions
 * ===========
 */
export const fadeStyle = style({
  opacity: 0,
  transition: vars.transition.base,
});

export const fadeInStyle = style({
  opacity: 1,
});

export const collapseStyle = style({
  minHeight: 0,
  transition: vars.transition.collapse,
  overflowY: 'hidden',
});

export const collapseInStyle = style({
  minHeight: 'max-content',
});

/**
 * Miscellaneous
 * =============
 */
export const interactiveStyle = style({
  cursor: 'pointer',
  transition: vars.transition.fade,

  selectors: {
    '&:hover': {
      opacity: 0.6,
    },
  },
});

export const hideScrollbarStyle = style({
  scrollbarWidth: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const hideVisuallyStyle = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
