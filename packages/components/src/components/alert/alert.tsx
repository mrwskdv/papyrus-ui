import { atoms, MarginAtoms, partitionAtoms } from '@papyrus-ui/styles';
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

import { Box } from '../box';
import { Flex } from '../flex';
import { Heading } from '../heading';
import { Icon } from '../icon';
import { Text } from '../text';

import * as S from './alert.css';

export type AlertVariant =
  | 'primary'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success';

export interface AlertProps
  extends MarginAtoms,
    HTMLAttributes<HTMLDivElement> {
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
  const [atomProps, restProps] = partitionAtoms(props);

  return (
    <div
      {...restProps}
      className={cn(
        S.root,
        S.rootVariant[variant],
        atoms({
          ...atomProps,
          pe: onClose ? 8 : 4,
        }),
        className,
      )}
      role={role}
    >
      <Flex align="center" mx="-1.5">
        <Box px={1.5}>
          {isValidElement<IconBaseProps>(icon) ? (
            cloneElement(icon, {
              className: cn(
                S.icon,
                S.iconVariant[variant],
                icon.props.className,
              ),
            })
          ) : (
            <IconComponent className={cn(S.icon, S.iconVariant[variant])} />
          )}
        </Box>

        <Box flex={1} overflow="hidden" px={1.5}>
          {children ? (
            <>
              <Heading as="div" level={5} mb={1}>
                {message}
              </Heading>
              <Text as="div" color="neutral900" mt={1} size="sm">
                {children}
              </Text>
            </>
          ) : (
            <Text as="div">{message}</Text>
          )}
        </Box>
      </Flex>

      {onClose && (
        <Icon
          aria-label={closeLabel}
          className={S.close}
          color="neutral700"
          interactive
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
