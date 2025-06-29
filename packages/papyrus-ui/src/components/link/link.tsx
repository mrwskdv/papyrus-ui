import cn from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
} from "react";

export interface LinkProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, "type" | "color">,
    Omit<AnchorHTMLAttributes<HTMLElement>, "color"> {
  as?: ElementType;
}

export const Link = forwardRef<HTMLElement, LinkProps>(
  (
    { as: Element = "a", type, disabled, className, children, ...props },
    ref
  ) => (
    <Element
      ref={ref}
      className={cn(
        !disabled
          ? "text-secondary-600 transition-colors cursor-pointer hover:text-secondary-400"
          : "text-neutral-300",
        className
      )}
      disabled={disabled}
      type={Element === "button" && type == null ? "button" : type}
      {...props}
    >
      {children}
    </Element>
  )
);

Link.displayName = "Link";
