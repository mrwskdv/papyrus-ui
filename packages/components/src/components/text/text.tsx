import {
  atoms,
  breakWordStyle,
  highlightStyle,
  MarginAtoms,
  partitionAtoms,
  ResponsiveValue,
  TextAtoms,
  truncateStyle,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { AllHTMLAttributes, ElementType, forwardRef } from 'react';

import * as S from './text.css';

export type TextSize = 'md' | 'sm';

export type TextFontVariant = 'primary' | 'secondary';

export interface TextProps
  extends TextAtoms,
    MarginAtoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color' | 'size'> {
  /**
   * Specifies the HTML element type to render the text as.
   * Can be any valid HTML element (e.g., 'p', 'span', 'div', etc.).
   *
   * @default 'p'
   */
  as?: ElementType;

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
   * Controls the display behavior of the text, such as block or inline-block.
   */
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline' | 'hidden'>;

  /**
   * Sets the font family variant for the text.
   *
   * @default 'primary'
   */
  fontVariant?: TextFontVariant;
  /**
   * Highlights the text, using a pre-defined gradiant style from the theme.
   *
   * @default false
   */
  highlight?: boolean;

  /**
   * Defines the size of the text.
   *
   * @default 'md'
   */
  size?: TextSize;

  /**
   * Truncates the text with an ellipsis if it overflows its container.
   *
   * @default false
   */
  truncate?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Element = 'p',
      bold = false,
      className,
      highlight = false,
      breakWord = false,
      size = 'md',
      truncate = false,
      fontVariant = 'primary',
      children,
      ...props
    }: TextProps,
    ref,
  ) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Element
        ref={ref}
        className={cn(
          S.root({ bold, size, fontVariant }),
          atoms(atomsProps),
          highlight && highlightStyle,
          breakWord && breakWordStyle,
          truncate && truncateStyle,
          className,
        )}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

Text.displayName = 'Text';
