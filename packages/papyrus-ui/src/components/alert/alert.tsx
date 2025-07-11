import cn from "classnames";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { IconBaseProps } from "react-icons";
import {
  BiCheckCircle,
  BiError,
  BiErrorCircle,
  BiInfoCircle,
  BiX,
} from "react-icons/bi";

import { Heading } from "../heading";
import { Icon } from "../icon";
import { Text } from "../text";

export type AlertVariant =
  | "primary"
  | "secondary"
  | "info"
  | "danger"
  | "warning"
  | "success";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  icon?: ReactElement;
  message: string;
  variant?: AlertVariant;
  onClose?: () => void;
  children?: ReactNode;
}

const iconByVariant: Record<AlertVariant, ComponentType<IconBaseProps>> = {
  primary: BiInfoCircle,
  secondary: BiInfoCircle,
  info: BiInfoCircle,
  danger: BiErrorCircle,
  warning: BiError,
  success: BiCheckCircle,
};

const rootVariantClasses = {
  primary: "border-primary-300 bg-primary-50 text-primary-600",
  secondary: "border-secondary-300 bg-secondary-50 text-secondary-600",
  info: "border-info-300 bg-info-50 text-info-600",
  success: "border-success-300 bg-success-50 text-success-600",
  warning: "border-warning-300 bg-warning-50 text-warning-600",
  danger: "border-danger-300 bg-danger-50 text-danger-600",
};

const iconVariantClasses = {
  primary: "text-primary-500",
  secondary: "text-secondary-500",
  info: "text-info-500",
  success: "text-success-500",
  warning: "text-warning-500",
  danger: "text-danger-500",
};

export const Alert: FC<AlertProps> = ({
  closeLabel = "Close",
  icon,
  message,
  variant = "secondary",
  className,
  role = "alert",
  onClose,
  children,
  ...props
}) => {
  const IconComponent = iconByVariant[variant];

  return (
    <div
      {...props}
      className={cn(
        "relative flex items-center rounded-lg border gap-3 ps-4 py-3 overflow-hidden",
        rootVariantClasses[variant],
        onClose ? "pe-8" : "pe-4",
        className
      )}
      role={role}
    >
      <Icon className={cn("text-3xl", iconVariantClasses[variant])}>
        {icon ?? <IconComponent size="1em" />}
      </Icon>

      <div className="flex-1 overflow-hidden">
        {children ? (
          <>
            <Heading as="div" className="mb-1" level={5}>
              {message}
            </Heading>
            <Text as="div" className="mt-1 text-neutral-900" size="sm">
              {children}
            </Text>
          </>
        ) : (
          <Text as="div">{message}</Text>
        )}
      </div>

      {onClose && (
        <Icon
          aria-label={closeLabel}
          className="absolute top-3 end-3 text-md text-neutral-800 hover:text-neutral-500"
          role="button"
          tabIndex={0}
          onClick={onClose}
        >
          <BiX size="1rem" />
        </Icon>
      )}
    </div>
  );
};
