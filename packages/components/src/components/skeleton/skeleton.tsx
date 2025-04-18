import { atoms, partitionAtoms, SizingAtoms } from '@papyrus-ui/styles';
import { MarginAtoms, RoundedAtoms } from '@papyrus-ui/styles/src';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import * as S from './skeleton.css';

export type SkeletonProps = SizingAtoms &
  RoundedAtoms &
  MarginAtoms &
  Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  const [atomsProps, restProps] = partitionAtoms(props);

  return (
    <div className={cn(S.root, atoms(atomsProps), className)} {...restProps} />
  );
};
