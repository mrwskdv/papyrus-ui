'use client';

import { truncateStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  ReactElement,
  useContext,
} from 'react';

import { IconProps } from '../../icon';
import { MenuBarContext } from '../menu-bar.context';

import * as S from './menu-bar-button.css';
import { rootNestedSelectedVariant } from './menu-bar-button.css';

export interface MenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  children: string;
  disabled?: boolean;
  selected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const MenuBarButtonComponent = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, disabled, selected, startIcon, endIcon, ...props }, ref) => {
    const { collapsed, isNested, size, variant } = useContext(MenuBarContext);

    return (
      <button
        ref={ref}
        className={cn(
          S.root,
          collapsed && [
            S.rootCollapsed,
            S.rootCollapsedVariant[variant],
            selected && S.rootCollapsedSelectedVariant[variant],
          ],
          !collapsed &&
            isNested && [
              S.rootNested,
              S.rootVariant[variant],
              selected && rootNestedSelectedVariant[variant],
            ],
          !collapsed &&
            !isNested && [
              S.rootVariant[variant],
              S.rootSize[size],
              selected && S.rootSelectedVariant[variant],
            ],
        )}
        disabled={disabled}
        role="menuitem"
        {...props}
      >
        {isValidElement<IconProps>(startIcon) &&
          cloneElement(startIcon, {
            className: cn(
              collapsed
                ? [S.startIconCollapsed, S.startIconCollapsedVariant[variant]]
                : [S.startIcon, S.startIconVariant[variant]],
              selected && S.startIconSelectedVariant[variant],
              disabled && S.startIconDisabled,
            ),
          })}

        <span
          className={cn(
            S.label,
            selected && S.labelSelected,
            isNested && S.labelNested,
            collapsed && S.labelCollapsed,
            !isNested && truncateStyle,
          )}
        >
          {children}
        </span>

        {!collapsed &&
          isValidElement<IconProps>(endIcon) &&
          cloneElement(endIcon, {
            className: cn(S.endIcon, endIcon.props.className),
          })}

        {variant === 'primary' && !isNested && (
          <span
            className={cn(
              S.underline,
              selected && !disabled && S.underlineSelected,
            )}
          />
        )}
      </button>
    );
  },
);

MenuBarButtonComponent.displayName = 'MenuButton';

export const MenuBarButton = memo(MenuBarButtonComponent);
