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

import { MenuButton } from '../../menu-button';
import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuItemProps
  extends Omit<ButtonHTMLAttributes<HTMLAnchorElement>, 'children' | 'type'> {
  disabled?: boolean;
  icon?: ReactElement;
  selected?: boolean;
  children: string;
}

export const DropdownMenuItem = memo<DropdownMenuItemProps>(
  ({ disabled, icon, onClick, onFocus, children, ...props }) => {
    const { activeIndex, getItemProps, setActiveIndex } =
      useContext(DropdownMenuContext);

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
        size="sm"
        startIcon={icon}
        tabIndex={isActive ? 0 : -1}
        variant="secondary"
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

DropdownMenuItem.displayName = 'DropdownMenuItem';
