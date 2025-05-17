import {
  Atoms,
  atoms,
  MarginAtoms,
  partitionAtoms,
} from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import { Text, TextSize, TextFontVariant } from '../text';

import * as S from './o-list.css';

export interface OListProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLOListElement>, 'color'> {
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
  fontVariant?: TextFontVariant;

  /**
   * Defines the size of the text.
   *
   * @default 'md'
   */
  size?: TextSize;
}

export const OList = forwardRef<HTMLOListElement, OListProps>(
  ({ className, children, ...props }, ref) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Text
        ref={ref}
        as="ol"
        className={cn(S.root, atoms(atomsProps), className)}
        {...restProps}
      >
        {children}
      </Text>
    );
  },
);

OList.displayName = 'OList';
