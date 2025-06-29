"use client";

import {
  cloneElement,
  FC,
  HTMLProps,
  isValidElement,
  ReactElement,
  useContext,
} from "react";

import { PopoverContext } from "../popover.context";

export interface DialogTriggerProps {
  children: ReactElement;
}

export const PopoverTrigger: FC<DialogTriggerProps> = ({ children }) => {
  const { getReferenceProps, refs } = useContext(PopoverContext);

  if (isValidElement<HTMLProps<Element>>(children)) {
    return cloneElement(children, {
      ref: refs.setReference,
      ...getReferenceProps(),
    });
  }

  return null;
};
