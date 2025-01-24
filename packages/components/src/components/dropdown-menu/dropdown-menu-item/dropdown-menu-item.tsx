'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import {
  AnchorHTMLAttributes,
  ElementType,
  FocusEvent,
  memo,
  MouseEvent,
  ReactElement,
  useContext,
} from 'react';

import { MenuButton } from '../../menu-button';
import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuItemProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  as?: ElementType;
  danger?: boolean;
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

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      tree?.events.emit('click');
      onClick?.(e);
    };

    const handleFocus = (e: FocusEvent<HTMLAnchorElement>) => {
      setActiveIndex(item.index);
      onFocus?.(e);
    };

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
