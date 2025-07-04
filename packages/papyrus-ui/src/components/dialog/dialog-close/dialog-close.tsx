"use client";

import { FC, MouseEvent, useContext, ComponentType } from "react";
import { BiX } from "react-icons/bi";

import { ButtonProps } from "../../button";
import { IconButton } from "../../icon-button";
import { DialogContext } from "../dialog.context";

export interface DialogCloseProps extends Omit<ButtonProps, "as" | "href"> {
  as?: ComponentType<ButtonProps>;
}

export const DialogClose: FC<DialogCloseProps> = ({
  as: Element,
  onClick,
  children,
  ...props
}) => {
  const { close } = useContext(DialogContext);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    close();
  };

  if (Element) {
    return (
      <Element {...props} onClick={handleClick}>
        {children}
      </Element>
    );
  }

  return (
    <IconButton
      {...props}
      rounded
      size="sm"
      variant="plain"
      onClick={handleClick}
    >
      <BiX />
    </IconButton>
  );
};
