import cn from 'classnames';
import { FC } from 'react';
import { BiLoader } from 'react-icons/bi';

import { Icon, IconProps } from '../icon';

import * as S from './loader.css';

export type LoaderProps = Omit<IconProps, 'children'>;

export const Loader: FC<LoaderProps> = ({ className, ...props }) => (
  <Icon className={cn(S.root, className)} {...props}>
    <BiLoader />
  </Icon>
);
