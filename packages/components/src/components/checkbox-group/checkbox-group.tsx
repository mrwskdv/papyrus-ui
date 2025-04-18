import { atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  ChangeEvent,
  Children,
  cloneElement,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { useId } from '../../utils/use-id';
import { CheckboxProps } from '../checkbox';
import { Flex } from '../flex';
import { InputGroup } from '../input-group';

export type CheckboxGroupDirection = 'row' | 'column';

export interface CheckboxGroupProps<T extends boolean | Array<string>> {
  /**
   * If `true`, the group container takes full width and each checkbox fills the free space equally.
   * Used to display checkboxes in a row and make them fill the available space.
   *
   * @default false
   */
  block?: boolean;

  /**
   * The default value for the checkbox group.
   * For a single checkbox, this is a boolean (`true` or `false`).
   * For multiple checkboxes, this is an array of strings representing the selected values.
   */
  defaultValue?: T;

  /**
   * Optional description text for the input field, providing additional context or instructions for the user.
   * Appears above the input field to guide the user on the expected input.
   */
  description?: ReactNode;

  /**
   * The direction of the checkbox group layout.
   * Can either be `'row'` for horizontal alignment or `'column'` for vertical alignment.
   *
   * @default 'column'
   */
  direction?: CheckboxGroupDirection;

  /**
   * If `true`, disables all checkboxes in the group, preventing user interaction.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, renders the message text as an error message. Otherwise, renders it as a hint.
   *
   * @default false
   */
  invalid?: boolean;

  /**
   * The label text for the checkbox group.
   */
  label?: ReactNode;

  /**
   * Message to display under the checkbox group, such as validation errors or hints.
   */
  message?: ReactNode;

  /**
   * The name attribute for the checkbox group.
   * This is used to group checkboxes together when submitting form data.
   */
  name?: string;

  /**
   * If `true`, the checkboxes in the group are read-only, preventing the user from making changes.
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * The current value of the checkbox group.
   * For a single checkbox, this is a boolean (`true` or `false`).
   * For multiple checkboxes, this is an array of strings representing the selected values.
   */
  value?: T;

  /**
   * Callback function to be invoked when the value of the checkbox group changes.
   *
   * @param value - The new value of the checkbox group, either a boolean or an array of selected values.
   */
  onChange?: (value: T) => void;

  /**
   * Callback function to handle focus events on the checkboxes.
   * This is triggered when one of checkboxes within the group is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function to handle blur events on the checkboxes.
   * This is triggered when one of checkboxes within the group loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;

  /**
   * The children of the CheckboxGroup, typically a list of Checkbox components.
   * Each child should be a `Checkbox` component, and the group can contain one or more checkboxes.
   */
  children?: ReactNode;
}

export const CheckboxGroup = forwardRef(
  <T extends boolean | Array<string>>(
    {
      block = false,
      defaultValue,
      description,
      direction = 'row',
      disabled,
      invalid = false,
      label,
      message,
      name,
      readOnly = false,
      value,
      onChange,
      onBlur,
      onFocus,
      children,
    }: CheckboxGroupProps<T>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [valueState, setValueState] = useState<T>(
      () => value ?? defaultValue ?? ([] as Array<string> as T),
    );

    const labelId = useId();

    useEffect(() => {
      if (typeof value !== 'undefined') {
        setValueState(value);
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly || e.target.disabled || e.target.readOnly) {
        return;
      }

      let nextValue: boolean | Array<string>;

      if (Array.isArray(valueState)) {
        const { value: inputValue } = e.target;

        if (valueState.includes(inputValue)) {
          nextValue = valueState.filter((item) => item !== inputValue);
        } else {
          nextValue = [...valueState, inputValue];
        }
      } else {
        nextValue = !valueState;
      }

      setValueState(nextValue as T);
      onChange?.(nextValue as T);
    };

    return (
      <InputGroup
        description={description}
        id={labelId}
        invalid={invalid}
        label={label}
        message={message}
      >
        <Flex
          aria-labelledby={labelId}
          direction={direction}
          display={block ? 'flex' : 'inline-flex'}
          mt="-1.5"
          mx="-2"
          role="group"
          wrap="wrap"
        >
          {Children.map(children, (child, idx) =>
            isValidElement<CheckboxProps>(child)
              ? cloneElement(child, {
                  ref: idx === Children.count(children) - 1 ? ref : undefined,
                  name,
                  checked: Array.isArray(valueState)
                    ? valueState.includes(child.props.value)
                    : Boolean(valueState),
                  className: cn(
                    atoms({
                      flex: block ? 1 : 'none',
                      mt: 1.5,
                      px: 2,
                    }),
                    child.props.className,
                  ),
                  disabled: disabled || child.props.disabled,
                  readOnly: readOnly || child.props.readOnly,
                  onChange: handleChange,
                  onFocus,
                  onBlur,
                })
              : child,
          )}
        </Flex>
      </InputGroup>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
