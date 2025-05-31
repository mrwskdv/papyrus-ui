import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { AvatarProps } from '../avatar';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'plain'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
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

const variantMap: Record<IconButtonVariant, string> = {
  primary:
    'border-transparent text-primary-500 bg-primary-100 hover:bg-primary-200 active:bg-primary-300 disabled:text-neutral-300 disabled:bg-neutral-50',
  secondary:
    'border-transparent text-secondary-500 bg-secondary-100 hover:bg-secondary-200 active:bg-secondary-300 disabled:text-neutral-300 disabled:bg-neutral-50',
  tertiary:
    'border-transparent text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 disabled:text-neutral-300 disabled:bg-neutral-100',
  plain:
    'border-transparent text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 disabled:text-neutral-300 disabled:bg-transparent',
  info: 'border-transparent text-info-500 bg-info-100 hover:bg-info-200 active:bg-info-300 disabled:text-neutral-300 disabled:bg-neutral-50',
  success:
    'border-transparent text-success-500 bg-success-100 hover:bg-success-200 active:bg-success-300 disabled:text-neutral-300 disabled:bg-neutral-50',
  warning:
    'border-transparent text-warning-500 bg-warning-100 hover:bg-warning-200 active:bg-warning-300 disabled:text-neutral-300 disabled:bg-neutral-50',
  danger:
    'border-transparent text-danger-500 bg-danger-100 hover:bg-danger-200 active:bg-danger-300 disabled:text-neutral-300 disabled:bg-neutral-50',
  ghost:
    'border-light-600 text-white hover:bg-light-300 active:bg-light-400 disabled:border-light-400 disabled:text-light-400 disabled:bg-transparent',
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
        'inline-flex items-center justify-center border transition-colors',
        sizeMap[size],
        variantMap[variant],
        avatar || rounded ? 'rounded-full' : 'rounded-button',
        className,
      )}
      type={Element === 'button' && type == null ? 'button' : type}
    >
      {avatar &&
        isValidElement<AvatarProps>(avatar) &&
        cloneElement(avatar, {
          size: avatarSize[size],
        })}

      {!avatar &&
        isValidElement<IconBaseProps>(children) &&
        cloneElement(children, {
          className: cn(iconSizeMap[size], children.props.className),
        })}
    </Element>
  ),
);

IconButton.displayName = 'IconButton';
