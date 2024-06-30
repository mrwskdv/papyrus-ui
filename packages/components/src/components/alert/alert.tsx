import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { Icon } from '../icon';
import { Text } from '../text';

import * as S from './alert.css';

export type AlertVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: AlertVariant;
}

const iconByVariant = {
  primary: 'info-circle',
  success: 'check-circle',
  warning: 'error',
  danger: 'error-circle',
};

export const Alert: FC<AlertProps> = ({
  variant = 'primary',
  children,
  className,
  role = 'alert',
  ...props
}) => (
  <div
    className={cn(S.root, S.rootVariant[variant], className)}
    role={role}
    {...props}
  >
    <Icon
      className={S.iconVariant[variant]}
      fontSize="2xl"
      mr={3}
      name={iconByVariant[variant]}
    />

    <Text as="span" color="inherit" display="block">
      {children}
    </Text>
  </div>
);
