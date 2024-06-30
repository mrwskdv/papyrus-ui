'use client';

import {
  ButtonHTMLAttributes,
  memo,
  useCallback,
  useContext,
  useRef,
} from 'react';

import { MenuButton } from '../menu-button';
import { MenuContext } from '../menu.context';

export interface MenuItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  disabled?: boolean;
  index?: number;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
}

export const MenuItem = memo<MenuItemProps>(
  ({ disabled, index, onFocus, children, ...props }) => {
    const { activeIndex, updateActiveIndex } = useContext(MenuContext);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const isActive = index === activeIndex;

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        updateActiveIndex(index);
        onFocus?.(e);
      },
      [index, onFocus, updateActiveIndex],
    );

    return (
      <MenuButton
        ref={buttonRef}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        onFocus={handleFocus}
        {...props}
      >
        {children}
      </MenuButton>
    );
  },
);

MenuItem.displayName = 'MenuItem';
