'use client';

import { forwardRef, isValidElement, memo, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { InputAction } from '../input-action';
import { InputBox, InputBoxSize } from '../input-box';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  size?: InputBoxSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  success?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
}

const TextareaComponent: React.FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      invalid,
      size,
      startIcon,
      endIcon,
      success,
      disabled,
      readOnly,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(true);

        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    return (
      <InputBox
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        readOnly={readOnly}
        size={size}
        success={success}
      >
        {isValidElement<IconBaseProps>(startIcon) && (
          <InputAction me={1}>{startIcon}</InputAction>
        )}

        <textarea
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...props}
        />

        {isValidElement(endIcon) && <InputAction ms={1}>{endIcon}</InputAction>}
      </InputBox>
    );
  },
);

TextareaComponent.displayName = 'Textarea';

export const Textarea = memo(TextareaComponent);
