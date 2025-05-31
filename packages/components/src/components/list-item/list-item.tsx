import cn from 'classnames';
import { forwardRef, LiHTMLAttributes, Ref } from 'react';

import * as S from './list-item.css';

export type ListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref: Ref<HTMLLIElement>): JSX.Element => (
    <li ref={ref} className={cn(S.root, className)} {...props}>
      {children}
    </li>
  ),
);

ListItem.displayName = 'ListItem';
