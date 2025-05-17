import {
  atoms,
  FlexAtoms,
  GapAtoms,
  ResponsiveValue,
} from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { forwardRef } from 'react';

import { Box, BoxProps } from '../box';

export interface FlexProps
  extends FlexAtoms,
    GapAtoms,
    Omit<BoxProps, 'display'> {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none'>;
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      display = 'flex',
      align,
      alignContent,
      justify,
      direction,
      wrap,
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
          align,
          alignContent,
          justify,
          direction,
          wrap,
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

Flex.displayName = 'Flex';
