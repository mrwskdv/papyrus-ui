import {
  atoms,
  Atoms,
  BorderAtoms,
  FlexItemAtoms,
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

export interface BoxProps
  extends PositionAtoms,
    FlexItemAtoms,
    SizingAtoms,
    RoundedAtoms,
    BorderAtoms,
    PaddingAtoms,
    MarginAtoms,
    OverflowAtoms,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  as?: ElementType;
  display?: ResponsiveValue<
    'block' | 'inline-block' | 'flex' | 'inline-flex' | 'none'
  >;
  bg?: Atoms['bg'];
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
