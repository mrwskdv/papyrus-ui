/* eslint-disable jsx-a11y/no-autofocus */

'use client';

import {
  autoUpdate,
  size as sizeFn,
  flip,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  FloatingFocusManager,
  useClick,
  offset,
} from '@floating-ui/react';
import { fadeInStyle, fadeStyle } from '@papyrus-ui/styles';
import { useDebounceCallback } from '@react-hook/debounce';
import cn from 'classnames';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { BiCheck, BiX } from 'react-icons/bi';
import { Transition } from 'react-transition-group';

import { Maybe } from '../../types';
import { slug } from '../../utils/slug';
import { useMergeRefs } from '../../utils/use-merge-refs';
import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputAction } from '../input-action';
import { InputBox, InputBoxSize } from '../input-box';
import { OptionProps, Option } from '../option';
import { Tag } from '../tag';

export interface OptionComponentProps<OptionType> extends OptionProps {
  option: OptionType;
}

export type MaybeMultiValue<
  Value,
  IsMulti extends boolean,
> = IsMulti extends true ? Value[] : Value | null;

export interface AutocompleteProps<
  Value = unknown,
  IsMulti extends boolean = false,
> {
  /**
   * If `true`, the input element will be isFocused when the component is mounted.
   */
  autoFocus?: boolean;

  /**
   * Aria label for clear button.
   */
  clearLabel?: string;

  /**
   * Default value of the input element.
   */
  defaultValue?: MaybeMultiValue<Value, IsMulti>;

  /**
   * If `true`, the input element is disabled and can't be interacted with.
   */
  disabled?: boolean;

  /**
   * A function that takes an `option` and returns a string to use as the label
   * for that option.
   */
  getLabel?: (option: Value) => string;

  /**
   * ID attribute for the input element.
   */
  id?: string;

  /**
   * If `true`, the input element will have a validation error style.
   */
  invalid?: boolean;

  /**
   * If `true`, the loading label will be shown.
   */
  loading?: string;

  /**
   * Label to display when data is being loaded.
   */
  loadingLabel?: string;

  /**
   * If `true`, the component allows multiple values to be selected.
   */
  multiple?: IsMulti;

  /**
   * Name attribute for input element.
   */
  name?: string;

  /**
   * Feedback text shown when no options were provided.
   */
  noResultLabel?: string;

  /**
   * A component to render each option in the dropdown list.
   */
  OptionComponent?: FC<OptionComponentProps<Value>>;

  /**
   * Array of options to display in the dropdown list.
   */
  options?: Maybe<ReadonlyArray<Value>>;

  /**
   * Placeholder text to display in input element.
   */
  placeholder?: string;

  /**
   * If `true`, the input element is read-only and can't be interacted with.
   */
  readOnly?: boolean;

  /**
   * Ref passed to the input element.
   */
  ref?: Ref<HTMLInputElement>;

  /**
   * The amount of time to wait after the user stops typing before triggering
   * a search.
   */
  searchTimeout?: number;

  /**
   * The size of the autocomplete component.
   */
  size?: InputBoxSize;

  /**
   * icon to display at the start of the input element.
   */
  startIcon?: ReactElement;

  /**
   * icon to display at the end of the input element.
   */
  endIcon?: ReactElement;

  /**
   * If `true`, the input box will element a success style.
   */
  success?: boolean;

  /**
   * The current value of autocomplete component.
   */
  value?: MaybeMultiValue<Value, IsMulti>;

  /**
   * Callback function fired when the input element loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the value of autocomplete component changes.
   */
  onChange?: (value: MaybeMultiValue<Value, IsMulti>) => void;

  /**
   * Callback function fired when the input element receives focus.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the search query changes.
   */
  onSearch?: (query: string) => void | Promise<void>;
}

interface AutocompleteFn {
  <Value = unknown, IsMulti extends boolean = false>(
    props: AutocompleteProps<Value, IsMulti>,
  ): JSX.Element;
  displayName: 'Autocomplete';
}

export const LISTBOX_ID = 'listbox';

export const OPTION_ID = 'option';

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

const INITIAL_OFFSET_X = 5;

