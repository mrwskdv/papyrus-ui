import cn from 'classnames';
import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  memo,
} from 'react';

import * as S from './radio.css';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const RadioComponent = forwardRef<HTMLInputElement, RadioProps>(
  ({ invalid, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(invalid && S.rootInvalid, className)}
      data-invalid={invalid}
      type="radio"
      {...props}
    />
  ),
);

RadioComponent.displayName = 'Radio';

export const Radio = memo(RadioComponent);
