import { FloatingArrow, FloatingArrowProps } from "@floating-ui/react";
import { FC, useContext } from "react";

import { PopoverContext } from "../popover.context";

export type PopoverArrowProps = Omit<FloatingArrowProps, "context" | "ref">;

export const PopoverArrow: FC<PopoverArrowProps> = (props) => {
  const { arrowRef, context } = useContext(PopoverContext);
  return <FloatingArrow {...props} ref={arrowRef} context={context} />;
};
