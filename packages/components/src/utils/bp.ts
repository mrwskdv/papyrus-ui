import { StyleRule } from '@vanilla-extract/css';

export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export const breakpoints = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
};

export const breakpointsOrder = ['mobile', 'tablet', 'laptop', 'desktop'];

function bpNext(name: Breakpoint): Breakpoint | undefined {
  const idx = breakpointsOrder.indexOf(name);
  return breakpointsOrder[idx + 1] as Breakpoint | undefined;
}

function bpMin(name: Breakpoint): number {
  return breakpoints[name];
}

function bpMax(name: Breakpoint): number {
  const val = breakpoints[name];
  return val - 0.2;
}

export function bpUp(name: Breakpoint, content: StyleRule): StyleRule {
  const minWidth = bpMin(name);

  if (minWidth) {
    return {
      '@media': {
        [`(min-width: ${minWidth}px)`]: content,
      },
    };
  }

  return content;
}

export function bpDown(name: Breakpoint, content: StyleRule): StyleRule {
  const next = bpNext(name);
  const maxWidth = next && bpMax(next);

  if (maxWidth) {
    return {
      '@media': {
        [`(max-width: ${maxWidth}px)`]: content,
      },
    };
  }

  return content;
}

export function bpBetween(
  min: Breakpoint,
  max: Breakpoint,
  content: StyleRule,
): StyleRule {
  const minWidth = bpMin(min);
  const maxWidth = bpMax(max);

  return {
    '@media': {
      [`(min-width: ${minWidth}) and (max-width: ${maxWidth}px)`]: content,
    },
  };
}

export function bpOnly(name: Breakpoint, content: StyleRule): StyleRule {
  const minWidth = bpMin(name);
  const next = bpNext(name);
  const maxWidth = next && bpMax(next);

  if (maxWidth != null) {
    return {
      '@media': {
        [`(min-width: ${minWidth}) and (max-width: ${maxWidth}px)`]: content,
      },
    };
  }

  return bpUp(name, content);
}
