'use client';

import { collapseInStyle, collapseStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  FocusEvent,
  HTMLAttributes,
  isValidElement,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Transition } from 'react-transition-group';

import { Maybe } from '../../../types';
import { getFirstItem, getLastItem } from '../../../utils/list-navigation';
import { Icon } from '../../icon';
import { MenuButton } from '../menu-button';
import { MenuContext, MenuContextType } from '../menu.context';

import * as S from './submenu.css';

export interface SubmenuProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  icon?: ReactElement;
  index?: number;
  initialOpen?: boolean;
  label: string;
  selected?: boolean;
  children?: ReactNode;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

export const Submenu: FC<SubmenuProps> = ({
  disabled,
  icon,
  index,
  initialOpen,
  label,
  selected,
  onClick,
  onFocus,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [activeIndex, setActiveIndex] = useState<Maybe<number>>(null);
  const parent = useContext(MenuContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isActive = parent.activeIndex === index;
  const buttonId = useId();
  const menuId = useId();

  const updateActiveIndex = useCallback((index: Maybe<number>) => {
    setActiveIndex(index);
  }, []);

  const menuCtx = useMemo<MenuContextType>(
    () => ({
      activeIndex,
      collapsed: false,
      indent: parent.indent + 1,
      menuRef: parent.menuRef,
      size: parent.size,
      variant: parent.variant,
      updateActiveIndex,
    }),
    [
      activeIndex,
      parent.indent,
      parent.menuRef,
      parent.size,
      parent.variant,
      updateActiveIndex,
    ],
  );

  const handleClick = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement>) => {
      setIsOpen((prev) => !prev);

      if (parent.collapsed) {
        parent.onCollapsedChange?.(false);
      }

      onClick?.(e);
    },
    [onClick, parent],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLButtonElement>) => {
      setActiveIndex(null);
      parent.updateActiveIndex(index);
      onFocus?.(e);
    },
    [index, onFocus, parent],
  );

  const handleMenuKeyDown = useCallback(
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
    if (parent.collapsed) {
      setIsOpen(false);
    }
  }, [parent.collapsed]);

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
    <>
      <MenuButton
        ref={buttonRef}
        aria-controls={isOpen ? menuId : undefined}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="menu"
        disabled={disabled}
        endIcon={
          <Icon flip={!isOpen ? 'vertical' : 'none'} name="chevron-up" />
        }
        id={buttonId}
        role="menuitem"
        selected={selected}
        startIcon={icon}
        tabIndex={isActive && activeIndex === null ? 0 : -1}
        onClick={handleClick}
        onFocus={handleFocus}
      >
        {label}
      </MenuButton>

      <MenuContext.Provider value={menuCtx}>
        {!parent.collapsed && (
          <Transition
            in={isOpen}
            mountOnEnter
            timeout={TRANSITION_TIMEOUT}
            unmountOnExit
          >
            {(status) => (
              <div
                ref={menuRef}
                aria-labelledby={buttonId}
                className={cn(
                  S.menuList,
                  S.menuListVariant[parent.variant],
                  collapseStyle,
                  status === 'entered' && collapseInStyle,
                )}
                id={menuId}
                role="menu"
                tabIndex={-1}
                onKeyDown={handleMenuKeyDown}
              >
                {Children.map(children, (child, i) =>
                  isValidElement(child)
                    ? cloneElement(child, { index: i })
                    : null,
                )}
              </div>
            )}
          </Transition>
        )}
      </MenuContext.Provider>
    </>
  );
};
