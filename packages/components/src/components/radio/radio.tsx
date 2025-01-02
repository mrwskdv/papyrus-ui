import cn from 'classnames';
import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { Box } from '../box';
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
          type="radio"
        />
      </Box>
      <Text as="span" className={S.label} ms={2}>
        {children}
      </Text>
    </label>
  ),
);

Radio.displayName = 'Radio';
