import { Atoms, MarginAtoms } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { InputBoxProps } from '../../input-box';
import { Skeleton } from '../skeleton';

import * as S from './input-skeleton.css';

export interface InputSkeletonProps
  extends Pick<InputBoxProps, 'size'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  h?: Atoms['h'];
}

export const InputSkeleton: FC<InputSkeletonProps> = ({
  className,
  size = 'md',
  ...props
}) => (
  <Skeleton
    {...props}
    className={cn(S.rootSize[size], className)}
    rounded="md"
  />
);
