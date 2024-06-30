import { fadeInStyle, fadeStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useEffect } from 'react';

import { useTimeout } from '../../utils/use-timeout';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { Text } from '../text';
import { ToastVariant } from '../toast';

export type MessageVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The duration in milliseconds for which the message will be automatically
   * closed.
   */
  autoCloseTimeout?: number;

  /**
   * The variant or type of the message.
   */
  variant?: MessageVariant;

  /**
   * Determines whether the message is visible or not.
   */
  visible?: boolean;

  /**
   * Callback function to be executed when the message is being hidden.
   */
  onHide?: () => void;

  /**
   * Callback function to be executed after the message has been hidden.
   */
  onAfterHide?: () => void;
}

const iconByVariant: Record<ToastVariant, ReactNode> = {
  primary: <Icon color="primary400" fontSize="lg" name="info-circle" />,
  success: <Icon color="success400" fontSize="lg" name="check-circle" />,
  warning: <Icon color="warning400" fontSize="lg" name="error" />,
  danger: <Icon color="danger400" fontSize="lg" name="error-circle" />,
};

export const Message: FC<MessageProps> = ({
  autoCloseTimeout,
  className,
  children,
  role = 'alert',
  variant = 'primary',
  visible = true,
  onHide,
  onAfterHide,
  ...props
}) => {
  const { setTimeout } = useTimeout();

  useEffect(() => {
    if (autoCloseTimeout && onHide) {
      setTimeout(() => {
        onHide();
      }, autoCloseTimeout);
    }
  }, [autoCloseTimeout, onHide, setTimeout]);

  useEffect(() => {
    if (!visible && onAfterHide) {
      setTimeout(() => {
        onAfterHide();
      }, 200);
    }
  }, [onAfterHide, setTimeout, visible]);

  return (
    <Flex
      alignItems="center"
      border={1}
      borderColor="neutral100"
      className={cn(fadeStyle, visible && fadeInStyle, className)}
      display="inline-flex"
      maxWidth="xs"
      minWidth={40}
      px={3}
      py={1.5}
      role={role}
      rounded="lg"
      shadow="md"
      {...props}
    >
      {iconByVariant[variant]}
      <Text as="span" display="block" fontSize="sm" ms={1.5} truncate>
        {children}
      </Text>
    </Flex>
  );
};
