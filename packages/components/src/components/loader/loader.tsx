import cn from 'classnames';
import { FC } from 'react';
import { BiLoader } from 'react-icons/bi';

import { Icon, IconProps } from '../icon';

export type LoaderProps = Omit<IconProps, 'children'>;

export const Loader: FC<LoaderProps> = ({ className, ...props }) => (
  <Icon className={cn('animate-spin', className)} {...props}>
    <BiLoader />
  </Icon>
);
