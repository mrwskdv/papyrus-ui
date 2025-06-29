'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import {
  AnchorHTMLAttributes,
  ElementType,
  FC,
  FocusEvent,
  MouseEvent,
  ReactElement,
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

export const MenuBarItem: FC<MenuBarItemProps> = ({
  disabled,
  icon,
  onClick,
  onFocus,
  children,
  ...props
}) => {
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
};
