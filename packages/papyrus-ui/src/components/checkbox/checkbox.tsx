import cn from 'classnames';
import { forwardRef } from 'react';
import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';

import { Text } from '../text';

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
        'inline-flex items-baseline gap-2',
        disabled || readOnly ? 'cursor-default' : 'pointer',
        className,
      )}
    >
      <span className={children ? 'py-1' : ''}>
        <input
          {...props}
          ref={ref}
          className='checkbox-input'
          disabled={disabled}
          readOnly={readOnly}
          type='checkbox'
        />
      </span>
      {children && (
        <Text as='span' className='flex-1'>
          {children}
        </Text>
      )}
    </label>
  ),
);

Checkbox.displayName = 'Checkbox';
