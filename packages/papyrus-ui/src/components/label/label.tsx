import cn from "classnames";
import { AllHTMLAttributes, ElementType, forwardRef } from "react";

export interface LabelProps
  extends Omit<AllHTMLAttributes<HTMLElement>, "as" | "size"> {
  /**
   * Specifies the HTML element type to render the text as.
   * Can be any valid HTML element (e.g., 'p', 'span', 'div', etc.).
   *
   * @default 'label'
   */
  as?: ElementType;
}

export const Label = forwardRef<HTMLElement, LabelProps>(
  ({ as: Element = "label", className, children, ...props }, ref) => (
    <Element ref={ref} className={cn("text-label", className)} {...props}>
      {children}
    </Element>
  )
);

Label.displayName = "Label";
