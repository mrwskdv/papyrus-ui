import { MarginAtoms } from '@papyrus-ui/styles';
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactNode,
} from 'react';

import { Box } from '../../box';
import { ListItemSkeletonProps } from '../list-item-skeleton';

export interface ListSkeletonProps
  extends Pick<ListItemSkeletonProps, 'fontVariant' | 'size'>,
    MarginAtoms,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ListSkeleton: FC<ListSkeletonProps> = ({
  fontVariant,
  size,
  children,
  ...props
}) => (
  <Box {...props} ps={6}>
    {Children.map(children, (child) =>
      isValidElement<ListItemSkeletonProps>(child)
        ? cloneElement(child, { fontVariant, size })
        : child,
    )}
  </Box>
);
