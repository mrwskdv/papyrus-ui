import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { Text } from '../text';

import * as S from './radio.css';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, id, children, ...props }, ref) => (
    <div className={className}>
      <input ref={ref} id={id} type="radio" {...props} />
      <Text as="label" className={S.label} htmlFor={id}>
        {children}
      </Text>
    </div>
  ),
);

Radio.displayName = 'Radio';
