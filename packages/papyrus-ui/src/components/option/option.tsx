import { forwardRef } from 'react';

import { MenuButton } from '../menu-button';
import type { MenuButtonProps } from '../menu-button';

export interface OptionProps
  extends Omit<
    MenuButtonProps,
    'as' | 'collapsed' | 'direction' | 'href' | 'size' | 'variant'
  > {
  /**
   * Service property to allow using custom Option component.
   */
  variant?: 'primary' | 'secondary';
}

export const Option = forwardRef<HTMLAnchorElement, OptionProps>(
  ({ children, variant = 'secondary', ...props }, ref) => (
    <MenuButton ref={ref} role='option' variant={variant} {...props}>
      {children}
    </MenuButton>
  ),
);

Option.displayName = 'Option';
