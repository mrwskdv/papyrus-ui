'use client';

import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import { createContext, CSSProperties, HTMLAttributes } from 'react';

export interface PopoverContextType {
  context: FloatingContext;
  floatingStyles: CSSProperties;
  open: boolean;
  modal: boolean;
  refs: ExtendedRefs<Element>;
  closePopover: () => void;
  getFloatingProps: (
    userProps?: HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: HTMLAttributes<Element>,
  ) => Record<string, unknown>;
}

export const PopoverContext = createContext<PopoverContextType>({
  context: {} as FloatingContext,
  floatingStyles: {},
  open: false,
  refs: {} as ExtendedRefs<Element>,
  modal: false,
  closePopover: () => {
    // Do nothing
  },
  getFloatingProps: () => ({}),
  getReferenceProps: () => ({}),
});
