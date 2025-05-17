import { Atoms, MarginAtoms } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Flex, FlexProps } from '../../flex';
import { Skeleton } from '../skeleton';

import * as S from './label-skeleton.css';

export interface LabelSkeletonProps
  extends Pick<FlexProps, 'display'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  w?: Atoms['w'];
  minW?: Atoms['minW'];
  maxW?: Atoms['maxW'];
}

export const LabelSkeleton: FC<LabelSkeletonProps> = ({
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
