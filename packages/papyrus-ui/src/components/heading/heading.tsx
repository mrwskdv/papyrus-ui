import cn from 'classnames';
import { forwardRef } from 'react';
import type { AllHTMLAttributes, ElementType } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingVariant = 'primary' | 'secondary';

export interface HeadingProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'size'> {
  as?: ElementType;
  level?: HeadingLevel;
  fontVariant?: HeadingVariant;
}

export const Heading = forwardRef<HTMLElement, HeadingProps>(
  (
    { as, className, level = 1, fontVariant = 'primary', children, ...props },
    ref,
  ) => {
    const Element = as ?? `h${level}`;
    return (
      <Element
        ref={ref}
        className={cn(
          fontVariant === 'primary' && 'font-sans',
          fontVariant === 'secondary' && 'font-serif',
          level === 1 &&
            (fontVariant === 'primary'
              ? 'text-h1-sans xl:text-h1-sans-desktop'
              : 'text-h1-serif xl:text-h1-serif-desktop'),
          level === 2 &&
            (fontVariant === 'primary'
              ? 'text-h2-sans xl:text-h2-sans-desktop'
              : 'text-h2-serif xl:text-h2-serif-desktop'),
          level === 3 &&
            (fontVariant === 'primary' ? 'text-h3-sans' : 'text-h3-serif'),
          level === 4 &&
            (fontVariant === 'primary' ? 'text-h4-sans' : 'text-h4-serif'),
          level === 5 &&
            (fontVariant === 'primary' ? 'text-h5-sans' : 'text-h5-serif'),
          level === 6 &&
            (fontVariant === 'primary' ? 'text-h6-sans' : 'text-h6-serif'),
          className,
        )}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

Heading.displayName = 'Heading';
