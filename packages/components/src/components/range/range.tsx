import { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react';

export interface RangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  defaultValue?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Range = forwardRef<HTMLInputElement, RangeProps>((props, ref) => (
  <input ref={ref} type="range" {...props} />
));

Range.displayName = 'Range';
