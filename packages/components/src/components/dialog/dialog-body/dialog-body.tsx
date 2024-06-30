'use client';

import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../dialog.context';

import * as S from './dialog-body.css';

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DialogBody: FC<DialogBodyProps> = ({
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
