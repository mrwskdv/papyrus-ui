import { Atoms, MarginAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Flex, FlexProps } from '../../flex';
import { Skeleton } from '../skeleton';

import * as S from './caption-skeleton.css';

export interface CaptionSkeletonProps
  extends Pick<FlexProps, 'display'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  w?: Atoms['w'];
  minW?: Atoms['minW'];
  maxW?: Atoms['maxW'];
}

export const CaptionSkeleton: FC<CaptionSkeletonProps> = ({
  className,
  ...props
}) => (
  <Flex
    {...props}
    className={cn(S.root, className)}
    direction="column"
    justify="center"
  >
    <Skeleton className={S.skeleton} rounded="sm" />
  </Flex>
);
