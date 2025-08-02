'use client';

import cn from 'classnames';
import { useContext } from 'react';
import type { FC, HTMLAttributes, ReactNode } from 'react';

import { DialogContext } from '../dialog.context';

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
    <div
      className={cn('flex-1', size === 'sm' ? 'px-4' : 'py-3 px-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};
