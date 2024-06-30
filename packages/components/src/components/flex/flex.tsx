import { atoms, FlexAtoms, ResponsiveValue } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef } from 'react';

import { Box, BoxProps } from '../box';

export interface FlexProps extends FlexAtoms, Omit<BoxProps, 'display'> {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none'>;
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      display = 'flex',
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
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
          alignItems,
          justifyContent,
          flexDirection,
          flexWrap,
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
