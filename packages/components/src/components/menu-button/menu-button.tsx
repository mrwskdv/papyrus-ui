'use client';

import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
} from 'react';
import { IconBaseProps } from 'react-icons';

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
  danger?: boolean;
  direction?: MenuButtonDirection;
  disabled?: boolean;
  indent?: number;
  selected?: boolean;
  size?: MenuButtonSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: MenuButtonVariant;
}

const rootDirectionClasses = {
  vertical: 'px-1 py-0.5',
  horizontal: 'flex-1 px-0.5 py-1',
};

const linkSizeClasses = {
  sm: 'px-1 py-0.5',
  md: 'px-1.5 py-1.5',
  lg: 'px-2.5 py-3',
};

const iconVariantClasses = {
  primary: 'text-neutral-500',
  secondary: 'text-neutral-500',
  ghost: 'text-white',
};

const iconCollapsedVariantClasses = {
  primary: 'text-neutral-900',
  secondary: 'text-neutral-900',
  ghost: 'text-white',
};

const labelDirectionClasses = {
  vertical: 'flex-1',
  horizontal: '',
};

const labelVariantClasses = {
  primary: 'text-neutral-900',
  secondary: 'text-neutral-900',
  ghost: 'text-white',
};

const labelCollapsedVariantClasses = {
  primary: 'text-neutral-500',
  secondary: 'text-neutral-500',
  ghost: 'text-white',
};

const endIconVariantClasses = {
  primary: 'text-neutral-900',
  secondary: 'text-neutral-900',
  ghost: 'text-white',
};

const underlineDirectionClasses = {
  vertical: 'top-1 bottom-1 -left-1 w-1',
  horizontal: '-bottom-1 left-1 right-1 h-1',
};

export const MenuButton = forwardRef<HTMLAnchorElement, MenuButtonProps>(
  (
    {
      as: Element = 'a',
      active,
      className,
      collapsed,
      danger,
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
    <li className={cn(rootDirectionClasses[direction], className)} role="none">
      <Element
        ref={ref}
        aria-disabled={disabled}
        aria-selected={selected}
        className={cn(
          'relative flex justify-center items-center rounded-md text-start transition-colors cursor-pointer',
          linkSizeClasses[size],
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
            className="block"
            style={{ width: `${indent * INDENT_BASE}rem` }}
          />
        )}

        {isValidElement<IconBaseProps>(startIcon) &&
          cloneElement(startIcon, {
            className: cn(
              collapsed
                ? ['font-2xl mb-0.5', iconCollapsedVariantClasses[variant]]
                : ['font-xl mx-1', iconVariantClasses[variant]],
              selected && S.iconSelectedVariant[variant],
              danger && S.iconDanger,
              disabled && S.iconDisabledVariant[variant],
              startIcon.props.className,
            ),
          })}

        <span
          className={cn(
            labelDirectionClasses[direction],
            collapsed
              ? [
                  'text-caption text-center',
                  labelCollapsedVariantClasses[variant],
                  selected && S.labelCollapsedSelectedVariant[variant],
                  direction === 'horizontal' && 'truncate',
                ]
              : [
                  'block text-body-md-primary mx-1 truncate',
                  labelVariantClasses[variant],
                  selected && [
                    'text-body-md-primary-bold',
                    S.labelSelectedVariant[variant],
                  ],
                ],
            danger && S.labelDanger,
            disabled && S.labelDisabledVariant[variant],
          )}
        >
          {children}
        </span>

        {!collapsed &&
          isValidElement<IconBaseProps>(endIcon) &&
          cloneElement(endIcon, {
            className: cn(
              'font-xl mx-1',
              endIconVariantClasses[variant],
              selected && S.iconSelectedVariant[variant],
              danger && S.iconDanger,
              disabled && S.iconDisabledVariant[variant],
              endIcon.props.className,
            ),
          })}

        {variant === 'primary' && !disabled && (
          <span
            className={cn(
              'absolute block rounded-full bg-primary-500 opacity-0 transition',
              underlineDirectionClasses[direction],
              danger && S.underlineDanger,
              selected && 'opacity-100',
            )}
          />
        )}
      </Element>
    </li>
  ),
);

MenuButton.displayName = 'MenuButton';
