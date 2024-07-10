'use client';

import {
  AnchorHTMLAttributes,
  FocusEvent,
  KeyboardEvent,
  memo,
  ReactElement,
  useCallback,
  useContext,
  useRef,
} from 'react';

import { getNextItem, getPrevItem } from '../../../utils/list-navigation';
import { MenuButton } from '../../menu-button';
import { MenuContext } from '../menu.context';

export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  icon?: ReactElement;
  index?: number;
  selected?: boolean;
}

export const MenuItem = memo<MenuItemProps>(
  ({ disabled, icon, index, onFocus, onKeyDown, children, ...props }) => {
    const {
      activeIndex,
      collapsed,
      indent,
      menuRef,
      setActiveIndex,
      size,
      variant,
    } = useContext(MenuContext);

    const buttonRef = useRef<HTMLAnchorElement>(null);
    const isActive = index === activeIndex;

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLAnchorElement>) => {
        setActiveIndex(index);
        onFocus?.(e);
      },
      [index, onFocus, setActiveIndex],
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          e.currentTarget.click();
        }

        if (!menuRef.current) {
          onKeyDown?.(e);
          return;
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopPropagation();
          const item = getPrevItem(menuRef, e.currentTarget);
          item?.focus();
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          e.stopPropagation();
          const item = getNextItem(menuRef, e.currentTarget);
          item?.focus();
        }

        onKeyDown?.(e);
      },
      [menuRef, onKeyDown],
    );

    return (
      <MenuButton
        ref={buttonRef}
        collapsed={collapsed}
        disabled={disabled}
        indent={indent}
        size={size}
        startIcon={icon}
        tabIndex={isActive ? 0 : -1}
        variant={variant}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </MenuButton>
    );
  },
);

MenuItem.displayName = 'MenuItem';
