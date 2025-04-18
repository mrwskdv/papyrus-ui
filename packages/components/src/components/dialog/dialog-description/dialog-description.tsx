'use client';

import { useId } from '@floating-ui/react';
import { FC, useContext, useLayoutEffect } from 'react';

import { Text, TextProps } from '../../text';
import { DialogContext } from '../dialog.context';

export type DialogDescriptionProps = TextProps;

export const DialogDescription: FC<DialogDescriptionProps> = ({
  children,
  ...props
}) => {
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
};
