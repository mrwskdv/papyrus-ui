import {
  atoms,
  Atoms,
  highlightStyle,
  interactiveStyle,
  MarginAtoms,
  partitionAtoms,
} from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactElement } from 'react';

import * as S from './icon.css';

export type IconFlip = 'horizontal' | 'vertical' | 'none';

export type IconRotate = 0 | 90 | 180 | 270;

export interface IconProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLElement>, 'color' | 'children'> {
  color?: Atoms['color'];
  flip?: IconFlip;
  fontSize?: Atoms['fontSize'];
  highlight?: boolean;
  interactive?: boolean;
  rotate?: IconRotate;
  children: ReactElement;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  (
    {
      className,
      flip = 'none',
      highlight,
      interactive,
      rotate = 0,
      children,
      ...props
    },
    ref,
  ) => {
    const [atomsProps, restProps] = partitionAtoms(props);

    return (
      <i
        ref={ref}
        className={cn(
          S.root,
          rotate !== 0 && S.rootRotate[rotate],
          flip !== 'none' && S.rootFlip[flip],
          highlight && highlightStyle,
          interactive && interactiveStyle,
          atoms(atomsProps),
          className,
        )}
        {...restProps}
      >
        {children}
      </i>
    );
  },
);

Icon.displayName = 'Icon';
