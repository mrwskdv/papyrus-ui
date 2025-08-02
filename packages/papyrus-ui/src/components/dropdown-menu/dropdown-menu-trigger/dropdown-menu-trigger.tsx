'use client';

import { cloneElement, isValidElement, useContext } from 'react';
import type { FC, HTMLProps, ReactElement } from 'react';

import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuTriggerProps {
  children: ReactElement;
}

export const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({
  children,
}: DropdownMenuTriggerProps) => {
  const { refs, getReferenceProps, setActiveIndex } =
    useContext(DropdownMenuContext);

  const handleFocus = () => {
    setActiveIndex(null);
  };

  return isValidElement<HTMLProps<HTMLButtonElement>>(children)
    ? cloneElement(children, {
        ref: node => {
          refs.setReference(node);
        },
        ...getReferenceProps({
          onFocus: handleFocus,
        }),
      })
    : null;
};
