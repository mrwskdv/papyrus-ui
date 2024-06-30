'use client';

import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../dialog.context';

import * as S from './dialog-footer.css';

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const DialogFooter: FC<DialogFooterProps> = ({
  className,
  children,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div className={cn(S.root, S.rootSize[size], className)} {...props}>
      {children}
    </div>
  );
};
