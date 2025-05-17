import { Atoms, MarginAtoms } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Flex, FlexProps } from '../../flex';
import { HeadingProps } from '../../heading';
import { Skeleton } from '../skeleton';

import * as S from './heading-skeleton.css';

export interface HeadingSkeletonProps
  extends Pick<HeadingProps, 'fontVariant' | 'level'>,
    Pick<FlexProps, 'display'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  w?: Atoms['w'];
  minW?: Atoms['minW'];
  maxW?: Atoms['maxW'];
}

export const HeadingSkeleton: FC<HeadingSkeletonProps> = ({
  className,
  fontVariant = 'primary',
  level = 1,
  ...props
}) => (
  <Flex
    {...props}
    className={cn(S.root({ fontVariant, level }), className)}
    direction="column"
    justify="center"
  >
    <Skeleton className={S.skeleton} rounded="sm" w="full" />
  </Flex>
);
