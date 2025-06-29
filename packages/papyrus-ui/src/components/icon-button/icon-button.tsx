import cn from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
} from "react";

import { AvatarProps } from "../avatar";
import { Icon } from "../icon/icon";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "plain"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "ghost";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, "type">,
    AnchorHTMLAttributes<HTMLElement> {
  /**
   * Specifies the element type to be used for rendering the icon-button.
   */
  as?: ElementType;

  /**
   * Specifies the avatar element to be rendered within the icon-button.
   */
  avatar?: ReactElement;

  /**
   * If true, the icon-button will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the icon-button will have a circle shape.
   */
  rounded?: boolean;

  /**
   * The size of the icon-button.
   */
  size?: IconButtonSize;

  /**
   * The visual variant of the icon-button.
   */
  variant?: IconButtonVariant;

  /**
   * The content to be rendered inside the icon-button.
   */
  children?: ReactElement;
}

const avatarSize: Record<IconButtonSize, AvatarProps["size"]> = {
  sm: "xs",
  md: "sm",
  lg: "md",
};

const sizeMap: Record<IconButtonSize, string> = {
  sm: "w-7 h-7",
  md: "w-9 h-9",
  lg: "w-12 h-12",
};

const iconSizeMap: Record<IconButtonSize, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

// Base styles that are always applied
const baseStyles = [
  "inline-flex items-center justify-center",
  "transition-colors",
  "focus-visible:ring",
];

// Variant styles
const variantStyles = {
  primary: [
    "text-primary-600",
    "bg-primary-600/10",
    "hover:bg-primary-600/20",
    "active:bg-primary-600/30",
    "disabled:opacity-disabled disabled:text-black disabled:bg-black/10",
  ],
  secondary: [
    "text-secondary-600",
    "bg-secondary-600/10",
    "hover:bg-secondary-600/20",
    "active:bg-secondary-600/30",
    "disabled:opacity-disabled disabled:text-black disabled:bg-black/10",
  ],
  tertiary: [
    "text-black",
    "bg-black/10",
    "hover:bg-black/20",
    "active:bg-black/30",
    "disabled:opacity-disabled disabled:bg-black/10",
  ],
  plain: [
    "text-black",
    "hover:bg-black/10",
    "active:bg-black/20",
    "disabled:opacity-disabled disabled:bg-transparent",
  ],
  info: [
    "text-info-600",
    "bg-info-600/10",
    "hover:bg-info-600/20",
    "active:bg-info-600/30",
    "disabled:opacity-disabled disabled:text-black disabled:bg-black/10",
  ],
  success: [
    "text-success-600",
    "bg-success-600/10",
    "hover:bg-success-600/20",
    "active:bg-success-600/30",
    "disabled:opacity-disabled disabled:text-black disabled:bg-black/10",
  ],
  warning: [
    "text-warning-600",
    "bg-warning-600/10",
    "hover:bg-warning-600/20",
    "active:bg-warning-600/30",
    "disabled:opacity-disabled disabled:text-black disabled:bg-black/10",
  ],
  danger: [
    "text-danger-600",
    "bg-danger-600/10",
    "hover:bg-danger-600/20",
    "active:bg-danger-600/30",
    "disabled:opacity-disabled disabled:text-black disabled:bg-black/10",
  ],
  ghost: [
    "text-white",
    "hover:bg-white/30",
    "active:bg-white/40",
    "disabled:opacity-disabled disabled:bg-transparent",
  ],
};

export const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      as: Element = "button",
      avatar,
      rounded,
      size = "md",
      type,
      variant = "secondary",
      className,
      children,
      ...elemProps
    },
    ref
  ) => (
    <Element
      {...elemProps}
      ref={ref}
      className={cn(
        baseStyles,
        sizeMap[size],
        variantStyles[variant],
        avatar || rounded ? "rounded-full" : "rounded-input",
        className
      )}
      type={Element === "button" && type == null ? "button" : type}
    >
      {avatar &&
        isValidElement<AvatarProps>(avatar) &&
        cloneElement(avatar, {
          size: avatarSize[size],
        })}

      {!avatar && <Icon className={cn(iconSizeMap[size])}>{children}</Icon>}
    </Element>
  )
);

IconButton.displayName = "IconButton";
