import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import * as S from './input-box.css';

export type InputBoxSize = 'sm' | 'md' | 'lg';

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
   * Defines the size of the input box. This can be used to adjust the height of the input element.
   *
   * @default 'md'
   */
  size?: InputBoxSize;
}

const sizeMap: Record<InputBoxSize, string> = {
  sm: 'min-h-7 px-1.5 py-0.5',
  md: 'min-h-9 px-2 py-1.5',
  lg: 'min-h-11 px-2.5 py-3',
};

export const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      invalid,
      size = 'md',
      className,
      disabled,
      readOnly,
      children,
      ...elementProps
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        S.root,
        sizeMap[size],
        invalid && S.rootInvalid,
        disabled && S.rootDisabled,
        readOnly && S.rootReadonly,
        className,
      )}
      {...elementProps}
    >
      {children}
    </div>
  ),
);

InputBox.displayName = 'InputBox';
