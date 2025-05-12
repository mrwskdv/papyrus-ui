import { FC, HTMLAttributes } from 'react';

import { Box } from '../../box';
import { Flex } from '../../flex';
import { Skeleton } from '../skeleton';

export type CheckboxSkeletonProps = HTMLAttributes<HTMLDivElement>;

export const CheckboxSkeleton: FC<CheckboxSkeletonProps> = ({
  children,
  ...props
}) => (
  <Flex {...props} align="baseline" columnGap={2} display="inline-flex">
    <Skeleton h={4} my={children ? 1 : 0} rounded="sm" w={4} />
    {children && <Box flex={1}>{children}</Box>}
  </Flex>
);
