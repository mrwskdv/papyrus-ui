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
      variant = 'primary',
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ): JSX.Element => {
    const isInteractive = removable || Boolean(onClick);

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

    const variantClasses: Record<string, string> = {
      primary: 'border-transparent text-primary-700 bg-primary-100',
      secondary: 'border-transparent text-secondary-700 bg-secondary-100',
      tertiary: 'border-neutral-300 text-neutral-900 bg-neutral-50',
      info: 'border-transparent text-info-700 bg-info-100',
      success: 'border-transparent text-success-700 bg-success-100',
      warning: 'border-transparent text-warning-700 bg-warning-100',
      danger: 'border-transparent text-danger-700 bg-danger-100',
      ghost: 'border-light-600 text-white bg-light-300',
    };

    const sizeClasses: Record<string, string> = {
      sm: 'h-4 px-1',
      md: 'h-6 px-1.5',
    };

    return (
      <span
        ref={ref}
        aria-disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center max-w-full border gap-2 overflow-hidden',
          sizeClasses[size],
          variantClasses[variant],
          disabled && 'opacity-40',
          removable && 'pr-1',
          rounded ? 'rounded-full' : 'rounded-sm',
          isInteractive && !disabled && !readOnly && 'cursor-pointer',
          className,
        )}
        role={isInteractive && !role ? 'button' : role}
        tabIndex={
          isInteractive &&
          !disabled &&
          !readOnly &&
          typeof tabIndex === 'undefined'
            ? 0
            : tabIndex
        }
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span className="truncate text-caption leading-none -mb-0.5">
          {children}
        </span>

        {removable && !disabled && !readOnly && (
          <Icon className="text-sm" data-testid="clear-icon" interactive>
            <BiX />
          </Icon>
        )}
      </span>
    );
  },
);

Tag.displayName = 'Tag';
