import cn from 'classnames';
import { FC } from 'react';

export type DividerDirection = 'horizontal' | 'vertical';

export interface DividerProps {
  direction?: DividerDirection;
  className?: string;
}

const directionClass: Record<DividerDirection, string> = {
  horizontal: 'w-full h-px',
  vertical: 'h-full w-px',
};

export const Divider: FC<DividerProps> = ({
  direction = 'horizontal',
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn('bg-current', directionClass[direction], className)}
  />
);
