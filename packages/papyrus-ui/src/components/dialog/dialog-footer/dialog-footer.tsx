"use client";

import cn from "classnames";
import { FC, HTMLAttributes, ReactNode, useContext } from "react";

import { DialogContext } from "../dialog.context";

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const DialogFooter: FC<DialogFooterProps> = ({
  className,
  children,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div
      className={cn(
        "sticky bottom-0 flex items-center gap-4 py-3.5 px-4 z-20",
        size !== "sm" && "border-t border-neutral-100 bg-white",
        className?.includes("justify") ? "" : "justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
