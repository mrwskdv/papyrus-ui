import { atoms, MarginAtoms, partitionAtoms } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import * as S from './table.css';

export type TableSize = 'md' | 'sm';

export type TableFontVariant = 'primary' | 'secondary';

export interface TableProps
  extends MarginAtoms,
    HTMLAttributes<HTMLTableElement> {
  bordered?: boolean;
  fontVariant?: TableFontVariant;
  size?: TableSize;
  striped?: boolean;
  children?: ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      bordered,
      className,
      fontVariant = 'primary',
      size = 'md',
      striped,
      children,
      ...props
    },
    ref,
  ) => {
    const [atomProps, restProps] = partitionAtoms(props);

    return (
      <table
        {...restProps}
        ref={ref}
        className={cn(
          S.root,
          S.rootSize[size],
          S.rootFontVariant[fontVariant],
          bordered && S.rootBordered,
          striped && S.rootStriped,
          atoms(atomProps),
          className,
        )}
      >
        {children}
      </table>
    );
  },
);

Table.displayName = 'Table';
