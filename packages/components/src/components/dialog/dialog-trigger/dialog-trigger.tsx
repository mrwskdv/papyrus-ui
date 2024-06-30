import {
  cloneElement,
  HTMLProps,
  isValidElement,
  ReactElement,
  useContext,
} from 'react';

import { DialogContext } from '../dialog.context';

export interface DialogTriggerProps {
  children: ReactElement;
}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({ children }) => {
  const { getReferenceProps, refs } = useContext(DialogContext);

  if (isValidElement<HTMLProps<HTMLButtonElement>>(children)) {
    return cloneElement(children, {
      ref: refs.setReference,
      ...getReferenceProps(),
    });
  }

  return null;
};
