import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { AvatarProps } from '../avatar';

import * as S from './icon-button.css';
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
  as?: React.ElementType;

  /**
   * Specifies the avatar element to be rendered within the icon-button.
   */
  avatar?: React.ReactElement;

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
  children?: React.ReactElement;
}

const avatarSize: Record<IconButtonSize, AvatarProps['size']> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
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
        S.root,
        S.rootVariant[variant],
        S.rootSize[size],
        (avatar || rounded) && S.rootRounded,
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
          className: cn(S.iconSize[size], children.props.className),
        })}
    </Element>
  ),
);

IconButton.displayName = 'IconButton';
