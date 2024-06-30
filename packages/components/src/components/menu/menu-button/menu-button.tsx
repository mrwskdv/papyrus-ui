'use client';

import { truncateStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  memo,
  ReactElement,
  useCallback,
  useContext,
} from 'react';

import { getNextItem, getPrevItem } from '../../../utils/list-navigation';
import { IconProps } from '../../icon';
import { MenuContext } from '../menu.context';

import * as S from './menu-button.css';

export interface MenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  children: string;
}

const INDENT_BASE = 1.625;

const MenuButtonComponent = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, disabled, selected, startIcon, endIcon, ...props }, ref) => {
    const { collapsed, indent, menuRef, size, variant } =
      useContext(MenuContext);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLButtonElement>) => {
        if (!menuRef.current) {
          return;
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopPropagation();
          const item = getPrevItem(menuRef, e.currentTarget);
          item?.focus();
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          e.stopPropagation();
          const item = getNextItem(menuRef, e.currentTarget);
          item?.focus();
        }
      },
      [menuRef],
    );

    return (
      <button
        ref={ref}
        className={cn(
          S.root,
          collapsed
            ? [
                S.rootCollapsed,
                S.rootCollapsedVariant[variant],
                selected && S.rootCollapsedSelectedVariant[variant],
              ]
            : [
                S.rootVariant[variant],
                S.rootSize[size],
                selected && S.rootSelectedVariant[variant],
              ],
        )}
        disabled={disabled}
        role="menuitem"
        onKeyDown={handleKeyDown}
        {...props}
      >
        {indent > 0 && (
          <span
            className={S.indent}
            style={{ width: `${indent * INDENT_BASE}rem` }}
          />
        )}

        {isValidElement<IconProps>(startIcon) &&
          cloneElement(startIcon, {
            className: cn(
              collapsed
                ? [
                    S.startIconCollapsed,
                    S.startIconCollapsedVariant[variant],
                    selected && S.startIconCollapsedSelectedVariant[variant],
                  ]
                : [
                    S.startIcon,
                    S.startIconVariant[variant],
                    selected && S.startIconSelectedVariant[variant],
                  ],
              disabled && S.startIconDisabled,
            ),
          })}

        <span
          className={cn(
            S.label,
            selected && S.labelSelected,
            collapsed && [S.labelCollapsed, truncateStyle],
          )}
        >
          {children}
        </span>

        {!collapsed &&
          isValidElement<IconProps>(endIcon) &&
          cloneElement(endIcon, {
            className: cn(S.endIcon, endIcon.props.className),
          })}

        {variant === 'primary' && (
          <span
            className={cn(
              S.underline,
              selected && !disabled && S.underlineSelected,
            )}
          />
        )}
      </button>
    );
  },
);

MenuButtonComponent.displayName = 'MenuButton';

export const MenuButton = memo(MenuButtonComponent);
