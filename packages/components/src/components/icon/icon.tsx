import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactElement } from 'react';

import * as S from './icon.css';

export type IconFlip = 'horizontal' | 'vertical' | 'none';

export type IconRotate = 0 | 90 | 180 | 270;

export interface IconProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  flip?: IconFlip;
  rotate?: IconRotate;
  interactive?: boolean;
  children: ReactElement;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  (
    { className, flip = 'none', interactive, rotate = 0, children, ...props },
    ref,
  ) => (
    <i
      ref={ref}
      className={cn(
        S.root,
        rotate !== 0 && S.rootRotate[rotate],
        flip !== 'none' && S.rootFlip[flip],
        interactive && 'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </i>
  ),
);

Icon.displayName = 'Icon';
