"use client";

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import cn from "classnames";
import { FC, HTMLAttributes, ReactNode, useContext } from "react";
import { Transition } from "react-transition-group";

import { ANIMATION_DURATION } from "../dialog.constants";
import { DialogContext } from "../dialog.context";

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: ANIMATION_DURATION,
};

export const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  ...props
}) => {
  const {
    context,
    getFloatingProps,
    isOpen,
    refs,
    size,
    labelId,
    descriptionId,
  } = useContext(DialogContext);

  return (
    <Transition
      in={isOpen}
      mountOnEnter
      nodeRef={refs.floating}
      timeout={TRANSITION_TIMEOUT}
      unmountOnExit
    >
      {(status) => (
        <FloatingPortal>
          <FloatingOverlay
            className={cn(
              "fixed inset-0 flex flex-col items-center w-full h-full bg-black/50 opacity-0 transition z-30",
              size === "sm" && "justify-center p-4 overflow-y-auto",
              size === "md" &&
                "justify-center p-0 sm:p-4 overflow-y-hidden sm:overflow-y-auto",
              size === "lg" &&
                "justify-start p-0 sm:p-4 overflow-y-hidden sm:overflow-y-auto",
              size === "xl" &&
                "justify-start px-0 lg:px-12 py-0 lg:py-4 overflow-y-hidden lg:overflow-y-auto",
              "fade",
              status === "entered" && "opacity-100",
              className
            )}
            data-testid="overlay"
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                ref={refs.setFloating}
                aria-describedby={descriptionId}
                aria-labelledby={labelId}
                className={cn(
                  "bg-white flex-none flex flex-col w-full",
                  size === "sm" &&
                    "relative max-w-sm max-h-full rounded-xl shadow-md overflow-hidden",
                  size === "md" &&
                    "absolute sm:relative inset-0 sm:max-w-lg h-full sm:h-auto max-h-full sm:rounded-xl shadow-md overflow-y-auto sm:overflow-y-hidden",
                  size === "lg" &&
                    "absolute sm:relative inset-0 sm:max-w-4xl min-h-full h-full sm:h-auto sm:rounded-xl shadow-md overflow-y-auto sm:overflow-y-hidden",
                  size === "xl" &&
                    "absolute lg:relative inset-0 min-h-full h-full lg:h-auto lg:rounded-xl shadow-md overflow-y-auto lg:overflow-y-hidden"
                )}
                {...getFloatingProps(props)}
              >
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </Transition>
  );
};
