import { FC, HTMLAttributes } from 'react';

import { Box } from '../../box';
import { Flex } from '../../flex';
import { Skeleton } from '../skeleton';

export type RadioSkeletonProps = HTMLAttributes<HTMLDivElement>;

export const RadioSkeleton: FC<RadioSkeletonProps> = ({
  children,
  ...props
}) => (
  <Flex {...props} align="baseline" columnGap={2} display="inline-flex">
    <Skeleton h={4} my={children ? 1 : 0} rounded="full" w={4} />
    {children && <Box flex={1}>{children}</Box>}
  </Flex>
);
