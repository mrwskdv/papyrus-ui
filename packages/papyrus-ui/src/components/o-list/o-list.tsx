import cn from "classnames";
import { forwardRef, HTMLAttributes } from "react";

import { Text, TextSize, TextFontVariant } from "../text";

export interface OListProps
  extends Omit<HTMLAttributes<HTMLOListElement>, "color"> {
  /**
   * Applies bold styling to the text.
   *
   * @default false
   */
  bold?: boolean;

  /**
   * Sets the font family variant for the text.
   *
   * @default 'primary'
   */
  fontVariant?: TextFontVariant;

  /**
   * Defines the size of the text.
   *
   * @default 'md'
   */
  size?: TextSize;
}

export const OList = forwardRef<HTMLOListElement, OListProps>(
  ({ className, children, ...props }, ref) => (
    <Text
      ref={ref}
      as="ol"
      className={cn("list list-decimal", className)}
      {...props}
    >
      {children}
    </Text>
  )
);

OList.displayName = "OList";
