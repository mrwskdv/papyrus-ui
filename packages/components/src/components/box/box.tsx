import {
  Atoms,
  atoms,
  BorderAtoms,
  FlexItemAtoms,
  GridItemAtoms,
  MarginAtoms,
  OverflowAtoms,
  PaddingAtoms,
  partitionAtoms,
  PositionAtoms,
  ResponsiveValue,
  RoundedAtoms,
  SizingAtoms,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

import * as S from './box.css';

export type BoxDisplayValue =
  | 'block'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none';

export interface BoxProps
  extends PositionAtoms,
    FlexItemAtoms,
    GridItemAtoms,
    SizingAtoms,
    RoundedAtoms,
    BorderAtoms,
    PaddingAtoms,
    MarginAtoms,
    OverflowAtoms,
    HTMLAttributes<HTMLElement> {
  as?: ElementType;
  bg?: Atoms['bg'];
  display?: ResponsiveValue<BoxDisplayValue>;
  shadow?: Atoms['shadow'];
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Element = 'div', className, children, ...props }, ref) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Element
        ref={ref}
        className={cn(S.root, atoms(atomsProps), className)}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

Box.displayName = 'Box';
