import cn from 'classnames';
import { forwardRef } from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react';

import { Icon } from '../icon';
import { Loader } from '../loader';

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
  sm: 'min-w-20 h-7 px-2',
  md: 'min-w-24 h-9 px-3',
  lg: 'min-w-32 h-12 px-4',
};

// Base styles that are always applied
const baseStyles = [
  'inline-flex items-center justify-center',
  'border border-solid',
  'transition-all',
  'gap-1.5',
  'focus-visible:ring',
];

// Variant styles
const variantStyles = {
  primary: [
    'border-transparent',
    'text-white',
    'bg-primary-600',
    'shadow-sm',
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
    'disabled:opacity-disabled disabled:text-neutral-950 disabled:bg-black/10',
  ],
  tertiary: [
    'border-transparent',
    'text-neutral-950',
    'bg-black/10',
    'hover:bg-black/20',
    'active:bg-black/30',
    'disabled:opacity-disabled disabled:bg-black/10',
  ],
  plain: [
    'border-transparent',
    'text-neutral-950',
    'hover:bg-black/10',
    'active:bg-black/20',
    'disabled:opacity-disabled disabled:bg-transparent',
  ],
  info: [
    'border-transparent',
    'text-white',
    'bg-info-600',
    'shadow-sm',
    'hover:bg-info-500',
    'active:bg-info-700',
    'disabled:bg-neutral-300',
  ],
  success: [
    'border-transparent',
    'text-white',
    'bg-success-600',
    'shadow-sm',
    'hover:bg-success-500',
    'active:bg-success-700',
    'disabled:bg-neutral-300',
  ],
  warning: [
    'border-transparent',
    'text-white',
    'bg-warning-600',
    'shadow-sm',
    'hover:bg-warning-500',
    'active:bg-warning-700',
    'disabled:bg-neutral-300',
  ],
  danger: [
    'border-transparent',
    'text-white',
    'bg-danger-600',
    'shadow-sm',
    'hover:bg-danger-500',
    'active:bg-danger-700',
    'disabled:bg-neutral-300',
  ],
  ghost: [
    'border-white/80',
    'text-white',
    'hover:bg-white/30',
    'active:bg-white/40',
    'disabled:opacity-disabled disabled:bg-transparent',
  ],
};

// Label styles
const labelStyles = ['font-sans', 'inline-block', 'text-button', 'truncate'];

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
        baseStyles,
        variantStyles[variant],
        sizeMap[size],
        block && 'w-full',
        rounded ? 'rounded-full' : 'rounded-input',
        className,
      )}
      type={Element === 'button' && type == null ? 'button' : type}
      {...props}
    >
      {loading && <Loader className='text-lg' />}

      {!loading && startIcon && <Icon className='text-lg'>{startIcon}</Icon>}

      {!loading && <span className={cn(labelStyles)}>{children}</span>}

      {!loading && endIcon && <Icon className='text-lg'>{endIcon}</Icon>}
    </Element>
  ),
);

Button.displayName = 'Button';
