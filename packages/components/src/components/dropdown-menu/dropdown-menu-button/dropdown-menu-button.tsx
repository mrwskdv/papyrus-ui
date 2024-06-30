'use client';

import cn from 'classnames';
import { cloneElement, forwardRef, isValidElement, memo } from 'react';

import { IconProps } from '../../icon';

import * as S from './dropdown-menu-button.css';

export interface DropdownMenuButtonButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
}

const DropdownMenuButtonComponent = forwardRef<
  HTMLButtonElement,
  DropdownMenuButtonButtonProps
>(({ children, disabled, selected, startIcon, endIcon, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(S.root, selected && S.rootSelected)}
    disabled={disabled}
    role="menuitem"
    {...props}
  >
    {isValidElement<IconProps>(startIcon) &&
      cloneElement(startIcon, {
        className: cn(
          S.startIcon,
          selected && S.startIconSelected,
          disabled && S.startIconDisabled,
          startIcon.props.className,
        ),
      })}

    <span className={cn(S.label, selected && S.labelSelected)}>{children}</span>

    {isValidElement<IconProps>(endIcon) &&
      cloneElement(endIcon, {
        fontSize: 'xl',
        mx: 1,
      })}
  </button>
));

DropdownMenuButtonComponent.displayName = 'DropdownMenuButton';

export const DropdownMenuButton = memo(DropdownMenuButtonComponent);
