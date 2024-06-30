import cn from 'classnames';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  LiHTMLAttributes,
  ReactElement,
} from 'react';

import { IconProps } from '../icon';
import { Text } from '../text';

import * as S from './option.css';

export interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: ReactElement;
  option?: unknown;
  selected?: boolean;
}

export const Option = forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      active,
      children,
      className,
      icon,
      disabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      option,
      selected,
      ...props
    },
    ref,
  ) => (
    <li
      ref={ref}
      aria-disabled={disabled}
      aria-selected={selected}
      className={cn(
        S.root,
        active && S.rootActive,
        selected && [S.rootSelected, active && S.rootSelectedActive],
        disabled && S.rootDisabled,
        className,
      )}
      role="option"
      {...props}
    >
      {isValidElement<IconProps>(icon) &&
        cloneElement(icon, {
          className: cn(
            S.icon,
            selected && S.iconSelected,
            disabled && S.iconDisabled,
            icon.props.className,
          ),
        })}

      <Text
        as="span"
        className={S.label}
        fontWeight={selected && !disabled ? 'semiBold' : 'regular'}
        mx={1.5}
        truncate
      >
        {children}
      </Text>
    </li>
  ),
);

Option.displayName = 'Option';
