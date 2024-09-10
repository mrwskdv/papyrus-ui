'use client';

import cn from 'classnames';
import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  isValidElement,
  memo,
  ReactElement,
  ReactNode,
  RefAttributes,
  SelectHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { BiChevronDown } from 'react-icons/bi';

import { Box } from '../box';
import { Icon } from '../icon';
import { InputAction } from '../input-action';
import { InputBox, InputBoxSize } from '../input-box';

import * as S from './select.css';

export type SelectValue<IsMulti extends boolean> = IsMulti extends true
  ? readonly string[]
  : string | undefined;

export interface SelectProps<IsMulti extends boolean = false>
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'defaultValue' | 'size' | 'value' | 'onChange'
  > {
  htmlSize?: number;
  invalid?: boolean;
  size?: InputBoxSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  success?: boolean;
  defaultValue?: SelectValue<IsMulti>;
  disabled?: boolean;
  multiple?: IsMulti;
  value?: SelectValue<IsMulti>;
  onChange?: (value: SelectValue<IsMulti>) => void;
  children?: ReactNode;
}

export interface SelectFn {
  <IsMulti extends boolean = false>(
    props: SelectProps<IsMulti> & RefAttributes<HTMLSelectElement>,
  ): ReactElement;
}

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  <IsMulti extends boolean = false>(
    {
      htmlSize,
      invalid,
      size = 'md',
      startIcon,
      endIcon,
      success,
      disabled,
      multiple,
      onChange,
      onFocus,
      onBlur,
      children,
      ...props
    }: SelectProps<IsMulti>,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const [focused, setFocused] = useState(false);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        const nextValue = multiple
          ? Array.from(e.target.selectedOptions, (v) => v.value)
          : e.target.value;

        onChange?.(nextValue as SelectValue<IsMulti>);
      },
      [multiple, onChange],
    );

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLSelectElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLSelectElement>) => {
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
        size={size}
        success={success}
      >
        {isValidElement<IconBaseProps>(startIcon) && (
          <InputAction me={1}>{startIcon}</InputAction>
        )}

        <Box flex={1} position="relative">
          <select
            ref={ref}
            className={cn(S.input, multiple ? S.inputMultiple : S.inputSingle)}
            disabled={disabled}
            multiple={multiple}
            size={htmlSize}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            {...props}
          >
            {children}
          </select>

          {!multiple && (
            <InputAction className={S.endAction}>
              <Icon color={disabled ? 'neutral300' : 'neutral900'}>
                <BiChevronDown />
              </Icon>
            </InputAction>
          )}
        </Box>

        {isValidElement(endIcon) && <InputAction ms={1}>{endIcon}</InputAction>}
      </InputBox>
    );
  },
);

SelectComponent.displayName = 'Select';

export const Select = memo(SelectComponent) as SelectFn;
