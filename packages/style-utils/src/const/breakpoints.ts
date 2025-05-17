import { Breakpoint } from '../types';

export const breakpoints: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
};

export const breakpointsOrder: Breakpoint[] = [
  'mobile',
  'tablet',
  'laptop',
  'desktop',
];
