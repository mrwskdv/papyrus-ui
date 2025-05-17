import {
  atoms,
  partitionAtoms,
  PositionAtoms,
  ResponsiveValue,
  SizingAtoms,
  MarginAtoms,
  RoundedAtoms,
} from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

import * as S from './skeleton.css';

export interface SkeletonProps
  extends PositionAtoms,
    SizingAtoms,
    RoundedAtoms,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline' | 'none'>;
}

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  const [atomsProps, restProps] = partitionAtoms(props);

  return (
    <div {...restProps} className={cn(S.root, atoms(atomsProps), className)} />
  );
};
