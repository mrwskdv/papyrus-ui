import { atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  ChangeEvent,
  Children,
  cloneElement,
  FC,
  FocusEventHandler,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { useId } from '../../utils/use-id';
import { Flex } from '../flex';
import { InputGroup } from '../input-group';
import { RadioProps } from '../radio';

export type RadioGroupDirection = 'row' | 'column';

export interface RadioGroupProps {
  /**
   * If `true`, the group container takes full width and each radio button fills the free space equally.
   * Used to display radio buttons in a row and make them fill the available space.
   *
   * @default false
   */
  block?: boolean;

  /**
   * The default value for the radio group.
   */
  defaultValue?: string;

  /**
   * Optional description text for the radio group.
   * Can be used to provide additional context or instructions for the group of radio buttons.
   */
  description?: ReactNode;

  /**
   * The direction of the radio group layout.
   * Can either be `'row'` for horizontal alignment or `'column'` for vertical alignment.
   *
   * @default 'column'
   */
  direction?: RadioGroupDirection;

  /**
   * If `true`, disables all radio buttons in the group, preventing user interaction.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, indicates that the radio group is invalid (e.g., due to validation errors).
   *
   * @default false
   */
  invalid?: boolean;

  /**
   * The label text for the radio group.
   */
  label?: ReactNode;

  /**
   * Message to display under the radio group, such as validation errors or hints.
   */
  message?: ReactNode;

  /**
   * The name attribute for the radio group.
   * This is used to group radio buttons together when submitting form data.
   */
  name?: string;

  /**
   * If `true`, the radio buttons in the group are read-only, preventing the user from making changes.
   *
   * @default false
   */
  readOnly?: boolean;

  /**
   * The current value of the radio group.
   */
  value?: string;

  /**
   * Callback function to be invoked when the value of the radio group changes.
   *
   * @param value - The new value of the radio group.
   */
  onChange?: (value: string) => void;

  /**
   * Callback function to handle focus events on the radio buttons.
   * This is triggered when one of radio buttons within the group is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function to handle blur events on the radio buttons.
   * This is triggered when one of radio buttons within the group loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;

  /**
   * The children of the RadioGroup, typically a list of Radio components.
   * Each child should be a `Radio` component, and the group should contain more then one radio buttons.
   */
  children?: ReactElement<RadioProps>[];
}

export const RadioGroup: FC<RadioGroupProps> = ({
  block = false,
  defaultValue,
  description,
  direction = 'row',
  disabled = false,
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
}) => {
  const [valueState, setValueState] = useState(() => value ?? defaultValue);
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

    const { value: inputValue } = e.target;
    setValueState(inputValue);
    onChange?.(inputValue);
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
        display={block ? 'flex' : 'inline-flex'}
        flexDirection={direction}
        flexWrap="wrap"
        mt="-1.5"
        mx="-2"
        role="group"
      >
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child, {
                name,
                checked: child.props.value === valueState,
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
};
