import cn from 'classnames';
import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { Box } from '../box';
import { Text } from '../text';

import * as S from './checkbox.css';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, disabled, readOnly, children, ...props }, ref) => (
    <label
      className={cn(
        S.root,
        (disabled || readOnly) && S.rootDisabled,
        className,
      )}
    >
      <Box as="span" py={1}>
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          type="checkbox"
        />
      </Box>
      <Text
        as="span"
        className={S.label}
        fontVariant="primary"
        ms={2}
        size="md"
      >
        {children}
      </Text>
    </label>
  ),
);

Checkbox.displayName = 'Checkbox';
