import { Atoms, atoms, MarginAtoms, partitionAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import { Text, TextSize, TextVariant } from '../text';

import * as S from './u-list.css';

export type UListType = 'disc' | 'dash' | 'none';

export interface UListProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLUListElement>, 'color' | 'size' | 'type'> {
  /**
   * Applies bold styling to the text.
   *
   * @default false
   */
  bold?: boolean;

  /**
   * Controls whether the text should break words to avoid overflow.
   * Useful for handling long text content that doesn't naturally break.
   *
   * @default false
   */
  breakWord?: boolean;

  /**
   * Sets the text color from the theme.
   */
  color?: Atoms['color'];

  /**
   * Sets the font family variant for the text.
   *
   * @default 'primary'
   */
  fontVariant?: TextVariant;

  /**
   * Defines the size of the text.
   *
   * @default 'md'
   */
  size?: TextSize;

  /**
   * Sets the marker type of the list. Use 'none' type for custom markers.
   *
   * @default 'disc'
   */
  type?: UListType;
}

export const UList = forwardRef<HTMLUListElement, UListProps>(
  ({ className, type = 'disc', children, ...props }, ref) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Text
        ref={ref}
        as="ul"
        className={cn(S.root, S.rootType[type], atoms(atomsProps), className)}
        {...restProps}
      >
        {children}
      </Text>
    );
  },
);

UList.displayName = 'UList';
