import { MarginAtoms } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { AvatarProps } from '../../avatar';
import { Skeleton } from '../skeleton';

import * as S from './avatar-skeleton.css';

export interface AvatarSkeletonProps
  extends Pick<AvatarProps, 'size'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}

export const AvatarSkeleton: FC<AvatarSkeletonProps> = ({
  className,
  size = 'md',
  ...props
}) => (
  <Skeleton
    {...props}
    className={cn(S.rootSize[size], className)}
    display="inline-block"
    rounded="full"
  />
);
