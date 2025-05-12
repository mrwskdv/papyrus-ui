import { MarginAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { ButtonProps } from '../../button';
import { Skeleton } from '../skeleton';

import * as S from './button-skeleton.css';

export interface ButtonSkeletonProps
  extends Pick<ButtonProps, 'block' | 'rounded' | 'size'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}

export const ButtonSkeleton: FC<ButtonSkeletonProps> = ({
  block,
  className,
  rounded,
  size = 'md',
  ...props
}) => (
  <Skeleton
    {...props}
    className={cn(
      S.rootSize[size],
      block && S.rootBlock,
      rounded && S.rootRounded,
      className,
    )}
    display="inline-block"
    rounded="md"
  />
);
