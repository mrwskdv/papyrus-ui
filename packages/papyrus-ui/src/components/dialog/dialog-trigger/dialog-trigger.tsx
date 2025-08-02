import { cloneElement, isValidElement, useContext } from 'react';
import type { FC, HTMLProps, ReactElement } from 'react';

import { DialogContext } from '../dialog.context';

export interface DialogTriggerProps {
  children: ReactElement;
}

export const DialogTrigger: FC<DialogTriggerProps> = ({ children }) => {
  const { getReferenceProps, refs } = useContext(DialogContext);

  if (isValidElement<HTMLProps<HTMLButtonElement>>(children)) {
    return cloneElement(children, {
      ref: node => {
        refs.setReference(node);
      },
      ...getReferenceProps(),
    });
  }

  return null;
};
