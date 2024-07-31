import { Atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../flex';

import * as S from './toast-container.css';

export type ToastContainerPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export interface ToastContainerProps
  extends Partial<
      Pick<Atoms, 'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'ps' | 'pe' | 'px' | 'py'>
    >,
    HTMLAttributes<HTMLDivElement> {
  placement?: ToastContainerPlacement;
  className?: string;
  children?: ReactNode;
}

/**
 * @deprecated
 * Use Snackbar instead
 */
export const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>(
  ({ children, className, placement = 'top-end', ...props }, ref) => (
    <Flex
      ref={ref}
      alignItems="center"
      className={cn(S.root, S.rootPlacement[placement], className)}
      flexDirection="column"
      maxWidth="full"
      position="fixed"
      width="max"
      zIndex={50}
      {...props}
    >
      {children}
    </Flex>
  ),
);

ToastContainer.displayName = 'ToastContainer';
