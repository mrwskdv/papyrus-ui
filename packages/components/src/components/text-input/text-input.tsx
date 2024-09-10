'use client';

import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  memo,
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { BiX } from 'react-icons/bi';

import { useMergeRefs } from '../../utils/use-merge-refs';
import { Icon } from '../icon';
import { InputAction } from '../input-action';
import { InputBox, InputBoxSize } from '../input-box';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  clearable?: boolean;
  clearLabel?: string;
  htmlSize?: number;
  invalid?: boolean;
  size?: InputBoxSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  success?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      clearable,
      clearLabel = 'Clear',
      htmlSize,
      invalid,
      size,
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
    const [valueState, setValueState] = useState(
      () => defaultValue ?? value ?? '',
    );

    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRefs = useMergeRefs(ref, inputRef);

    const isClearable =
      clearable && !disabled && !readOnly && focused && valueState.length > 0;

    const changeValue = useCallback(
      (nextValue: string) => {
        setValueState(nextValue);
        onChange?.(nextValue);
      },
      [onChange],
    );

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
      },
      [changeValue],
    );

    const handleClear = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
        changeValue('');
      },
      [changeValue],
    );

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    useEffect(() => {
      if (typeof value !== 'undefined') {
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
        {isValidElement<IconBaseProps>(startIcon) && (
          <InputAction me={1}>{startIcon}</InputAction>
        )}

        <input
          ref={mergedRefs}
          disabled={disabled}
          readOnly={readOnly}
          size={htmlSize}
          type="text"
          value={valueState}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          {...props}
        />

        {isClearable && (
          <InputAction ms={1}>
            <Icon
              aria-label={clearLabel}
              color="neutral700"
              data-testid="clear-icon"
              fontSize="xl"
              interactive
              role="button"
              tabIndex={-1}
              onMouseDown={handleClear}
            >
              <BiX />
            </Icon>
          </InputAction>
        )}

        {isValidElement(endIcon) && <InputAction ms={1}>{endIcon}</InputAction>}
      </InputBox>
    );
  },
);

TextInputComponent.displayName = 'TextInput';

export const TextInput = memo(TextInputComponent);
