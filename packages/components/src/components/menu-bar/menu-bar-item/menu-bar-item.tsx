'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import {
  AnchorHTMLAttributes,
  ElementType,
  FocusEvent,
  memo,
  MouseEvent,
  ReactElement,
  useCallback,
  useContext,
} from 'react';

import { MenuButton } from '../../menu-button';
import { MenuBarContext } from '../menu-bar.context';

export interface MenuBarItemProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  as?: ElementType;
  danger?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  selected?: boolean;
  children: string;
}

export const MenuBarItem = memo<MenuBarItemProps>(
  ({ disabled, icon, onClick, onFocus, children, ...props }) => {
    const {
      activeIndex,
      collapsed,
      getItemProps,
      isNested,
      setActiveIndex,
      size,
      variant,
    } = useContext(MenuBarContext);

    const item = useListItem({ label: disabled ? null : children });
    const tree = useFloatingTree();
    const isActive = item.index === activeIndex;

    const handleClick = useCallback(
      (e: MouseEvent<HTMLAnchorElement>) => {
        tree?.events.emit('click');
        onClick?.(e);
      },
      [onClick, tree?.events],
    );

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLAnchorElement>) => {
        setActiveIndex(item.index);
        onFocus?.(e);
      },
      [item.index, onFocus, setActiveIndex],
    );

    return (
      <MenuButton
        ref={item.ref}
        collapsed={collapsed}
        direction={isNested ? 'vertical' : 'horizontal'}
        size={isNested ? 'sm' : size}
        startIcon={icon}
        tabIndex={isActive ? 0 : -1}
        variant={variant}
        {...getItemProps({
          disabled,
          onClick: handleClick,
          onFocus: handleFocus,
        })}
        {...props}
      >
        {children}
      </MenuButton>
    );
  },
);

MenuBarItem.displayName = 'MenuItem';
