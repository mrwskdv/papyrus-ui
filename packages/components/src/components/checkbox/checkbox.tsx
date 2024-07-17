import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import * as S from './checkbox.css';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, children, ...props }, ref) => (
    <div className={className}>
      <input ref={ref} id={id} type="checkbox" {...props} />
      <label className={S.label} htmlFor={id}>
        {children}
      </label>
    </div>
  ),
);

Checkbox.displayName = 'Checkbox';
