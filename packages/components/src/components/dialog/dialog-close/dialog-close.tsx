'use client';

import { FC, HTMLAttributes, memo, useContext } from 'react';

import { Icon } from '../../icon';
import { IconButton } from '../../icon-button';
import { DialogContext } from '../dialog.context';

export type DialogCloseProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'children'
>;

export const DialogClose: FC<DialogCloseProps> = memo((props) => {
  const { close } = useContext(DialogContext);

  return (
    <IconButton rounded size="sm" variant="tertiary" onClick={close} {...props}>
      <Icon name="x" />
    </IconButton>
  );
});

DialogClose.displayName = 'DialogClose';
