import {
  atoms,
  breakWordStyle,
  highlightStyle,
  MarginAtoms,
  partitionAtoms,
  ResponsiveValue,
  TextAtoms,
  truncateStyle,
} from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { AllHTMLAttributes, ElementType, forwardRef } from 'react';

import * as S from './label.css';

export interface LabelProps
  extends TextAtoms,
    MarginAtoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color' | 'size'> {
  /**
   * Specifies the HTML element type to render the text as.
   * Can be any valid HTML element (e.g., 'p', 'span', 'div', etc.).
   *
   * @default 'label'
   */
  as?: ElementType;

  /**
   * Controls the display behavior of the text, such as block or inline-block.
   */
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline' | 'hidden'>;

  /**
   * Highlights the text, using a pre-defined gradiant style from the theme.
   *
   * @default false
   */
  highlight?: boolean;

  /**
   * Controls whether the text should break words to avoid overflow.
   * Useful for handling long text content that doesn't naturally break.
   *
   * @default false
   */
  breakWord?: boolean;

  /**
   * Truncates the text with an ellipsis if it overflows its container.
   *
   * @default false
   */
  truncate?: boolean;
}

export const Label = forwardRef<HTMLElement, LabelProps>(
  (
    {
      as: Element = 'label',
      className,
      highlight,
      breakWord,
      truncate,
      children,
      ...props
    }: LabelProps,
    ref,
  ) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Element
        ref={ref}
        className={cn(
          S.root,
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

Label.displayName = 'Text';
