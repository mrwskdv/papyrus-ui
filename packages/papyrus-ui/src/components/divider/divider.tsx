import cn from 'classnames';
import type { FC, ElementType } from 'react';

export type DividerDirection = 'horizontal' | 'vertical';

export interface DividerProps {
  as?: ElementType;
  direction?: DividerDirection;
  className?: string;
}

const directionClass: Record<DividerDirection, string> = {
  horizontal: 'w-full h-px',
  vertical: 'h-full w-px',
};

export const Divider: FC<DividerProps> = ({
  as: Element = 'div',
  direction = 'horizontal',
  className,
  ...props
}) => (
  <Element
    {...props}
    className={cn(
      className?.includes('bg-') ? '' : 'bg-current',
      directionClass[direction],
      className,
    )}
  />
);
