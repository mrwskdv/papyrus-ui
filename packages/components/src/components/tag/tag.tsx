'use client';

import {
  atoms,
  interactiveStyle,
  truncateStyle,
} from '@papyrus-ui/style-utils';
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

import * as S from './tag.css';

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

    return (
      <span
        ref={ref}
        aria-disabled={disabled}
        className={cn(
          S.root,
          S.rootSize[size],
          S.rootVariant[variant],
          disabled && S.rootDisabled,
          onClick && !disabled && !readOnly && interactiveStyle,
          removable && S.rootRemovable,
          atoms({
            rounded: rounded ? 'full' : 'sm',
          }),
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
        <span className={cn(S.label, truncateStyle)}>{children}</span>

        {removable && !disabled && !readOnly && (
          <Icon
            className={S.remove}
            data-testid="clear-icon"
            fontSize="sm"
            interactive
          >
            <BiX />
          </Icon>
        )}
      </span>
    );
  },
);

Tag.displayName = 'Tag';
