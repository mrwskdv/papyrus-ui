import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import { TransitionGroup } from 'react-transition-group';

import { SnackbarItem } from './snackbar-item';
import { SnackbarContext } from './snackbar.context';
import * as S from './snackbar.css';
import { SnackbarPlacement } from './snackbar.types';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  placement?: SnackbarPlacement;
  className?: string;
  children?: ReactNode;
}

export const SnackbarComponent: FC<SnackbarProps> = ({
  children,
  className,
  placement = 'top-end',
  ...props
}) => {
  const contextValue = useMemo(
    () => ({
      placement,
    }),
    [placement],
  );

  return (
    <SnackbarContext.Provider value={contextValue}>
      <TransitionGroup
        {...props}
        className={cn(S.root, S.rootPlacement[placement], className)}
      >
        {children}
      </TransitionGroup>
    </SnackbarContext.Provider>
  );
};

export const Snackbar = Object.assign(SnackbarComponent, {
  Item: SnackbarItem,
});
