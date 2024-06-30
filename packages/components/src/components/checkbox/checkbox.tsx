import cn from 'classnames';
import { forwardRef, memo } from 'react';

import * as S from './checkbox.css';
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ invalid, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(invalid && S.rootInvalid, className)}
      type="checkbox"
      {...props}
    />
  ),
);

CheckboxComponent.displayName = 'Checkbox';

export const Checkbox = memo(CheckboxComponent);
