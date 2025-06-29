import { createContext, RefObject } from "react";

import { Maybe } from "../../types";

import { MenuSize, MenuVariant } from "./menu.types";

export interface MenuContextType {
  activeIndex: Maybe<number>;
  collapsed: boolean;
  indent: number;
  menuRef: RefObject<HTMLElement>;
  size: MenuSize;
  variant: MenuVariant;
  setActiveIndex: (index: Maybe<number>) => void;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export const MenuContext = createContext<MenuContextType>({
  activeIndex: null,
  collapsed: false,
  indent: 0,
  menuRef: { current: null },
  size: "md",
  variant: "secondary",
  setActiveIndex: () => {
    // do nothing
  },
  onCollapsedChange: undefined,
});
