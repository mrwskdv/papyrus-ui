'use client';

import { Atoms, atoms, interactiveStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  memo,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
} from 'react';

import { Icon } from '../icon';
import { Text } from '../text';

import * as S from './tag.css';

export type TagSize = 'sm' | 'md';

export interface TagProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  bg?: Atoms['bg'];
  borderColor?: Atoms['borderColor'];
  color?: Atoms['color'];
  disabled?: boolean;
  removable?: boolean;
  rounded?: boolean;
  size?: TagSize;
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

const TagComponent = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      bg = 'primary100',
      borderColor = 'transparent',
      color = 'primary700',
      className,
      disabled,
      removable,
      rounded,
      role,
      size = 'md',
      tabIndex,
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ): JSX.Element => {
    const isInteractive = removable || Boolean(onClick);

    const handleClick = useCallback(
      (e: MouseEvent) => !disabled && onClick?.(e),
      [disabled, onClick],
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (disabled) {
          return;
        }

        if (
          (e.code === 'Delete' && removable) ||
          ((e.code === 'Enter' || e.code === 'Space') && !removable)
        ) {
          e.currentTarget.click();
        }

        onKeyDown?.(e);
      },
      [disabled, removable, onKeyDown],
    );

    return (
      <span
        ref={ref}
        aria-disabled={disabled}
        className={cn(
          S.root,
          S.rootSize[size],
          onClick && !disabled && interactiveStyle,
          removable && S.rootRemovable,
          atoms({
            borderColor,
            color,
            bg,
            rounded: rounded ? 'full' : 'sm',
          }),
          className,
        )}
        role={isInteractive && !role ? 'button' : role}
        tabIndex={
          isInteractive && !disabled && typeof tabIndex === 'undefined'
            ? 0
            : tabIndex
        }
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <Text
          as="span"
          display="inline-block"
          fontFamily="primary"
          fontSize="xs"
          fontWeight="regular"
          letterSpacing="widest"
          lineHeight="snug"
          truncate
        >
          {children}
        </Text>

        {removable && !disabled && (
          <Icon
            className={S.remove}
            data-testid="clear-icon"
            fontSize="sm"
            interactive
            ml={1}
            name="x"
          />
        )}
      </span>
    );
  },
);

TagComponent.displayName = 'Tag';

export const Tag = memo(TagComponent);
