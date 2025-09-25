import cn from 'classnames';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { Text } from '../text';
import type { TextSize, TextFontVariant } from '../text';

export type UListType = 'dash' | 'disc' | 'none';

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
   *
   * Custom UI-kit types: 'dash'
   * TailwindCSS types: 'disc', 'none'
   *
   * @default 'dash'
   */
  type?: UListType;
}

export const UList = forwardRef<HTMLUListElement, UListProps>(
  ({ className, children, type = 'dash', ...props }, ref) => (
    <Text
      ref={ref}
      as='ul'
      className={cn(
        'list',
        type === 'dash' && 'list-dash',
        type === 'disc' && 'list-disc',
        type === 'none' && 'list-none',
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  ),
);

UList.displayName = 'UList';
