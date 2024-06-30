'use client';

import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../dialog.context';

import * as S from './dialog-header.css';

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  title?: string;
}

export const DialogHeader: FC<DialogHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div className={cn(S.root, S.rootSize[size], className)} {...props}>
      {children}
    </div>
  );
};
