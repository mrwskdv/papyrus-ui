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

import * as S from './caption.css';

export interface CaptionProps
  extends TextAtoms,
    MarginAtoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color'> {
  as?: ElementType;
  breakWord?: boolean;
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline' | 'hidden'>;
  highlight?: boolean;
  truncate?: boolean;
}

export const Caption = forwardRef<HTMLElement, CaptionProps>(
  (
    {
      as: Element = 'h3',
      breakWord,
      className,
      highlight,
      truncate,
      children,
      ...props
    },
    ref,
  ) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <Element
        {...restProps}
        ref={ref}
        className={cn(
          S.root,
          highlight && highlightStyle,
          breakWord && breakWordStyle,
          truncate && truncateStyle,
          atoms(atomsProps),
          className,
        )}
      >
        {children}
      </Element>
    );
  },
);

Caption.displayName = 'Caption';
