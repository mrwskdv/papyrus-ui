import { Atoms, MarginAtoms } from '@papyrus-ui/styles';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { Text } from '../text';

export type InputMessageVariant =
  | 'primary'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success';

export interface InputMessageProps
  extends MarginAtoms,
    HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the message.
   * Controls the visual style of the message (e.g., error, success, info).
   *
   * @default 'primary'
   */
  variant?: InputMessageVariant;

  /**
   * The content to display inside the message.
   * This can be any valid React node (e.g., string, JSX elements).
   */
  children?: ReactNode;
}

const colorByVariantMap: Record<InputMessageVariant, Atoms['color']> = {
  primary: 'neutral500',
  info: 'info500',
  danger: 'danger500',
  warning: 'warning500',
  success: 'success500',
};

export const InputMessage = forwardRef<HTMLDivElement, InputMessageProps>(
  ({ variant = 'primary', children, ...props }, ref) => (
    <Text
      {...props}
      ref={ref}
      as="div"
      color={colorByVariantMap[variant]}
      size="sm"
    >
      {children}
    </Text>
  ),
);

InputMessage.displayName = 'InputMessage';
