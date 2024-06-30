import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import * as S from './input-box.css';
export type InputBoxSize = 'sm' | 'md' | 'lg';

export interface InputBoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  size?: InputBoxSize;
  success?: boolean;
}

export const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      focused,
      invalid,
      size = 'md',
      success,
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
        S.rootSize[size],
        focused && S.rootFocused,
        invalid && [S.rootInvalid, focused && S.rootInvalidFocused],
        success && [S.rootSuccess, focused && S.rootSuccessFocused],
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
