import { atoms, Atoms, highlightStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, LiHTMLAttributes, Ref } from 'react';

import * as S from './list-item.css';

export interface ListItemProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, 'color'> {
  color?: Atoms['color'];
  highlight?: boolean;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    { className, color, highlight, children, ...elemProps }: ListItemProps,
    ref: Ref<HTMLLIElement>,
  ): JSX.Element => (
    <li
      ref={ref}
      className={cn(
        S.root,
        highlight && highlightStyle,
        atoms({
          color,
        }),
        className,
      )}
      {...elemProps}
    >
      {children}
    </li>
  ),
);

ListItem.displayName = 'ListItem';
