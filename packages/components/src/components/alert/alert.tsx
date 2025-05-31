import cn from 'classnames';
import {
  cloneElement,
  ComponentType,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { IconBaseProps } from 'react-icons';
import {
  BiCheckCircle,
  BiError,
  BiErrorCircle,
  BiInfoCircle,
  BiX,
} from 'react-icons/bi';

import { Heading } from '../heading';
import { Icon } from '../icon';
import { Text } from '../text';

export type AlertVariant =
  | 'primary'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  icon?: ReactElement;
  message: string;
  variant?: AlertVariant;
  onClose?: () => void;
  children?: ReactNode;
}

const iconByVariant: Record<AlertVariant, ComponentType<IconBaseProps>> = {
  primary: BiInfoCircle,
  info: BiInfoCircle,
  danger: BiErrorCircle,
  warning: BiError,
  success: BiCheckCircle,
};

const rootVariantClasses = {
  primary: 'border-primary-200 bg-primary-50 text-primary-600',
  info: 'border-info-200 bg-info-50 text-info-600',
  success: 'border-success-200 bg-success-50 text-success-600',
  warning: 'border-warning-200 bg-warning-50 text-warning-600',
  danger: 'border-danger-200 bg-danger-50 text-danger-600',
};

const iconVariantClasses = {
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
};

export const Alert: FC<AlertProps> = ({
  closeLabel = 'Close',
  icon,
  message,
  variant = 'primary',
  className,
  role = 'alert',
  onClose,
  children,
  ...props
}) => {
  const IconComponent = iconByVariant[variant];

  return (
    <div
      {...props}
      className={cn(
        'relative rounded-lg border ps-4 py-3 overflow-hidden',
        rootVariantClasses[variant],
        onClose ? 'pe-8' : 'pe-4',
        className,
      )}
      role={role}
    >
      <div className="flex items-center -mx-1.5">
        <div className="px-1.5">
          {isValidElement<IconBaseProps>(icon) ? (
            cloneElement(icon, {
              className: cn(
                'text-3xl',
                iconVariantClasses[variant],
                icon.props.className,
              ),
            })
          ) : (
            <IconComponent
              className={cn('text-3xl', iconVariantClasses[variant])}
            />
          )}
        </div>

        <div className="flex-1 overflow-hidden px-1.5">
          {children ? (
            <>
              <Heading as="div" className="mb-1" level={5}>
                {message}
              </Heading>
              <Text as="div" className="mt-1 text-neutral-900" size="sm">
                {children}
              </Text>
            </>
          ) : (
            <Text as="div">{message}</Text>
          )}
        </div>
      </div>

      {onClose && (
        <Icon
          aria-label={closeLabel}
          className="absolute top-3 end-3 text-md text-neutral-700 hover:text-neutral-500"
          role="button"
          tabIndex={0}
          onClick={onClose}
        >
          <BiX size="1rem" />
        </Icon>
      )}
    </div>
  );
};
