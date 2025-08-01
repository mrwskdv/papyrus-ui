import cn from 'classnames';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { Text } from '../text';
import type { TextSize, TextFontVariant } from '../text';

export type UListType = 'disc' | 'dash' | 'none';

export interface UListProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'size' | 'type'> {
  /**
   * Applies bold styling to the text.
   *
   * @default false
   */
  bold?: boolean;

  /**
   * Sets the font family variant for the text.
   *
   * @default 'primary'
   */
  fontVariant?: TextFontVariant;

  /**
   * Defines the size of the text.
   *
   * @default 'md'
   */
  size?: TextSize;

  /**
   * Sets the marker type of the list. Use 'none' type for custom markers.
   */
  type?: UListType;
}

export const UList = forwardRef<HTMLUListElement, UListProps>(
  ({ className, children, type = 'disc', ...props }, ref) => (
    <Text
      ref={ref}
      as='ul'
      className={cn('list', `list-${type}`, className)}
      {...props}
    >
      {children}
    </Text>
  ),
);

UList.displayName = 'UList';
