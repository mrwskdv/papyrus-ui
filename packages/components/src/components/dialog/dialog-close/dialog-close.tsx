'use client';

import { interactiveStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, memo, useContext } from 'react';
import { BiX } from 'react-icons/bi';

import { Icon } from '../../icon';
import { DialogContext } from '../dialog.context';

export type DialogCloseProps = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'color' | 'children'
>;

export const DialogClose: FC<DialogCloseProps> = memo(
  ({ className, ...props }) => {
    const { close } = useContext(DialogContext);

    return (
      <Icon
        {...props}
        className={cn(interactiveStyle, className)}
        color="neutral900"
        fontSize="xl"
        onClick={close}
      >
        <BiX />
      </Icon>
    );
  },
);

DialogClose.displayName = 'DialogClose';
