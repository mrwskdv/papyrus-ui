'use client';

import cn from 'classnames';
import {
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { BiX } from 'react-icons/bi';

import { Icon } from '../icon';

export type TagSize = 'sm' | 'md';

export type TagVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  disabled?: boolean;
  readOnly?: boolean;
  removable?: boolean;
  rounded?: boolean;
  size?: TagSize;
  variant?: TagVariant;
  onClick?: MouseEventHandler;
  children?: ReactNode;
}

// Base styles that are always applied
const baseStyles = [
  'inline-flex items-center justify-center',
  'max-w-full',
  'border',
  'gap-1',
  'px-1.5',
  'overflow-hidden',
  'transition-all',
];

// Size styles
const sizeStyles = {
  sm: 'h-4',
  md: 'h-6',
};

// Variant styles
const variantStyles = {
  primary: ['border-primary-600/30', 'text-primary-800', 'bg-primary-600/10'],
  secondary: [
    'border-secondary-600/30',
    'text-secondary-800',
    'bg-secondary-600/10',
  ],
  tertiary: ['border-neutral-300', 'text-neutral-800', 'bg-neutral-50'],
  info: ['border-info-600/30', 'text-info-800', 'bg-info-600/10'],
  success: ['border-success-600/30', 'text-success-800', 'bg-success-600/10'],
  warning: ['border-warning-600/30', 'text-warning-800', 'bg-warning-600/10'],
  danger: ['border-danger-600/30', 'text-danger-800', 'bg-danger-600/10'],
  ghost: ['border-white/40', 'text-white', 'bg-white/20'],
};

const interactiveStyles = ['cursor-pointer'];

const interactiveVariantStyles = {
  primary: ['hover:bg-primary-600/20', 'active:bg-primary-600/30'],
  secondary: ['hover:bg-secondary-600/20', 'active:bg-secondary-600/30'],
  tertiary: ['hover:bg-black/10', 'active:bg-black/20'],
  info: ['hover:bg-info-600/20', 'active:bg-info-600/30'],
  success: ['hover:bg-success-600/20', 'active:bg-success-600/30'],
  warning: ['hover:bg-warning-600/20', 'active:bg-warning-600/30'],
  danger: ['hover:bg-danger-600/20', 'active:bg-danger-600/30'],
  ghost: ['hover:bg-white/30', 'active:bg-white/40'],
};

// Interactive styles

// Label styles
const labelStyles = ['truncate', 'text-caption', 'leading-none', '-mb-0.5'];

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      disabled,
      readOnly,
      removable,
      rounded,
      role,
      size = 'md',
      tabIndex,
      variant = 'secondary',
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ): JSX.Element => {
    const isInteractive = Boolean(onClick);

    const handleClick = (e: MouseEvent) =>
      !disabled && !readOnly && onClick?.(e);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (disabled || readOnly) {
        return;
      }

      if (
        (e.code === 'Delete' && removable) ||
        ((e.code === 'Enter' || e.code === 'Space') && !removable)
      ) {
        e.currentTarget.click();
      }

      onKeyDown?.(e);
    };

    return (
      <span
        ref={ref}
        aria-disabled={disabled}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          disabled && 'opacity-40',
          removable && !disabled && !readOnly && 'pr-1',
          rounded ? 'rounded-full' : 'rounded-tag',
          onClick &&
            !removable &&
            !disabled &&
            !readOnly && [interactiveStyles, interactiveVariantStyles[variant]],
          removable && 'cursor-default pointer-events-none',
          className,
        )}
        role={isInteractive && !role ? 'button' : role}
        tabIndex={
          onClick && !disabled && !readOnly && typeof tabIndex === 'undefined'
            ? 0
            : tabIndex
        }
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span
          className={cn(
            labelStyles,
            onClick && !removable ? 'cursor-inherit' : 'cursor-text',
          )}
        >
          {children}
        </span>

        {removable && !disabled && !readOnly && (
          <Icon
            className="text-sm color-neutral-800 hover:opacity-60 cursor-pointer pointer-events-auto"
            data-testid="clear-icon"
          >
            <BiX />
          </Icon>
        )}
      </span>
    );
  },
);

Tag.displayName = 'Tag';
