import { truncateStyle } from '@papyrus-ui/style-utils';
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
  as?: ElementType;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: As = 'button',
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
    <As
      ref={ref}
      className={cn(
        S.root,
        S.rootSize[size],
        S.rootVariant[variant],
        block && S.rootBlock,
        rounded && S.rootRounded,
        className,
      )}
      type={As === 'button' && type == null ? 'button' : type}
      {...props}
    >
      {loading && <Loader fontSize="lg" />}

      {!loading &&
        isValidElement<IconBaseProps>(startIcon) &&
        cloneElement(startIcon, {
          className: cn(S.icon, S.startIcon, startIcon.props.className),
        })}

      {!loading && (
        <span className={cn(S.label, truncateStyle)}>{children}</span>
      )}

      {!loading &&
        isValidElement<IconBaseProps>(endIcon) &&
        cloneElement(endIcon, {
          className: cn(S.icon, S.endIcon, endIcon.props.className),
        })}
    </As>
  ),
);

Button.displayName = 'Button';
