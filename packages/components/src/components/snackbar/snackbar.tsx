import { atoms, Atoms, partitionAtoms } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import { TransitionGroup } from 'react-transition-group';

import { SnackbarItem } from './snackbar-item';
import { SnackbarContext } from './snackbar.context';
import * as S from './snackbar.css';
import { SnackbarPlacement } from './snackbar.types';

export interface SnackbarProps
  extends Partial<
      Pick<Atoms, 'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'ps' | 'pe' | 'px' | 'py'>
    >,
    HTMLAttributes<HTMLDivElement> {
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

  const [atomsProps, elementProps] = partitionAtoms(props);

  return (
    <SnackbarContext.Provider value={contextValue}>
      <TransitionGroup
        {...elementProps}
        className={cn(
          S.root,
          S.rootPlacement[placement],
          atoms(atomsProps),
          className,
        )}
      >
        {children}
      </TransitionGroup>
    </SnackbarContext.Provider>
  );
};

export const Snackbar = Object.assign(SnackbarComponent, {
  Item: SnackbarItem,
});
