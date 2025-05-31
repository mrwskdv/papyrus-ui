import cn from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactNode,
} from 'react';

import { ListItemSkeletonProps } from '../list-item-skeleton';

export interface ListSkeletonProps
  extends Pick<ListItemSkeletonProps, 'fontVariant' | 'size'>,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ListSkeleton: FC<ListSkeletonProps> = ({
  className,
  fontVariant,
  size,
  children,
  ...props
}) => (
  <div {...props} className={cn('ps-6', className)}>
    {Children.map(children, (child) =>
      isValidElement<ListItemSkeletonProps>(child)
        ? cloneElement(child, { fontVariant, size })
        : child,
    )}
  </div>
);
