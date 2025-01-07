'use client';

import cn from 'classnames';
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  isValidElement,
  memo,
  OptionHTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
  SelectHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { BiChevronDown } from 'react-icons/bi';

import { useId } from '../../utils/use-id';
import { Box } from '../box';
import { Icon } from '../icon';
import { InputAction } from '../input-action';
import { InputBox, InputBoxSize } from '../input-box';
import { InputGroup } from '../input-group';

import * as S from './select.css';

export type SelectValue<IsMulti extends boolean> = IsMulti extends true
  ? readonly string[]
  : string | undefined;

export interface SelectProps<IsMulti extends boolean = false>
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'defaultValue' | 'size' | 'value' | 'onChange'
  > {
  /**
   * The default value of the uncontrolled input.
   * This is used when the component is uncontrolled and does not have a `value` prop.
   */
  defaultValue?: SelectValue<IsMulti>;

  /**
   * Optional description text for the input field, providing additional context or instructions for the user.
   * Appears above the input field to guide the user on the expected input.
   */
  description?: ReactNode;

  /**
   * Defines the number of visible options in the dropdown list.
   * Useful for controlling the size of the dropdown and how many options are visible without scrolling.
   */
  htmlSize?: number;

  /**
   * If `true`, the input element will have a validation error style.
   *
   * @default false
   */
  invalid?: boolean;

  /**
   * The label text for the input field. It is essential for accessibility to link the label with the input.
   */
  label?: ReactNode;

  /**
   * Message to display under the input, such as validation errors or hints.
   */
  message?: ReactNode;

  /**
   * If `true`, allows multiple values to be selected. For single selection (`IsMulti` is `false`), this is ignored.
   * If `true`, the `value` prop will be an array, and the `onChange` callback will return an array of selected values.
   *
   * @default false
   */
  multiple?: IsMulti;

  /**
   * Defines the size of the input box. This can be used to adjust the height of the input element.
   *
   * @default 'md'
   */
  size?: InputBoxSize;

  /**
   * A React element to be displayed at the start of the input field.
   */
  startIcon?: ReactElement;

  /**
   * A React element to be displayed at the end of the input field.
   */
  endIcon?: ReactElement;

  /**
   * The current value of the input. This prop is used to control the value of the input.
   * Use `onChange` to capture changes to the value.
   */
  value?: SelectValue<IsMulti>;

  /**
   * Callback function triggered when the value of the input changes.
   * The function receives the new value as its argument.
   */
  onChange?: (value: SelectValue<IsMulti>) => void;

  /**
   * The options for the select dropdown. These are typically provided as `<option>` elements.
   * This can be an array of `<option>` elements or any other components that render options for the user to select.
   */
  children?: ReactElement<OptionHTMLAttributes<HTMLOptionElement>, 'option'>[];
}

export interface SelectFn {
  <IsMulti extends boolean = false>(
    props: SelectProps<IsMulti> & RefAttributes<HTMLSelectElement>,
  ): ReactElement;
}

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  <IsMulti extends boolean = false>(
    {
      description,
      disabled,
      htmlSize,
      id,
      invalid,
      label,
      message,
      size = 'md',
      startIcon,
      endIcon,
      multiple,
      onChange,
      children,
      ...props
    }: SelectProps<IsMulti>,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const inputId = useId(id);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const nextValue = multiple
        ? Array.from(e.target.selectedOptions, (v) => v.value)
        : e.target.value;

      onChange?.(nextValue as SelectValue<IsMulti>);
    };

    return (
      <InputGroup
        description={description}
        htmlFor={inputId}
        invalid={invalid}
        label={label}
        message={message}
      >
        <InputBox disabled={disabled} invalid={invalid} size={size}>
          {isValidElement<IconBaseProps>(startIcon) && (
            <InputAction me={1}>{startIcon}</InputAction>
          )}

          <Box flex={1} position="relative">
            <select
              ref={ref}
              className={cn(
                S.input,
                multiple ? S.inputMultiple : S.inputSingle,
              )}
              disabled={disabled}
              multiple={multiple}
              size={htmlSize}
              onChange={handleChange}
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

          {isValidElement(endIcon) && (
            <InputAction ms={1}>{endIcon}</InputAction>
          )}
        </InputBox>
      </InputGroup>
    );
  },
);

SelectComponent.displayName = 'Select';

export const Select = memo(SelectComponent) as SelectFn;
