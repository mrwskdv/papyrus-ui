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

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingVariant = 'primary' | 'secondary';

export interface HeadingProps
  extends TextAtoms,
    MarginAtoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color' | 'size'> {
  as?: ElementType;
  breakWord?: boolean;
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline' | 'hidden'>;
  highlight?: boolean;
  level?: HeadingLevel;
  truncate?: boolean;
  fontVariant?: HeadingVariant;
}

export const Heading = forwardRef<HTMLElement, HeadingProps>(
  (
    {
      as,
      breakWord,
      className,
      highlight,
      level = 1,
      truncate,
      fontVariant = 'primary',
      children,
      ...props
    },
    ref,
  ) => {
    const [atomsProps, restProps] = partitionAtoms(props);
    const Element = as ?? `h${level}`;

    return (
      <Element
        {...restProps}
        ref={ref}
        className={cn(
          S.root({ level, fontVariant }),
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
