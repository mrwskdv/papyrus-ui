import {
  atoms,
  Atoms,
  highlightStyle,
  interactiveStyle,
  MarginAtoms,
  partitionAtoms,
} from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, memo } from 'react';

import * as S from './icon.css';

export type IconType = 'regular' | 'solid' | 'logo';

export type IconRotate = 0 | 90 | 180 | 270;

export type IconFlip = 'horizontal' | 'vertical' | 'none';

export type IconPull = 'left' | 'right' | 'none';

export type IconAnimation =
  | 'spin'
  | 'tada'
  | 'flashing'
  | 'burst'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up'
  | 'fade-down'
  | 'spin-hover'
  | 'tada-hover'
  | 'flashing-hover'
  | 'burst-hover'
  | 'fade-left-hover'
  | 'fade-right-hover'
  | 'fade-up-hover'
  | 'fade-down-hover'
  | 'none';

export interface IconProps
  extends MarginAtoms,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  color?: Atoms['color'];
  fontSize?: Atoms['fontSize'];
  animation?: IconAnimation;
  highlight?: boolean;
  interactive?: boolean;
  name: string;
  flip?: IconFlip;
  pull?: IconPull;
  rotate?: IconRotate;
  type?: IconType;
}

const IconComponent = forwardRef<HTMLElement, IconProps>(
  (
    {
      animation = 'none',
      className,
      flip = 'none',
      highlight,
      interactive,
      name,
      pull = 'none',
      rotate = 0,
      type = 'regular',
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
          'bx',
          (type === 'solid' && `bxs-${name}`) ||
            (type === 'logo' && `bxl-${name}`) ||
            `bx-${name}`,
          rotate !== 0 && `bx-rotate-${rotate}`,
          flip !== 'none' && `bx-flip-${flip}`,
          pull !== 'none' && `bx-pull-${pull}`,
          animation !== 'none' && `bx-${animation}`,
          highlight && highlightStyle,
          interactive && interactiveStyle,
          atoms(atomsProps),
          className,
        )}
        {...restProps}
      />
    );
  },
);

IconComponent.displayName = 'Icon';

export const Icon = memo(IconComponent);
