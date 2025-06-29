"use client";

import { ExtendedRefs, FloatingContext } from "@floating-ui/react";
import {
  createContext,
  CSSProperties,
  Dispatch,
  HTMLProps,
  MutableRefObject,
  SetStateAction,
} from "react";

export interface DropdownMenuContextType {
  activeIndex: number | null;
  context: FloatingContext<HTMLElement>;
  elementsRef: MutableRefObject<Array<HTMLElement | null>>;
  floatingStyles: CSSProperties;
  getFloatingProps: (
    userProps?: HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
  isOpen: boolean;
  labelsRef: MutableRefObject<Array<string>>;
  refs: ExtendedRefs<HTMLElement>;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
}

export const DropdownMenuContext = createContext<DropdownMenuContextType>({
  activeIndex: null,
  context: {} as FloatingContext<HTMLElement>,
  elementsRef: {} as MutableRefObject<Array<HTMLElement>>,
  floatingStyles: {},
  getFloatingProps: () => ({}),
  getItemProps: () => ({}),
  getReferenceProps: () => ({}),
  isOpen: false,
  labelsRef: {} as MutableRefObject<Array<string>>,
  refs: {} as ExtendedRefs<HTMLElement>,
  setActiveIndex: () => {
    // Do nothing
  },
});
