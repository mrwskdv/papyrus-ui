import cn from 'classnames';
import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  memo,
} from 'react';

import * as S from './range.css';

export interface RangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  defaultValue?: number;
  disabled?: boolean;
  invalid?: boolean;
  min?: number;
  max?: number;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const RangeComponent = forwardRef<HTMLInputElement, RangeProps>(
  ({ invalid, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(invalid && S.rootInvalid, className)}
      type="range"
      {...props}
    />
  ),
);

RangeComponent.displayName = 'Range';

export const Range = memo(RangeComponent);
