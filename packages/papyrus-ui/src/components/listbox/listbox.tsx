import cn from 'classnames';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export interface ListboxProps extends HTMLAttributes<HTMLUListElement> {
  visible?: boolean;
}

export const Listbox = forwardRef<HTMLUListElement, ListboxProps>(
  ({ className, visible = true, children, ...props }, ref) => (
    <ul
      {...props}
      ref={ref}
      className={cn(
        'flex flex-col gap-1 rounded-xl border border-neutral-100 bg-white shadow-lg overflow-x-hidden overflow-y-auto py-1.5 px-0.5 opacity-0 transition hide-scrollbar focus:outline-none',
        visible && 'opacity-100',
        className,
      )}
    >
      {children}
    </ul>
  ),
);

Listbox.displayName = 'Listbox';
