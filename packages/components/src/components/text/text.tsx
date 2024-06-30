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

export interface TextProps
  extends TextAtoms,
    MarginAtoms,
    Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'color'> {
  as?: ElementType;
  display?: ResponsiveValue<'block' | 'inline-block' | 'inline'>;
  highlight?: boolean;
  breakWord?: boolean;
  truncate?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Element = 'p',
      highlight,
      breakWord,
      truncate,
      className,
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
