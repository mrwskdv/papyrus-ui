import cn from 'classnames';
import {
  ChangeEventHandler,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { Text } from '../text';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, disabled, readOnly, children, ...props }, ref) => (
    <label
      className={cn(
        'inline-flex items-baseline gap-x-2',
        disabled || readOnly ? 'cursor-default' : 'pointer',
        className,
      )}
    >
      <span className={children ? 'py-1' : ''}>
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          type="radio"
        />
      </span>
      {children && (
        <Text as="span" className="flex-1">
          {children}
        </Text>
      )}
    </label>
  ),
);

Radio.displayName = 'Radio';
