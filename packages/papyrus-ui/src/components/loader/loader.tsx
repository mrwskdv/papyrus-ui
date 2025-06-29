import cn from "classnames";
import { FC } from "react";
import { BiLoaderAlt } from "react-icons/bi";

import { Icon, IconProps } from "../icon";

export type LoaderProps = Omit<IconProps, "children">;

export const Loader: FC<LoaderProps> = ({ className, ...props }) => (
  <Icon className={cn("animate-spin animate-slow", className)} {...props}>
    <BiLoaderAlt />
  </Icon>
);
