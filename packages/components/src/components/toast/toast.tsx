'use client';

import { fadeInStyle, fadeStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';

import { useTimeout } from '../../utils/use-timeout';
import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import { Icon, IconProps } from '../icon';
import { IconButton } from '../icon-button';
import { Text } from '../text';

import * as S from './toast.css';

export type ToastVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Label text for the action button.
   */
  actionLabel?: string;

  /**
   * Specifies the duration (in milliseconds) after which the toast automatically closes if set.
   */
  autoHideDuration?: number;

  /**
   * Secondary content of the toast component.
   */
  children?: ReactNode;

  /**
   * Aria label for close button.
   */
  dismissLabel?: string;

  /**
   * Represents the icon of the toast component.
   */
  icon?: ReactElement;

  /**
   * Primary content of the toast component.
   */
  message: string;

  /**
   * Determines the visual style or variant of the toast component.
   */
  variant?: ToastVariant;

  /**
   * Indicates whether the toast component is currently visible or not.
   */
  visible?: boolean;

  /**
   * A callback function triggered on the action button click.
   */
  onActionClick?: () => void;

  /**
   * A callback function triggered when the toast is closed manually.
   */
  onDismiss?: () => void;

  /**
   * A callback function triggered when the toast is closed automatically after timeout.
   */
  onHide?: () => void;

  /**
   * A callback function triggered after the hide animation has finished.
   */
  onAfterHide?: () => void;
}

const iconByVariant: Record<ToastVariant, string> = {
  primary: 'info-circle',
  danger: 'error-circle',
  warning: 'error',
  success: 'check-circle',
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      actionLabel,
      autoHideDuration,
      children,
      className,
      dismissLabel = 'Dismiss',
      icon,
      message,
      role = 'alert',
      visible = true,
      variant = 'primary',
      onActionClick,
      onDismiss,
      onHide,
      onAfterHide,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const { setTimeout, clearTimeout } = useTimeout();

    const defferAutoHide = useCallback(() => {
      setTimeout(() => {
        onHide?.();
      }, autoHideDuration);
    }, [autoHideDuration, onHide, setTimeout]);

    const handleMouseEnter = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        clearTimeout();
        onMouseEnter?.(e);
      },
      [clearTimeout, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        defferAutoHide();
        onMouseLeave?.(e);
      },
      [defferAutoHide, onMouseLeave],
    );

    useEffect(() => {
      defferAutoHide();
    }, [defferAutoHide]);

    useEffect(() => {
      if (!visible && onAfterHide) {
        setTimeout(() => {
          onAfterHide();
        }, 200);
      }
    }, [onAfterHide, setTimeout, visible]);

    return (
      <div
        ref={ref}
        className={cn(
          S.root,
          S.rootVariant[variant],
          fadeStyle,
          visible && fadeInStyle,
          className,
        )}
        role={role}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <Flex alignItems="center" mx="-1.5">
          <Box lineHeight="none" px={1.5}>
            {isValidElement<IconProps>(icon) ? (
              cloneElement(icon, {
                color: 'white',
                fontSize: '4xl',
              })
            ) : (
              <Icon
                color="white"
                fontSize="4xl"
                name={iconByVariant[variant]}
              />
            )}
          </Box>

          <Box flex={1} lineHeight="none" overflow="hidden" px={1.5}>
            <Text
              as="div"
              color="white"
              fontSize="md"
              fontWeight="semiBold"
              letterSpacing="wider"
              lineHeight="snug"
              truncate
            >
              {message}
            </Text>

            {children && (
              <Text
                as="div"
                color="white"
                fontSize="sm"
                fontWeight="regular"
                letterSpacing="wider"
                lineHeight="normal"
                mt={1}
                truncate
              >
                {children}
              </Text>
            )}
          </Box>

          {actionLabel && onActionClick && (
            <Box lineHeight="none" px={1.5}>
              <Button
                data-testid="action"
                rounded
                size="sm"
                variant="ghost"
                onClick={onActionClick}
              >
                {actionLabel}
              </Button>
            </Box>
          )}

          {onDismiss && (
            <Box lineHeight="none" px={1.5}>
              <IconButton
                aria-label={dismissLabel}
                rounded
                size="sm"
                variant="ghost"
                onClick={onDismiss}
              >
                <Icon name="x" />
              </IconButton>
            </Box>
          )}
        </Flex>
      </div>
    );
  },
);

Toast.displayName = 'Toast';
