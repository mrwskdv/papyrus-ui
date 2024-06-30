'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import { memo, useCallback, useContext } from 'react';

import { DropdownMenuButton } from '../dropdown-menu-button';
import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuItemProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
}

export const DropdownMenuItem = memo<DropdownMenuItemProps>(
  ({ children, disabled, onClick, onFocus, ...props }) => {
    const { activeIndex, getItemProps, setHasFocusInside } =
      useContext(DropdownMenuContext);

    const item = useListItem({ label: disabled ? null : children });
    const tree = useFloatingTree();
    const isActive = item.index === activeIndex;

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
        tree?.events.emit('click');
      },
      [onClick, tree?.events],
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        onFocus?.(e);
        setHasFocusInside(true);
      },
      [onFocus, setHasFocusInside],
    );

    return (
      <DropdownMenuButton
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
      </DropdownMenuButton>
    );
  },
);

DropdownMenuItem.displayName = 'DropdownMenuItem';