const INITIAL_OFFSET_Y = 7;

const ICON_OFFSET = 28;

const OPTION_HEIGHT = 2.5;

const LIST_PY = 0.25;

const MAX_OPTIONS = 10;

const offsetXBySizeMap: Record<InputBoxSize, number> = {
  sm: -6 - INITIAL_OFFSET_X,
  md: -8 - INITIAL_OFFSET_X,
  lg: -10 - INITIAL_OFFSET_X,
};

const offsetYBySizeMap: Record<InputBoxSize, number> = {
  sm: INITIAL_OFFSET_Y,
  md: 4 + INITIAL_OFFSET_Y,
  lg: 10 + INITIAL_OFFSET_Y,
};

function toInputValue<Value, IsMulti extends boolean>(
  value: Maybe<MaybeMultiValue<Value, IsMulti>>,
  getLabel: (value: Value) => string,
): string {
  if (value == null || Array.isArray(value)) {
    return '';
  }

  return getLabel(value as Value);
}

function toSelectedOptions<Value, IsMulti extends boolean>(
  value: MaybeMultiValue<Value, IsMulti> | undefined,
): Value[] {
  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value as Value[];
  }

  return [value] as Value[];
}

function toValue<Value, IsMulti extends boolean>(
  selectedOptions: Value[],
  multiple: IsMulti,
): MaybeMultiValue<Value, IsMulti> {
  return (
    multiple ? selectedOptions : selectedOptions[0] ?? null
  ) as MaybeMultiValue<Value, IsMulti>;
}

function toggleOption<Value>(value: Value, items: Value[]): Value[] {
  return items.includes(value)
    ? items.filter((item) => item !== value)
    : [...items, value];
}

