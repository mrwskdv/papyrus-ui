import cn from "classnames";
import { HTMLAttributes } from "react";

import { InputBoxProps } from "../../input-box";
import { Skeleton } from "../skeleton";

export interface InputSkeletonProps
  extends Pick<InputBoxProps, "size">,
    Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  className?: string;
}

export const InputSkeleton = ({
  size = "md",
  className,
}: InputSkeletonProps) => {
  const sizeClasses: Record<string, string> = {
    sm: "min-h-7",
    md: "min-h-9",
    lg: "min-h-11",
  };

  return (
    <Skeleton
      className={cn("w-full rounded-md", sizeClasses[size], className)}
    />
  );
};

InputSkeleton.displayName = "InputSkeleton";
