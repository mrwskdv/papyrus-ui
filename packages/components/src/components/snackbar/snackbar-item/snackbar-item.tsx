'use client';

import cn from 'classnames';
import {
  cloneElement,
  ComponentType,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import {
  BiCheckCircle,
  BiError,
  BiErrorCircle,
  BiInfoCircle,
  BiX,
} from 'react-icons/bi';
import { Transition } from 'react-transition-group';

import { useTimeout } from '../../../utils/use-timeout';
import { AlertVariant } from '../../alert';
import { Button } from '../../button';
import { Heading } from '../../heading';
import { IconButton } from '../../icon-button';
import { Text } from '../../text';
import { SnackbarContext } from '../snackbar.context';

import * as S from './snackbar-item.css';

export type SnackbarItemVariant =
  | 'primary'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success';

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

const iconByVariant: Record<AlertVariant, ComponentType<IconBaseProps>> = {
  primary: BiInfoCircle,
  info: BiInfoCircle,
  danger: BiErrorCircle,
  warning: BiError,
  success: BiCheckCircle,
};

const rootVariantClasses = {
  primary: 'bg-primary-600',
  info: 'bg-info-600',
  success: 'bg-success-600',
  warning: 'bg-warning-600',
  danger: 'bg-danger-600',
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
    const nodeRef = useRef<HTMLDivElement>(null);

    const defferAutoHide = useCallback(() => {
      if (autoHideDuration) {
        setTimeout(() => {
          onHide?.();
        }, autoHideDuration);
      }
    }, [autoHideDuration, onHide, setTimeout]);

    useEffect(() => {
      defferAutoHide();
    }, [defferAutoHide]);

    const IconComponent = iconByVariant[variant];

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
      clearTimeout();
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
      defferAutoHide();
      onMouseLeave?.(e);
    };

    return (
      <Transition
        {...props}
        ref={ref}
        in={visible}
        mountOnEnter
        nodeRef={nodeRef}
        timeout={TRANSITION_TIMEOUT}
        unmountOnExit
      >
        {(status, childProps) => (
          <div
            {...childProps}
            ref={nodeRef}
            className={cn(
              S.root,
              S.rootPlacement[placement],
              status === 'entered' && S.rootVisiblePlacement[placement],
              rootVariantClasses[variant],
              className,
            )}
            role={role}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center -mx-1.5">
              <div className="px-1.5">
                {isValidElement<IconBaseProps>(icon) ? (
                  cloneElement(icon, {
                    className: cn('text-3xl', icon.props.className),
                  })
                ) : (
                  <IconComponent className="text-3xl" />
                )}
              </div>

              <div className="flex-1 overflow-hidden px-1.5">
                {children ? (
                  <>
                    <Heading as="div" className="mb-1 truncate" level={5}>
                      {message}
                    </Heading>
                    <Text as="div" className="mt-1 truncate" size="sm">
                      {children}
                    </Text>
                  </>
                ) : (
                  <Text as="div" className="truncate">
                    {message}
                  </Text>
                )}
              </div>

              {actionLabel && onActionClick && (
                <div className="px-1.5">
                  <Button
                    data-testid="action"
                    rounded
                    size="sm"
                    variant="ghost"
                    onClick={onActionClick}
                  >
                    {actionLabel}
                  </Button>
                </div>
              )}

              {onDismiss && (
                <div className="px-1.5">
                  <IconButton
                    aria-label={dismissLabel}
                    rounded
                    size="sm"
                    variant="ghost"
                    onClick={onDismiss}
                  >
                    <BiX />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        )}
      </Transition>
    );
  },
);

SnackbarItem.displayName = 'SnackbarItem';
