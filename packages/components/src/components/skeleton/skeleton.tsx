import { atoms, partitionAtoms, SizingAtoms } from '@papyrus-ui/styles';
import { MarginAtoms, RoundedAtoms } from '@papyrus-ui/styles/src';
import cn from 'classnames';
import { HTMLAttributes, memo } from 'react';

import * as S from './skeleton.css';

export type SkeletonProps = SizingAtoms &
  RoundedAtoms &
  MarginAtoms &
  Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export const Skeleton = memo<SkeletonProps>(({ className, ...props }) => {
  const [atomsProps, restProps] = partitionAtoms(props);

  return (
    <div className={cn(S.root, atoms(atomsProps), className)} {...restProps} />
  );
});

Skeleton.displayName = 'Skeleton';
