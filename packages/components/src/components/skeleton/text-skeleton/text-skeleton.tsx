import { Atoms, MarginAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Flex, FlexProps } from '../../flex';
import { TextProps } from '../../text';
import { Skeleton } from '../skeleton';

import * as S from './text-skeleton.css';

export interface TextSkeletonProps
  extends Pick<TextProps, 'fontVariant' | 'size'>,
    Pick<FlexProps, 'display'>,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  w?: Atoms['w'];
  minW?: Atoms['minW'];
  maxW?: Atoms['maxW'];
}

export const TextSkeleton: FC<TextSkeletonProps> = ({
  className,
  fontVariant = 'primary',
  size = 'md',
  ...props
}) => (
  <Flex
    {...props}
    className={cn(S.root({ fontVariant, size }), className)}
    direction="column"
    justify="center"
  >
    <Skeleton className={S.skeleton} rounded="sm" w="full" />
  </Flex>
);
