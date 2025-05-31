import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export interface ListboxProps extends HTMLAttributes<HTMLUListElement> {
  visible?: boolean;
}

export const Listbox = forwardRef<HTMLUListElement, ListboxProps>(
  ({ className, visible = true, children, ...props }, ref) => (
    <ul
      {...props}
      ref={ref}
      className={cn(
        'flex flex-col rounded-lg border border-neutral-100 bg-white shadow-lg overflow-x-hidden overflow-y-auto py-0.5 opacity-0 transition',
        visible && 'opacity-100',
        className,
      )}
    >
      {children}
    </ul>
  ),
);

Listbox.displayName = 'Listbox';
