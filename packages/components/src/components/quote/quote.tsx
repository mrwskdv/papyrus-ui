import { MarginAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import { Text, TextSize, TextVariant } from '../text';

import * as S from './quote.css';

export type QuoteVariant = 'primary' | 'secondary' | 'tertiary';

export interface QuoteProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLQuoteElement>, 'color' | 'size'> {
  /**
   * If true, the component will break words that don't fit within the container.
   * Useful when displaying long quotes without proper word breaks.
   *
   * @default false
   */
  breakWord?: boolean;

  /**
   * Sets the variant of the text inside the quote.
   *
   * @default 'primary'
   */
  fontVariant?: TextVariant;

  /**
   * Sets the size of the text inside the quote.
   *
   * @default 'md'
   */
  size?: TextSize;

  /**
   * Sets the variant for the quote.
   *
   * @default 'primary'
   */
  variant?: QuoteVariant;
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => (
    <Text
      {...props}
      ref={ref}
      as="blockquote"
      className={cn(S.root, className)}
    >
      {children}
      <span className={cn(S.line, S.lineVariant[variant])} />
    </Text>
  ),
);

Quote.displayName = 'Quote';
