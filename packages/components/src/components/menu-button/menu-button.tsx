'use client';

import { fadeInStyle, fadeStyle, truncateStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
} from 'react';

import { IconProps } from '../icon';

import * as S from './menu-button.css';

export type MenuButtonDirection = 'vertical' | 'horizontal';

export type MenuButtonSize = 'sm' | 'md' | 'lg';

export type MenuButtonVariant = 'primary' | 'secondary' | 'ghost';

const INDENT_BASE = 1.625;

export interface MenuButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType;
  active?: boolean;
  collapsed?: boolean;
  direction?: MenuButtonDirection;
  disabled?: boolean;
  indent?: number;
  selected?: boolean;
  size?: MenuButtonSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: MenuButtonVariant;
}

export const MenuButton = forwardRef<HTMLAnchorElement, MenuButtonProps>(
  (
    {
      as: Element = 'a',
      active,
      className,
      collapsed,
      direction = 'vertical',
      disabled,
      indent = 0,
      role = 'menuitem',
      selected,
      size = 'md',
      startIcon,
      endIcon,
      variant = 'primary',
      children,
      ...props
    },
    ref,
  ) => (
    <li className={cn(S.rootDirection[direction], className)} role="none">
      <Element
        ref={ref}
        aria-disabled={disabled}
        aria-selected={selected}
        className={cn(
          S.link,
          S.linkSize[size],
          S.linkVariant[variant],
          active && S.linkActiveVariant[variant],
          selected && [
            S.linkSelectedVariant[variant],
            active && S.linkActiveSelectedVariant[variant],
          ],
          collapsed && S.linkCollapsed,
          disabled && S.linkDisabled,
        )}
        role={role}
        {...props}
      >
        {direction === 'vertical' && !collapsed && indent > 0 && (
          <span
            className={S.indent}
            style={{ width: `${indent * INDENT_BASE}rem` }}
          />
        )}

        {isValidElement<IconProps>(startIcon) &&
          cloneElement(startIcon, {
            className: cn(
              collapsed
                ? [S.iconCollapsed, S.iconCollapsedVariant[variant]]
                : [S.icon, S.iconVariant[variant]],
              selected && S.iconSelectedVariant[variant],
              disabled && S.iconDisabledVariant[variant],
              startIcon.props.className,
            ),
          })}

        <span
          className={cn(
            S.label,
            S.labelDirection[direction],
            collapsed
              ? [
                  S.labelCollapsed,
                  S.labelCollapsedVariant[variant],
                  selected && S.labelCollapsedSelectedVariant[variant],
                  direction === 'horizontal' && truncateStyle,
                ]
              : [
                  S.label,
                  S.labelVariant[variant],
                  selected && [
                    S.labelSelected,
                    S.labelSelectedVariant[variant],
                  ],
                  truncateStyle,
                ],
            disabled && S.labelDisabledVariant[variant],
          )}
        >
          {children}
        </span>

        {!collapsed &&
          isValidElement<IconProps>(endIcon) &&
          cloneElement(endIcon, {
            className: cn(
              S.icon,
              S.endIconVariant[variant],
              selected && S.iconSelectedVariant[variant],
              disabled && S.iconDisabledVariant[variant],
              endIcon.props.className,
            ),
          })}

        {variant === 'primary' && !disabled && (
          <span
            className={cn(
              S.underline,
              S.underlineDirection[direction],
              fadeStyle,
              selected && fadeInStyle,
            )}
          />
        )}
      </Element>
    </li>
  ),
);

MenuButton.displayName = 'MenuButton';
