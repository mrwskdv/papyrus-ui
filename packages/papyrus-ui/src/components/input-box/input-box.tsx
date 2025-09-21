import cn from 'classnames';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export type InputBoxSize = 'sm' | 'md' | 'lg';
export type InputBoxVariant = 'primary' | 'secondary';

export interface InputBoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content or elements to be rendered inside the input box.
   * This is where the actual input element or other components can be placed within the box.
   */
  children?: ReactNode;

  /**
   * If `true`, visually indicates that the input box is disabled by applying a disabled state style.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, indicates that the input box is in an invalid state. This is often used in conjunction with validation messages
   * to show visual cues (such as red borders) to indicate that the input is invalid.
   *
   * @default false
   */
  invalid?: boolean;

  /**
   * If `true`, visually indicates that the input box is in a read-only state by applying a read-only style.
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * If `true`, the input box will have a rounded appearance.
   *
   * @default false
   */
  rounded?: boolean;

  /**
   * Defines the size of the input box. This can be used to adjust the height of the input element.
   *
   * @default 'md'
   */
  size?: InputBoxSize;

  /**
   * Defines the visual variant of the input box.
   * - `primary`: White background with neutral border
   * - `secondary`: Black/10 background with transparent border
   *
   * @default 'primary'
   */
  variant?: InputBoxVariant;
}

const sizeMap: Record<InputBoxSize, string> = {
  sm: 'min-h-7 px-1.5 py-0.5',
  md: 'min-h-9 px-2 py-1.5',
  lg: 'min-h-11 px-2.5 py-3',
};

// Base styles that are always applied
const baseStyles = [
  'flex items-center',
  'outline outline-1',
  'transition-all',
  'overflow-hidden',
];

// Primary variant styles
const primaryVariantStyles = {
  interactive: [
    'outline-neutral-300',
    'bg-white',
    'cursor-text',
    'hover:outline-primary-500',
    'focus-within:outline-primary-500',
    'focus-within:ring-4',
  ],
  disabled: [
    'bg-neutral-50',
    'outline-neutral-200',
    'shadow-none',
    'cursor-default',
    'hover:outline-neutral-200',
  ],
  readOnly: ['bg-white', 'outline-neutral-300', 'shadow-none', 'cursor-text'],
};

// Secondary variant styles
const secondaryVariantStyles = {
  interactive: [
    'outline-transparent',
    'bg-black/10',
    'cursor-text',
    'hover:outline-primary-500',
    'focus-within:outline-primary-500',
    'focus-within:ring-4',
  ],
  disabled: [
    'bg-black/5',
    'outline-transparent',
    'shadow-none',
    'cursor-default',
    'hover:outline-transparent',
  ],
  readOnly: [
    'bg-black/10',
    'outline-transparent',
    'shadow-none',
    'cursor-text',
  ],
};

// Invalid state styles (same for both variants)
const invalidStyles = [
  'outline-danger-500',
  'hover:outline-danger-500',
  'focus-within:outline-danger-500',
  'focus-within:ring-4 focus-within:ring-danger-500/50',
];

export const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      invalid,
      size = 'md',
      variant = 'primary',
      className,
      disabled,
      readOnly,
      rounded,
      children,
      ...elementProps
    },
    ref,
  ) => {
    const variantStyles =
      variant === 'primary' ? primaryVariantStyles : secondaryVariantStyles;

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          !disabled && !readOnly && variantStyles.interactive,
          invalid && invalidStyles,
          disabled && variantStyles.disabled,
          readOnly && variantStyles.readOnly,
          sizeMap[size],
          rounded ? 'rounded-full' : 'rounded-input',
          className,
        )}
        {...elementProps}
      >
        {children}
      </div>
    );
  },
);

InputBox.displayName = 'InputBox';
