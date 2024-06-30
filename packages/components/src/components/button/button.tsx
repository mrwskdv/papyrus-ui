import { atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  memo,
  ReactNode,
} from 'react';

import { Icon, IconProps } from '../icon';
import { Text } from '../text';

import * as S from './button.css';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'tertiary'
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

const ButtonComponent = forwardRef<HTMLElement, ButtonProps>(
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
        atoms({
          rounded: rounded ? 'full' : 'md',
        }),
        className,
      )}
      type={As === 'button' && type == null ? 'button' : type}
      {...props}
    >
      {loading && (
        <Icon
          animation="spin"
          color="currentColor"
          fontSize="lg"
          name="loader"
        />
      )}

      {!loading &&
        isValidElement<IconProps>(startIcon) &&
        cloneElement(startIcon, {
          fontSize: 'lg',
          me: 2,
        })}

      {!loading && (
        <Text
          as="span"
          display="inline-block"
          fontSize="sm"
          letterSpacing="widest"
          lineHeight="none"
          textTransform="uppercase"
          truncate
        >
          {children}
        </Text>
      )}

      {!loading &&
        isValidElement<IconProps>(endIcon) &&
        cloneElement(endIcon, {
          fontSize: 'lg',
          ms: 2,
        })}
    </As>
  ),
);

ButtonComponent.displayName = 'Button';

export const Button = memo(ButtonComponent);
