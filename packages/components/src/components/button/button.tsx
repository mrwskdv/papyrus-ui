import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactNode,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Loader } from '../loader';

import * as S from './button.css';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'plain'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  /**
   * Specifies the element type to be used for rendering the button.
   */
  as?: ElementType;

  /**
   * If `true`, the button will take the full width of its container.
   */
  block?: boolean;
  /**
   * The content of the button.
   */
  children?: ReactNode;

  /**
   * If `true`, the button will be disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the button will show a loading indicator.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * If `true`, the button will have a rounded appearance.
   *
   * @default false
   */
  rounded?: boolean;

  /**
   * The size of the button.
   *
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * The icon to be displayed at the start of the button.
   */
  startIcon?: ReactNode;

  /**
   * The icon to be displayed at the end of the button.
   */
  endIcon?: ReactNode;

  /**
   * The visual variant of the button.
   */
  variant?: ButtonVariant;
}

const sizeMap: Record<ButtonSize, string> = {
  sm: 'min-w-24 h-7 px-2',
  md: 'min-w-28 h-9 px-3',
  lg: 'min-w-36 h-12 px-4',
};

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: Element = 'button',
      block = false,
      rounded = false,
      size = 'md',
      startIcon,
      endIcon,
      type,
      variant = 'primary',
      loading = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Element
      ref={ref}
      className={cn(
        S.root,
        S.rootVariant[variant],
        sizeMap[size],
        block && 'w-full',
        rounded ? 'rounded-full' : 'rounded-md',
        className,
      )}
      type={Element === 'button' && type == null ? 'button' : type}
      {...props}
    >
      {loading && <Loader className="font-size-lg" />}

      {!loading &&
        isValidElement<IconBaseProps>(startIcon) &&
        cloneElement(startIcon, {
          className: cn('text-lg leading-none me-2', startIcon.props.className),
        })}

      {!loading && <span className={cn(S.label, 'truncate')}>{children}</span>}

      {!loading &&
        isValidElement<IconBaseProps>(endIcon) &&
        cloneElement(endIcon, {
          className: cn('text-lg leading-none ms-2', endIcon.props.className),
        })}
    </Element>
  ),
);

Button.displayName = 'Button';
