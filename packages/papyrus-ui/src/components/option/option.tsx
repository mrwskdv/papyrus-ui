import { forwardRef } from "react";

import { MenuButton, MenuButtonProps } from "../menu-button";

export interface OptionProps
  extends Omit<
    MenuButtonProps,
    "as" | "collapsed" | "direction" | "href" | "size" | "variant"
  > {
  /**
   * Service property to allow using custom Option component.
   */
  option?: unknown;
}

export const Option = forwardRef<HTMLAnchorElement, OptionProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ option, role = "option", children, ...props }, ref) => (
    <MenuButton ref={ref} role={role} variant="secondary" {...props}>
      {children}
    </MenuButton>
  )
);

Option.displayName = "Option";
