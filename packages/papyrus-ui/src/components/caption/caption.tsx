import cn from 'classnames';
import { forwardRef } from 'react';
import type { AllHTMLAttributes, ElementType } from 'react';

export interface CaptionProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: ElementType;
}

export const Caption = forwardRef<HTMLElement, CaptionProps>(
  ({ as: Element = 'p', className, children, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      className={cn('font-sans', 'text-caption', className)}
    >
      {children}
    </Element>
  ),
);

Caption.displayName = 'Caption';
