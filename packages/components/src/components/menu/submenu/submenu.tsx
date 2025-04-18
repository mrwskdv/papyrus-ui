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
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { BiChevronUp } from 'react-icons/bi';
import { Transition } from 'react-transition-group';

import { Maybe } from '../../../types';
import {
  getFirstItem,
  getLastItem,
  getNextItem,
  getPrevItem,
} from '../../../utils/list-navigation';
import { Icon } from '../../icon';
import { MenuButton } from '../../menu-button';
import { MenuItemProps } from '../menu-item';
import { MenuContext, MenuContextType } from '../menu.context';

import * as S from './submenu.css';

export interface SubmenuProps
  extends Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> {
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
  onKeyDown,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [activeIndex, setActiveIndex] = useState<Maybe<number>>(null);
  const parent = useContext(MenuContext);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonId = useId();
  const menuId = useId();
  const isActive = index === parent.activeIndex;

  const menuCtx = useMemo<MenuContextType>(
    () => ({
      activeIndex,
      collapsed: false,
      indent: parent.indent + 1,
      menuRef: parent.menuRef,
      size: parent.size,
      variant: parent.variant,
      setActiveIndex,
    }),
    [activeIndex, parent.indent, parent.menuRef, parent.size, parent.variant],
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

  const handleClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    setIsOpen((prev) => !prev);

    if (parent.collapsed) {
      parent.onCollapsedChange?.(false);
    }

    onClick?.(e);
  };

  const handleFocus = (e: FocusEvent<HTMLAnchorElement>) => {
    setActiveIndex(null);
    parent.setActiveIndex(index);
    onFocus?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.click();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      e.stopPropagation();
      const item = getPrevItem(parent.menuRef, e.currentTarget, true);
      item?.focus();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      const item = getNextItem(parent.menuRef, e.currentTarget, true);
      item?.focus();
    }

    onKeyDown?.(e);
  };

  const handleMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
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
  };

  return (
    <>
      <MenuButton
        {...props}
        ref={buttonRef}
        aria-controls={isOpen ? menuId : undefined}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="menu"
        collapsed={parent.collapsed}
        disabled={disabled}
        endIcon={
          <Icon flip={!isOpen ? 'vertical' : 'none'}>
            <BiChevronUp />
          </Icon>
        }
        id={buttonId}
        indent={parent.indent}
        role="menuitem"
        selected={selected}
        size={parent.size}
        startIcon={icon}
        tabIndex={isActive && activeIndex === null ? 0 : -1}
        variant={parent.variant}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      >
        {label}
      </MenuButton>

      {!parent.collapsed && (
        <MenuContext.Provider value={menuCtx}>
          <Transition
            in={isOpen}
            mountOnEnter
            nodeRef={menuRef}
            timeout={TRANSITION_TIMEOUT}
            unmountOnExit
          >
            {(status) => (
              <ul
                ref={menuRef}
                aria-labelledby={buttonId}
                className={cn(
                  S.menuList,
                  collapseStyle,
                  status === 'entered' && collapseInStyle,
                )}
                id={menuId}
                role="menu"
                tabIndex={-1}
                onKeyDown={handleMenuKeyDown}
              >
                {Children.map(children, (child, i) =>
                  isValidElement<MenuItemProps>(child)
                    ? cloneElement(child, { index: i })
                    : null,
                )}
              </ul>
            )}
          </Transition>
        </MenuContext.Provider>
      )}
    </>
  );
};
