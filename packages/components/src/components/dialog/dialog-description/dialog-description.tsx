'use client';

import { useId } from '@floating-ui/react';
import { FC, memo, useContext, useLayoutEffect } from 'react';

import { Text, TextProps } from '../../text';
import { DialogContext } from '../dialog.context';

export type DialogDescriptionProps = TextProps;

export const DialogDescription: FC<DialogDescriptionProps> = memo(
  ({ children, ...props }: DialogDescriptionProps) => {
    const id = useId();
    const { setDescriptionId } = useContext(DialogContext);

    useLayoutEffect(() => {
      setDescriptionId(id);

      return () => {
        setDescriptionId(undefined);
      };
    }, [id, setDescriptionId]);

    return (
      <Text id={id} {...props}>
        {children}
      </Text>
    );
  },
);

DialogDescription.displayName = 'DialogDescription';
