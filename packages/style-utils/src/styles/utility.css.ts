import { vars } from '@papyrus-ui/theme';
import { style } from '@vanilla-extract/css';

import { maxHeight } from '../const';

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
  backgroundImage: vars.gradient.highlight,
  backgroundSize: '200%',
  backgroundPosition: 'left',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

/**
 * Transitions
 * ===========
 */
export const fadeStyle = style({
  opacity: 0,
  transition: vars.transition.fade,
});

export const fadeInStyle = style({
  opacity: 1,
});

export const collapseStyle = style({
  maxHeight: 0,
  transition: vars.transition.collapse,
  overflowY: 'hidden',
});

export const collapseInStyle = style({
  maxHeight: maxHeight[96],
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
