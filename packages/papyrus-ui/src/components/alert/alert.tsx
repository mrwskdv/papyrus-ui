import cn from 'classnames';
import type {
  ComponentType,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import type { IconBaseProps } from 'react-icons';
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
  primary: 'border-primary-600/60 bg-primary-50 text-primary-700',
  info: 'border-info-600/60 bg-info-50 text-info-700',
  success: 'border-success-600/60 bg-success-50 text-success-700',
  warning: 'border-warning-600/60 bg-warning-50 text-warning-700',
  danger: 'border-danger-600/60 bg-danger-50 text-danger-700',
};

const iconVariantClasses = {
  primary: 'text-primary-600',
  info: 'text-info-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  danger: 'text-danger-600',
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
        'relative flex items-center rounded-lg border gap-3 ps-4 py-3 overflow-hidden',
        rootVariantClasses[variant],
        onClose ? 'pe-8' : 'pe-4',
        className,
      )}
      role={role}
    >
      <Icon className={cn('text-3xl', iconVariantClasses[variant])}>
        {icon ?? <IconComponent size='1em' />}
      </Icon>

      <div className='flex-1 overflow-hidden'>
        {children ? (
          <>
            <Heading as='div' className='mb-1' level={5}>
              {message}
            </Heading>
            <Text as='div' className='mt-1 text-neutral-950' size='sm'>
              {children}
            </Text>
          </>
        ) : (
          <Text as='div'>{message}</Text>
        )}
      </div>

      {onClose && (
        <Icon
          aria-label={closeLabel}
          className='absolute top-2 end-2 text-md text-neutral-500 hover:text-neutral-950 opacity-colors'
          role='button'
          tabIndex={0}
          onClick={onClose}
        >
          <BiX size='1rem' />
        </Icon>
      )}
    </div>
  );
};
