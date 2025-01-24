import {
  atoms,
  GridAtoms,
  GapAtoms,
  ResponsiveValue,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef } from 'react';

import { Box, BoxProps } from '../box';

export interface GridProps
  extends GridAtoms,
    GapAtoms,
    Omit<BoxProps, 'display'> {
  display?: ResponsiveValue<'grid' | 'inline-grid' | 'none'>;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      display = 'grid',
      autoColumns,
      autoFlow,
      autoRows,
      templateColumns,
      templateRows,
      justify,
      justifyItems,
      align,
      alignContent,
      placeContent,
      placeItems,
      gap,
      columnGap,
      rowGap,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      className={cn(
        atoms({
          autoColumns,
          autoFlow,
          autoRows,
          templateColumns,
          templateRows,
          justify,
          justifyItems,
          align,
          alignContent,
          placeContent,
          placeItems,
          gap,
          columnGap,
          rowGap,
        }),
        className,
      )}
      display={display}
      {...props}
    >
      {children}
    </Box>
  ),
);

Grid.displayName = 'Grid';
