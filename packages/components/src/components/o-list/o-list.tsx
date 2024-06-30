import {
  atoms,
  MarginAtoms,
  partitionAtoms,
  TextAtoms,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './o-list.css';

export type OListProps = TextAtoms &
  MarginAtoms &
  Omit<HTMLAttributes<HTMLOListElement>, 'color'>;

export const OList = forwardRef<HTMLOListElement, OListProps>(
  ({ className, children, ...props }, ref) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <ol
        ref={ref}
        className={cn(S.root, atoms(atomsProps), className)}
        {...restProps}
      >
        {children}
      </ol>
    );
  },
);

OList.displayName = 'OList';
