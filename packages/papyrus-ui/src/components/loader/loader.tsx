import cn from 'classnames';
import type { FC } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

import { Icon } from '../icon';
import type { IconProps } from '../icon';

export type LoaderProps = Omit<IconProps, 'children'>;

export const Loader: FC<LoaderProps> = ({ className, ...props }) => (
  <Icon className={cn('animate-spin animate-slow', className)} {...props}>
    <BiLoaderAlt />
  </Icon>
);
