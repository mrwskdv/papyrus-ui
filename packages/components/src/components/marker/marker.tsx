import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './marker.css';

export type MarkerProps = HTMLAttributes<HTMLSpanElement>;

export const Marker = forwardRef<HTMLSpanElement, MarkerProps>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn(S.root, className)} {...props}>
      {children}
    </span>
  ),
);

Marker.displayName = 'Marker';
