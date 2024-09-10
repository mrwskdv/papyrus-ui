'use client';

import { useId } from '@floating-ui/react';
import cn from 'classnames';
import { FC, HTMLAttributes, memo, useContext, useLayoutEffect } from 'react';

import { Heading } from '../../heading';
import { DialogContext } from '../dialog.context';

import * as S from './dialog-title.css';

export type DialogTitleProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'size'
>;

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
      <Heading
        as="h1"
        className={cn(S.root, className)}
        id={id}
        level={5}
        truncate
        {...props}
      >
        {children}
      </Heading>
    );
  },
);

DialogTitle.displayName = 'DialogTitle';
