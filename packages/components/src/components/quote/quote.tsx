import { MarginAtoms } from '@papyrus-ui/styles';
import { forwardRef, HTMLAttributes } from 'react';

import { Box } from '../box';

export type QuoteProps = MarginAtoms & HTMLAttributes<HTMLQuoteElement>;

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      as="blockquote"
      borderColor="primary400"
      borderStart={4}
      ps={4}
      {...props}
    >
      {children}
    </Box>
  ),
);

Quote.displayName = 'Quote';
