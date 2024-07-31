'use client';

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
  useContext,
  useEffect,
} from 'react';
import { Transition } from 'react-transition-group';

import { useTimeout } from '../../../utils/use-timeout';
import { Box } from '../../box';
import { Button } from '../../button';
import { Flex } from '../../flex';
import { Icon, IconProps } from '../../icon';
import { IconButton } from '../../icon-button';
import { Text } from '../../text';
import { SnackbarContext } from '../snackbar.context';

import * as S from './snackbar-item.css';

export type SnackbarItemVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface SnackbarItemProps extends HTMLAttributes<HTMLDivElement> {
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
  variant?: SnackbarItemVariant;

  /**
   * Indicates whether the toast component is currently visible or not.
   */
  in?: boolean;

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
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

const iconByVariant: Record<SnackbarItemVariant, string> = {
  primary: 'info-circle',
  danger: 'error-circle',
  warning: 'error',
  success: 'check-circle',
};

export const SnackbarItem = forwardRef<
  Transition<HTMLElement>,
  SnackbarItemProps
>(
  (
    {
      actionLabel,
      autoHideDuration,
      children,
      className,
      dismissLabel = 'Dismiss',
      icon,
      in: visible = true,
      message,
      role = 'alert',
      variant = 'primary',
      onActionClick,
      onDismiss,
      onHide,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const { placement } = useContext(SnackbarContext);
    const { setTimeout, clearTimeout } = useTimeout();

    const defferAutoHide = useCallback(() => {
      if (autoHideDuration) {
        setTimeout(() => {
          onHide?.();
        }, autoHideDuration);
      }
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

    return (
      <Transition
        {...props}
        ref={ref}
        in={visible}
        mountOnEnter
        timeout={TRANSITION_TIMEOUT}
        unmountOnExit
      >
        {(status, childProps) => (
          <div
            {...childProps}
            className={cn(
              S.root,
              S.rootPlacement[placement],
              status === 'entered' && S.rootVisiblePlacement[placement],
              S.rootVariant[variant],
              className,
            )}
            role={role}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                  fontWeight={children ? 'semiBold' : 'regular'}
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
        )}
      </Transition>
    );
  },
);

SnackbarItem.displayName = 'SnackbarItem';