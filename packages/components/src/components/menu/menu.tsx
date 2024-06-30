import cn from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Maybe } from '../../types';
import { getFirstItem, getLastItem } from '../../utils/list-navigation';

import { MenuItem } from './menu-item';
import { MenuContext, MenuContextType } from './menu.context';
import * as S from './menu.css';
import { MenuSize, MenuVariant } from './menu.types';
import { Submenu } from './submenu';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  size?: MenuSize;
  variant?: MenuVariant;
  onCollapsedChange?: (collapsed: boolean) => void;
}

const MenuComponent: FC<MenuProps> = ({
  collapsed = false,
  size = 'md',
  variant = 'primary',
  onCollapsedChange,
  children,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState<Maybe<number>>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updateActiveIndex = useCallback((index: Maybe<number>) => {
    setActiveIndex(index);
  }, []);

  const menuCxt: MenuContextType = useMemo(
    () => ({
      activeIndex,
      collapsed,
      indent: 0,
      menuRef,
      size,
      variant,
      updateActiveIndex,
      onCollapsedChange,
    }),
    [
      activeIndex,
      collapsed,
      onCollapsedChange,
      size,
      updateActiveIndex,
      variant,
    ],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        const item = getLastItem(menuRef);
        item?.focus();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const item = getFirstItem(menuRef);
        item?.focus();
      }
    },
    [menuRef],
  );

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (e.target instanceof Node && !menuRef.current?.contains(e.target)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <MenuContext.Provider value={menuCxt}>
      <div
        ref={menuRef}
        className={cn(S.root, S.rootVariant[variant], className)}
        role="menu"
        tabIndex={activeIndex == null ? 0 : -1}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {Children.map(children, (child, i) =>
          isValidElement(child) ? cloneElement(child, { index: i }) : null,
        )}
      </div>
    </MenuContext.Provider>
  );
};

export const Menu = Object.assign(MenuComponent, {
  Submenu,
  Item: MenuItem,
});
