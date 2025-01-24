import { atoms, Atoms, fadeInStyle, fadeStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './listbox.css';

export interface ListboxProps extends HTMLAttributes<HTMLUListElement> {
  maxWidth?: Atoms['maxWidth'];
  maxHeight?: Atoms['maxHeight'];
  visible?: boolean;
  zIndex?: Atoms['zIndex'];
}
export const Listbox = forwardRef<HTMLUListElement, ListboxProps>(
  (
    {
      className,
      maxWidth,
      maxHeight,
      visible = true,
      zIndex = 40,
      children,
      ...props
    },
    ref,
  ) => (
    <ul
      {...props}
      ref={ref}
      className={cn(
        S.root,
        fadeStyle,
        visible && fadeInStyle,
        atoms({
          maxHeight,
          maxWidth,
          zIndex,
        }),
        className,
      )}
    >
      {children}
    </ul>
  ),
);

Listbox.displayName = 'Listbox';
