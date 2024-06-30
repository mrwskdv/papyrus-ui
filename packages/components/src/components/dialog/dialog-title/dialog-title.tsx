'use client';

import { useId } from '@floating-ui/react';
import { truncateStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, memo, useContext, useLayoutEffect } from 'react';

import { DialogContext } from '../dialog.context';

import * as S from './dialog-title.css';

export type DialogTitleProps = HTMLAttributes<HTMLElement>;

export const DialogTitle: FC<DialogTitleProps> = memo(
  ({ children, className, ...props }: DialogTitleProps) => {
    const id = useId();
    const { setLabelId } = useContext(DialogContext);

    useLayoutEffect(() => {
      setLabelId(id);

      return () => {
        setLabelId(undefined);
      };
    }, [id, setLabelId]);

    return (
      <h1 className={cn(S.root, truncateStyle, className)} id={id} {...props}>
        {children}
      </h1>
    );
  },
);

DialogTitle.displayName = 'DialogTitle';
