import {
  atoms,
  breakWordStyle,
  highlightStyle,
  MarginAtoms,
  partitionAtoms,
  ResponsiveValue,
  TextAtoms,
  truncateStyle,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { AllHTMLAttributes, ElementType, forwardRef } from 'react';

import * as S from './heading.css';

export type HeadingSize = '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm';

export type HeadingVariant = 'primary' | 'secondary';

export interface HeadingProps
  extends TextAtoms,
    MarginAtoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color' | 'size'> {
  as?: ElementType;
  breakWord?: boolean;
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline'>;
  highlight?: boolean;
  size?: HeadingSize;
  truncate?: boolean;
  fontVariant?: HeadingVariant;
}

export const Heading = forwardRef<HTMLElement, HeadingProps>(
  (
    {
      as: Element = 'h2',
      breakWord,
      className,
      highlight,
      size = 'md',
      truncate,
      fontVariant = 'primary',
      children,
      ...props
    },
    ref,
  ) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Element
        {...restProps}
        ref={ref}
        className={cn(
          S.root({ size, fontVariant }),
          highlight && highlightStyle,
          breakWord && breakWordStyle,
          truncate && truncateStyle,
          atoms(atomsProps),
          className,
        )}
      >
        {children}
      </Element>
    );
  },
);

Heading.displayName = 'Heading';
