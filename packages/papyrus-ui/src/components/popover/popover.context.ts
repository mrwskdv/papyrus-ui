'use client';

import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import {
  createContext,
  CSSProperties,
  HTMLAttributes,
  MutableRefObject,
} from 'react';

export interface PopoverContextType {
  arrowRef: MutableRefObject<SVGSVGElement | null>;
  context: FloatingContext;
  floatingStyles: CSSProperties;
  open: boolean;
  modal: boolean;
  refs: ExtendedRefs<Element>;
  getFloatingProps: (
    userProps?: HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: HTMLAttributes<Element>,
  ) => Record<string, unknown>;
}

export const PopoverContext = createContext<PopoverContextType>({
  arrowRef: { current: null },
  context: {} as FloatingContext,
  floatingStyles: {},
  open: false,
  refs: {} as ExtendedRefs<Element>,
  modal: false,
  getFloatingProps: () => ({}),
  getReferenceProps: () => ({}),
});
