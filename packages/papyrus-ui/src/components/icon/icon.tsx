import cn from 'classnames';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface IconProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children: ReactNode;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ className, children, ...props }, ref) => (
    <i
      ref={ref}
      className={cn('inline-block leading-none align-[-0.125em]', className)}
      {...props}
    >
      {children}
    </i>
  ),
);

Icon.displayName = 'Icon';
