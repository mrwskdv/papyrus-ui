import { atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon, IconProps } from '../icon';
import { SnackbarItemVariant } from '../snackbar/snackbar-item';
import { Text } from '../text';

import * as S from './alert.css';

export type AlertVariant = 'primary' | 'danger' | 'warning' | 'success';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  icon?: ReactElement;
  message: string;
  variant?: AlertVariant;
  onClose?: () => void;
  children?: ReactNode;
}

const iconByVariant: Record<SnackbarItemVariant, string> = {
  primary: 'info-circle',
  danger: 'error-circle',
  warning: 'error',
  success: 'check-circle',
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
}) => (
  <div
    className={cn(
      S.root,
      S.rootVariant[variant],
      atoms({
        pe: onClose ? 8 : 4,
      }),
      className,
    )}
    role={role}
    {...props}
  >
    <Flex alignItems="center" mx="-1.5">
      <Box lineHeight="none" px={1.5}>
        {isValidElement<IconProps>(icon) ? (
          cloneElement(icon, {
            className: cn(S.iconVariant[variant], icon.props.className),
            fontSize: '4xl',
          })
        ) : (
          <Icon
            className={S.iconVariant[variant]}
            fontSize="4xl"
            name={iconByVariant[variant]}
          />
        )}
      </Box>

      <Box flex={1} lineHeight="none" overflow="hidden" px={1.5}>
        <Text
          as="div"
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
            color="neutral900"
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
    </Flex>

    {onClose && (
      <Icon
        aria-label={closeLabel}
        className={S.close}
        color="neutral700"
        fontSize="md"
        interactive
        name="x"
        role="button"
        tabIndex={0}
        onClick={onClose}
      />
    )}
  </div>
);
