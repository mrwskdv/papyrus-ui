import cn from 'classnames';
import { cloneElement, forwardRef, isValidElement } from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactElement,
} from 'react';

import type { AvatarProps } from '../avatar';
import { Icon } from '../icon/icon';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'plain'
  | 'ghost';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  /**
   * Specifies the element type to be used for rendering the icon-button.
   */
  as?: ElementType;

  /**
   * Specifies the avatar element to be rendered within the icon-button.
   */
  avatar?: ReactElement;

  /**
   * If true, the icon-button will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the icon-button will have a circle shape.
   */
  rounded?: boolean;

  /**
   * The size of the icon-button.
   */
  size?: IconButtonSize;

  /**
   * The visual variant of the icon-button.
   */
  variant?: IconButtonVariant;

  /**
   * The content to be rendered inside the icon-button.
   */
  children?: ReactElement;
}

const avatarSize: Record<IconButtonSize, AvatarProps['size']> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

const sizeMap: Record<IconButtonSize, string> = {
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-12 h-12',
};

const iconSizeMap: Record<IconButtonSize, string> = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
};

// Base styles that are always applied
const baseStyles = [
  'inline-flex items-center justify-center',
  'border',
  'transition-colors',
  'focus-visible:ring',
];

// Variant styles
const variantStyles = {
  primary: [
    'border-transparent',
    'text-white',
    'bg-primary-600',
    'hover:bg-primary-500',
    'active:bg-primary-700',
    'disabled:bg-neutral-300',
  ],
  secondary: [
    'border-primary-600/80',
    'text-primary-600',
    'bg-transparent',
    'hover:bg-primary-600/10',
    'active:bg-primary-600/20',
    'disabled:opacity-disabled disabled:text-black disabled:bg-black/10',
  ],
  tertiary: [
    'border-transparent',
    'text-black',
    'bg-black/10',
    'hover:bg-black/20',
    'active:bg-black/30',
    'disabled:opacity-disabled disabled:bg-black/10',
  ],
  plain: [
    'border-transparent',
    'text-black',
    'hover:bg-black/10',
    'active:bg-black/20',
    'disabled:opacity-disabled disabled:bg-transparent',
  ],
  ghost: [
    'border-transparent',
    'text-white',
    'hover:bg-white/30',
    'active:bg-white/40',
    'disabled:opacity-disabled disabled:bg-transparent',
  ],
};

export const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      as: Element = 'button',
      avatar,
      rounded,
      size = 'md',
      type,
      variant = 'primary',
      className,
      children,
      ...elemProps
    },
    ref,
  ) => (
    <Element
      {...elemProps}
      ref={ref}
      className={cn(
        baseStyles,
        sizeMap[size],
        variantStyles[variant],
        avatar || rounded ? 'rounded-full' : 'rounded-input',
        className,
      )}
      type={Element === 'button' && type == null ? 'button' : type}
    >
      {avatar &&
        isValidElement<AvatarProps>(avatar) &&
        cloneElement(avatar, {
          size: avatarSize[size],
        })}

      {!avatar && <Icon className={cn(iconSizeMap[size])}>{children}</Icon>}
    </Element>
  ),
);

IconButton.displayName = 'IconButton';
