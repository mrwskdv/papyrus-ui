import {
  atoms,
  MarginAtoms,
  partitionAtoms,
  TextAtoms,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './u-list.css';

export type UListType = 'disc' | 'dash' | 'none';

export interface UListProps
  extends TextAtoms,
    MarginAtoms,
    Omit<HTMLAttributes<HTMLUListElement>, 'color' | 'type'> {
  type?: UListType;
}

export const UList = forwardRef<HTMLUListElement, UListProps>(
  ({ className, type = 'disc', children, ...props }, ref) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <ul
        ref={ref}
        className={cn(S.root, S.rootType[type], atoms(atomsProps), className)}
        {...restProps}
      >
        {children}
      </ul>
    );
  },
);

UList.displayName = 'UList';
