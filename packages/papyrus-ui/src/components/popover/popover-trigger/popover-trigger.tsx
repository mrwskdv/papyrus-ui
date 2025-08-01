'use client';

import { cloneElement, isValidElement, useContext } from 'react';
import type { FC, HTMLProps, ReactElement } from 'react';

import { PopoverContext } from '../popover.context';

export interface DialogTriggerProps {
  children: ReactElement;
}

export const PopoverTrigger: FC<DialogTriggerProps> = ({ children }) => {
  const { getReferenceProps, refs } = useContext(PopoverContext);

  if (isValidElement<HTMLProps<Element>>(children)) {
    return cloneElement(children, {
      ref: node => {
        refs.setReference(node);
      },
      ...getReferenceProps(),
    });
  }

  return null;
};
