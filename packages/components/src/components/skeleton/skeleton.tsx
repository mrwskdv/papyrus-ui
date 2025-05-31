import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

export type SkeletonProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => (
  <div {...props} className={cn('animate-pulse bg-neutral-100', className)} />
);
