'use client';

import {
  AnchorHTMLAttributes,
  ElementType,
  FocusEvent,
  KeyboardEvent,
  memo,
  ReactElement,
  useContext,
  useRef,
} from 'react';

import { getNextItem, getPrevItem } from '../../../utils/list-navigation';
import { MenuButton } from '../../menu-button';
import { MenuContext } from '../menu.context';

export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType;
  danger?: boolean;
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

    const handleFocus = (e: FocusEvent<HTMLAnchorElement>) => {
      setActiveIndex(index);
      onFocus?.(e);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
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
        const item = getPrevItem(menuRef, e.currentTarget, true);
        item?.focus();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const item = getNextItem(menuRef, e.currentTarget, true);
        item?.focus();
      }

      onKeyDown?.(e);
    };

    return (
      <MenuButton
        {...props}
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
      >
        {children}
      </MenuButton>
    );
  },
);

MenuItem.displayName = 'MenuItem';
