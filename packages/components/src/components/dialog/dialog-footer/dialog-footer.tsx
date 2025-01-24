'use client';

import { atoms, Atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../dialog.context';

import * as S from './dialog-footer.css';

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justify?: Atoms['justifyContent'];
  children: ReactNode;
}

export const DialogFooter: FC<DialogFooterProps> = ({
  className,
  justify,
  children,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div
      className={cn(
        S.root,
        S.rootSize[size],
        atoms({ justifyContent: justify }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
