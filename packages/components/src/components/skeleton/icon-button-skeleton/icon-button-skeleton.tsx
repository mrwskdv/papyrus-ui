import { MarginAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { IconButtonProps } from '../../icon-button';
import { Skeleton } from '../skeleton';

import * as S from './icon-button-skeleton.css';

export interface IconButtonSkeletonProps
  extends Pick<IconButtonProps, 'rounded' | 'size'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}

export const IconButtonSkeleton: FC<IconButtonSkeletonProps> = ({
  className,
  rounded,
  size = 'md',
  ...props
}) => (
  <Skeleton
    {...props}
    className={cn(S.rootSize[size], rounded && S.rootRounded, className)}
    display="inline-block"
    rounded="md"
  />
);
