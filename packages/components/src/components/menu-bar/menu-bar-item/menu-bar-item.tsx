'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import {
  ButtonHTMLAttributes,
  FocusEvent,
  memo,
  MouseEvent,
  ReactElement,
  useCallback,
  useContext,
} from 'react';

import { MenuBarButton } from '../menu-bar-button';
import { MenuBarContext } from '../menu-bar.context';

export interface MenuBarItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: string;
}

export const MenuBarItem = memo<MenuBarItemProps>(
  ({ children, disabled, onClick, onFocus, ...props }) => {
    const { activeIndex, getItemProps, setHasFocusInside } =
      useContext(MenuBarContext);

    const item = useListItem({ label: disabled ? null : children });
    const tree = useFloatingTree();
    const isActive = item.index === activeIndex;

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        tree?.events.emit('click');
        onClick?.(e);
      },
      [onClick, tree?.events],
    );

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLButtonElement>) => {
        setHasFocusInside(true);
        onFocus?.(e);
      },
      [onFocus, setHasFocusInside],
    );

    return (
      <MenuBarButton
        ref={item.ref}
        tabIndex={isActive ? 0 : -1}
        {...getItemProps({
          disabled,
          onClick: handleClick,
          onFocus: handleFocus,
        })}
        {...props}
      >
        {children}
      </MenuBarButton>
    );
  },
);

MenuBarItem.displayName = 'MenuItem';
