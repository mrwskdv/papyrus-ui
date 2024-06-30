'use client';

import {
  cloneElement,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { NumericFormat, NumberFormatValues } from 'react-number-format';

import { IconProps } from '../icon';
import { InputAction } from '../input-action';
import { InputBox, InputBoxSize } from '../input-box';

export type NumericValue = number | null;

export interface NumericInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'size' | 'type' | 'value' | 'onChange'
  > {
  allowLeadingZeros?: boolean;
  allowNegative?: boolean;
  allowedDecimalSeparators?: string[];
  decimalScale?: number;
  decimalSeparator?: string;
  defaultValue?: NumericValue;
  fixedDecimalScale?: boolean;
  isAllowed?: (values: NumberFormatValues) => boolean;
  prefix?: string;
  size?: InputBoxSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  success?: boolean;
  invalid?: boolean;
  suffix?: string;
  thousandSeparator?: boolean | string;
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
  value?: NumericValue;
  onChange?: (value: NumericValue) => void;
}

export const NumericInputComponent = forwardRef<
  HTMLInputElement,
  NumericInputProps
>(
  (
    {
      invalid = false,
      size = 'md',
      startIcon,
      endIcon,
      success,
      defaultValue,
      disabled,
      readOnly,
      value,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [valueState, setValueState] = useState<NumericValue>(
      value ?? defaultValue ?? null,
    );

    const [focused, setFocused] = useState(false);
    const inputValue = valueState ?? '';

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleValueChange = useCallback(
      ({ floatValue }: NumberFormatValues) => {
        onChange?.(floatValue ?? null);
      },
      [onChange],
    );

    useEffect(() => {
      if (value !== undefined) {
        setValueState(value);
      }
    }, [value]);

    return (
      <InputBox
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        readOnly={readOnly}
        size={size}
        success={success}
      >
        {isValidElement<IconProps>(startIcon) && (
          <InputAction me={1}>
            {cloneElement(startIcon, { fontSize: 'lg' })}
          </InputAction>
        )}

        <NumericFormat
          disabled={disabled}
          getInputRef={ref}
          readOnly={readOnly}
          value={inputValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onValueChange={handleValueChange}
          {...props}
        />

        {isValidElement<IconProps>(endIcon) && (
          <InputAction ms={1}>
            {cloneElement(endIcon, { fontSize: 'lg' })}
          </InputAction>
        )}
      </InputBox>
    );
  },
);

NumericInputComponent.displayName = 'NumericInput';

export const NumericInput = memo(NumericInputComponent);