export const Autocomplete = forwardRef(
  <Value = unknown, IsMulti extends boolean = false>(
    {
      autoFocus,
      clearLabel = 'Clear',
      defaultValue,
      disabled,
      getLabel = String,
      id,
      invalid,
      loading,
      loadingLabel = 'Loading...',
      multiple = false as IsMulti,
      name,
      noResultLabel = 'No result',
      OptionComponent = Option as FC<OptionComponentProps<Value>>,
      options,
      placeholder,
      readOnly,
      searchTimeout = 500,
      size = 'md',
      startIcon,
      endIcon,
      success,
      value,
      onBlur,
      onChange,
      onFocus,
      onSearch,
    }: AutocompleteProps<Value, IsMulti>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const [inputValue, setInputValue] = useState(() =>
      toInputValue(value ?? defaultValue, getLabel),
    );

    const [optionsState, setOptionsState] = useState<
      Maybe<ReadonlyArray<Value>>
    >(() => options);

    const [selectedOptions, setSelectedOptions] = useState<Value[]>(() =>
      toSelectedOptions(value ?? defaultValue),
    );

    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<Array<HTMLElement | null>>([]);
    const isControlled = typeof value !== 'undefined';

    const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
      middleware: [
        flip({ padding: 4 }),
        offset({
          mainAxis: offsetYBySizeMap[size],
          alignmentAxis: startIcon
            ? offsetXBySizeMap[size] - ICON_OFFSET
            : offsetXBySizeMap[size],
        }),
        sizeFn({
          apply({ availableHeight, elements }) {
            const { offsetWidth = 0 } = containerRef.current ?? {};
            const docCss = getComputedStyle(document.documentElement);
            const pxInRem = Number.parseFloat(docCss.fontSize);

            const defaultMaxHeight =
              (OPTION_HEIGHT * MAX_OPTIONS + LIST_PY) * pxInRem;

            const maxHeight = Math.min(defaultMaxHeight, availableHeight);

            Object.assign(elements.floating.style, {
              width: `${offsetWidth + 10}px`,
              maxHeight: `${maxHeight}px`,
            });
          },
          padding: 4,
        }),
      ],
      open: isOpen,
      placement: 'bottom-start',
      strategy: 'fixed',
      transform: false,
      whileElementsMounted: autoUpdate,
      onOpenChange: setIsOpen,
    });

    const role = useRole(context, { role: 'listbox' });

    const click = useClick(context, {
      enabled: !disabled && !readOnly,
    });

    const dismiss = useDismiss(context);

    const listNav = useListNavigation(context, {
      enabled: !disabled && !readOnly,
      listRef,
      activeIndex,
      onNavigate: setActiveIndex,
      virtual: true,
      loop: true,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([role, click, dismiss, listNav]);

    const mergedRefs = useMergeRefs(refs.setReference, ref);

    const changeValue = useCallback(
      (options: Value[]) => {
        if (isControlled) {
          const nextOptions = toValue(options, multiple);
          onChange?.(nextOptions);
        } else {
          setSelectedOptions(options);
        }
      },
      [isControlled, multiple, onChange],
    );

    const resetInputValue = useCallback(() => {
      const selectedValue = multiple ? selectedOptions : selectedOptions[0];
      const nextValue = toInputValue(selectedValue, getLabel);
      setInputValue(nextValue);
    }, [getLabel, multiple, selectedOptions]);

    const selectOption = useCallback(
      (index: number): void => {
        const option = optionsState?.[index];

        if (!option) {
          return;
        }

        const nextOptions = multiple
          ? toggleOption(option, selectedOptions)
          : [option];

        changeValue(nextOptions);
        setIsOpen(false);

        const element = refs.domReference.current;

        if (element) {
          element.focus();
          element.setSelectionRange(element.value.length, element.value.length);
        }
      },
      [changeValue, multiple, optionsState, refs.domReference, selectedOptions],
    );

    const filterOptions = useCallback(
      (nextQuery: string) => {
        if (!options) {
          return;
        }

        const filtered = nextQuery
          ? options.filter((item) =>
              getLabel(item).toLowerCase().includes(nextQuery.toLowerCase()),
            )
          : options;

        setOptionsState(filtered);
      },
      [getLabel, options],
    );

    const updateOptions = useDebounceCallback(async (nextQuery: string) => {
      if (onSearch) {
        await onSearch(nextQuery);
      } else {
        filterOptions(nextQuery);
      }
    }, searchTimeout);

    const handleInputFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setInputValue(nextValue);

        if (nextValue) {
          setIsOpen(true);
          setActiveIndex(0);
        } else if (!multiple) {
          changeValue([]);
        }
      },
      [changeValue, multiple],
    );

    const handleInputKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (
          e.key === 'Enter' &&
          activeIndex != null &&
          optionsState?.[activeIndex]
        ) {
          e.preventDefault();
          e.stopPropagation();
          selectOption(activeIndex);
          setActiveIndex(null);
        }
      },
      [activeIndex, optionsState, selectOption],
    );

    const handleInputBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        resetInputValue();
        onBlur?.(e);
      },
      [onBlur, resetInputValue],
    );

    const handleOptionClick = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const index = Number(e.currentTarget.dataset.index);

        if (!Number.isNaN(index)) {
          selectOption(index);
        }
      },
      [selectOption],
    );

    const handleClearMouseDown = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        changeValue([]);
        setInputValue('');
      },
      [changeValue],
    );

    const handleRemoveMouseDown = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const index = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(index)) {
          return;
        }

        const nextVal = [...selectedOptions];
        nextVal.splice(index, 1);
        changeValue(nextVal);
      },
      [changeValue, selectedOptions],
    );

    useEffect(() => {
      if (typeof value !== 'undefined') {
        const nextOptions = toSelectedOptions(value);
        setSelectedOptions(nextOptions);
      }
    }, [value]);

    useEffect(() => {
      if (options) {
        setOptionsState(options);
      }
    }, [options]);

    useEffect(() => {
      updateOptions(inputValue);
    }, [inputValue, updateOptions]);

    useEffect(() => {
      resetInputValue();
    }, [resetInputValue]);

    return (
      <>
        <InputBox
          ref={containerRef}
          disabled={disabled}
          focused={isFocused}
          invalid={invalid}
          readOnly={readOnly}
          size={size}
          success={success}
        >
          {isValidElement<IconBaseProps>(startIcon) && (
            <InputAction me={1}>{startIcon}</InputAction>
          )}

          <Flex as="span" flex={1} flexWrap="wrap" mt="-1" mx="-0.5">
            {multiple &&
              selectedOptions.map((item, idx) => (
                <Box key={idx} as="span" display="block" mt={1} px={0.5}>
                  <Tag
                    bg={disabled ? 'neutral100' : 'primary100'}
                    borderColor={disabled ? 'neutral200' : 'primary300'}
                    color={disabled ? 'neutral300' : 'neutral900'}
                    data-index={idx}
                    disabled={disabled || readOnly}
                    removable
                    tabIndex={-1}
                    onMouseDown={handleRemoveMouseDown}
                  >
                    {getLabel(item)}
                  </Tag>
                </Box>
              ))}

            {(!multiple ||
              selectedOptions.length === 0 ||
              (!disabled && !readOnly)) && (
              <Box as="span" display="block" mt={1} px={0.5} width="full">
                <input
                  aria-activedescendant={
                    activeIndex != null ? slug(id, OPTION_ID, activeIndex) : ''
                  }
                  aria-autocomplete="list"
                  aria-controls={isOpen ? slug(id, LISTBOX_ID) : ''}
                  aria-invalid={invalid}
                  aria-owns={isOpen ? slug(id, LISTBOX_ID) : ''}
                  autoComplete="off"
                  autoFocus={autoFocus}
                  disabled={disabled}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  readOnly={readOnly}
                  type="text"
                  {...getReferenceProps({
                    ref: mergedRefs,
                    value: inputValue,
                    onFocus: handleInputFocus,
                    onBlur: handleInputBlur,
                    onChange: handleInputChange,
                    onKeyDown: handleInputKeyDown,
                  })}
                />
              </Box>
            )}
          </Flex>

          {!disabled &&
            !readOnly &&
            isFocused &&
            (inputValue.length > 0 || selectedOptions.length > 0) && (
              <InputAction ms={1}>
                <Icon
                  aria-label={clearLabel}
                  color="neutral700"
                  fontSize="lg"
                  interactive
                  role="button"
                  tabIndex={-1}
                  onMouseDown={handleClearMouseDown}
                >
                  <BiX />
                </Icon>
              </InputAction>
            )}

          {isValidElement(endIcon) && (
            <InputAction ms={1}>{endIcon}</InputAction>
          )}
        </InputBox>

        <Transition
          in={isOpen}
          mountOnEnter
          timeout={TRANSITION_TIMEOUT}
          unmountOnExit
        >
          {(status) => (
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              modal={false}
            >
              <Flex
                ref={refs.setFloating}
                as="ul"
                bg="white"
                border={1}
                borderColor="neutral100"
                className={cn(fadeStyle, status === 'entered' && fadeInStyle)}
                flexDirection="column"
                id={slug(id, LISTBOX_ID)}
                overflowX="hidden"
                overflowY="auto"
                py={0.5}
                rounded="lg"
                shadow="lg"
                style={floatingStyles}
                zIndex={40}
                {...getFloatingProps()}
              >
                {!optionsState && loading && (
                  <Option disabled role="none">
                    {loadingLabel}
                  </Option>
                )}

                {optionsState && optionsState.length === 0 && (
                  <Option disabled role="none">
                    {noResultLabel}
                  </Option>
                )}

                {optionsState?.map((item, idx) => {
                  const isSelected = selectedOptions.includes(item);
                  return (
                    <OptionComponent
                      key={idx}
                      active={idx === activeIndex}
                      data-index={idx}
                      endIcon={
                        isSelected ? (
                          <Icon color="primary500">
                            <BiCheck />
                          </Icon>
                        ) : undefined
                      }
                      id={slug(id, OPTION_ID, idx)}
                      option={item}
                      selected={isSelected}
                      {...getItemProps({
                        ref: (node) => {
                          listRef.current[idx] = node;
                        },
                        onClick: handleOptionClick,
                      })}
                    >
                      {getLabel(item)}
                    </OptionComponent>
                  );
                })}
              </Flex>
            </FloatingFocusManager>
          )}
        </Transition>
      </>
    );
  },
) as AutocompleteFn;

Autocomplete.displayName = 'Autocomplete';
