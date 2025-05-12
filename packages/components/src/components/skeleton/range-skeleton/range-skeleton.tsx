import { MarginAtoms } from '@papyrus-ui/styles';
import { FC, HTMLAttributes } from 'react';

import { Flex } from '../../flex';
import { Skeleton } from '../skeleton';

export interface RangeSkeletonProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}

export const RangeSkeleton: FC<RangeSkeletonProps> = (props) => (
  <Flex {...props} align="center" justify="center" position="relative" py={2}>
    <Skeleton h={1} rounded="full" w="full" />
    <Skeleton h={3} position="absolute" rounded="full" w={3} />
  </Flex>
);
