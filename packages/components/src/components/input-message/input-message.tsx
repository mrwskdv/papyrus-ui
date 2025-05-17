import { MarginAtoms } from '@papyrus-ui/style-utils';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { Text } from '../text';

export interface InputMessageProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'role' | 'size'> {
  /**
   * If `true`, render message text as an error message, otherwise renders it as a hint.
   *
   * @default false
   */
  invalid?: boolean;
  /**
   * Message to display under an input, such as validation errors or hints.
   */
  children?: ReactNode;
}

export const InputMessage = forwardRef<HTMLDivElement, InputMessageProps>(
  ({ invalid, children, ...props }, ref) => (
    <Text
      {...props}
      ref={ref}
      as="div"
      color={invalid ? 'danger500' : 'neutral500'}
      role={invalid ? 'alert' : 'status'}
      size="sm"
    >
      {children}
    </Text>
  ),
);

InputMessage.displayName = 'InputMessage';
