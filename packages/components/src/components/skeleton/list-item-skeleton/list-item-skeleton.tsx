import cn from 'classnames';
import { FC } from 'react';

import { TextSkeleton, TextSkeletonProps } from '../text-skeleton';

import * as S from './list-item-skeleton.css';

export type ListItemSkeletonProps = Omit<TextSkeletonProps, 'display'>;

export const ListItemSkeleton: FC<ListItemSkeletonProps> = ({
  className,
  ...props
}) => <TextSkeleton {...props} className={cn(S.root, className)} />;
