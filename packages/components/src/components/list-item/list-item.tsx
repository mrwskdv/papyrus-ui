import {
  atoms,
  Atoms,
  breakWordStyle,
  truncateStyle,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, LiHTMLAttributes, Ref } from 'react';

import * as S from './list-item.css';

export interface ListItemProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, 'color'> {
  color?: Atoms['color'];
  fontWeight?: Atoms['fontWeight'];
  breakWord?: boolean;
  truncate?: boolean;
}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      breakWord,
      className,
      color,
      fontWeight,
      truncate,
      children,
      ...elemProps
    }: ListItemProps,
    ref: Ref<HTMLLIElement>,
  ): JSX.Element => (
    <li
      ref={ref}
      className={cn(
        S.root,
        atoms({
          color,
          fontWeight,
        }),
        breakWord && breakWordStyle,
        truncate && truncateStyle,
        className,
      )}
      {...elemProps}
    >
      {children}
    </li>
  ),
);

ListItem.displayName = 'ListItem';
