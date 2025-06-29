'use client';

import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import {
  createContext,
  CSSProperties,
  Dispatch,
  HTMLProps,
  MutableRefObject,
  SetStateAction,
} from 'react';

import { MenuBarSize, MenuBarVariant } from './menu-bar.types';

export interface MenuBarContextType {
  activeIndex: number | null;
  collapsed: boolean;
  context: FloatingContext<HTMLElement>;
  elementsRef: MutableRefObject<Array<HTMLElement | null>>;
  floatingStyles: CSSProperties;
  getFloatingProps: (
    userProps?: HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>;
  isOpen: boolean;
  isNested: boolean;
  labelsRef: MutableRefObject<Array<string>>;
  refs: ExtendedRefs<HTMLElement>;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  size: MenuBarSize;
  variant: MenuBarVariant;
}

export const MenuBarContext = createContext<MenuBarContextType>({
  activeIndex: null,
  collapsed: false,
  context: {} as FloatingContext<HTMLElement>,
  elementsRef: {} as MutableRefObject<Array<HTMLElement>>,
  floatingStyles: {},
  getFloatingProps: () => ({}),
  getItemProps: () => ({}),
  isOpen: false,
  isNested: false,
  labelsRef: {} as MutableRefObject<Array<string>>,
  refs: {} as ExtendedRefs<HTMLElement>,
  setActiveIndex: () => {
    // Do nothing
  },
  size: 'md',
  variant: 'secondary',
});
