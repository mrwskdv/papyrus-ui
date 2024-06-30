import { interactiveStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
} from 'react';

import * as S from './link.css';

export interface LinkProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type' | 'color'>,
    Omit<AnchorHTMLAttributes<HTMLElement>, 'color'> {
  as?: ElementType;
}

export const Link = forwardRef<HTMLElement, LinkProps>(
  (
    { as: Element = 'a', type, disabled, className, children, ...props },
    ref,
  ) => (
    <Element
      ref={ref}
      className={cn(
        !disabled ? [S.root, interactiveStyle] : S.rootDisabled,
        className,
      )}
      disabled={disabled}
      type={Element === 'button' && type == null ? 'button' : type}
      {...props}
    >
      {children}
    </Element>
  ),
);

Link.displayName = 'Link';
