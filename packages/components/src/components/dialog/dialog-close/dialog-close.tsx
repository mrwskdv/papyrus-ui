'use client';

import { FC, HTMLAttributes, memo, useContext } from 'react';
import { BiX } from 'react-icons/bi';

import { IconButton } from '../../icon-button';
import { DialogContext } from '../dialog.context';

export type DialogCloseProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'children'
>;

export const DialogClose: FC<DialogCloseProps> = memo((props) => {
  const { close } = useContext(DialogContext);

  return (
    <IconButton rounded variant="plain" onClick={close} {...props}>
      <BiX />
    </IconButton>
  );
});

DialogClose.displayName = 'DialogClose';
