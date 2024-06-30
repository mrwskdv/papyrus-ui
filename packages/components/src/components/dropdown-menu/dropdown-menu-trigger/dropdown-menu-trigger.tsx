'use client';

import { cloneElement, isValidElement, useCallback, useContext } from 'react';

import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuTriggerProps {
  children: React.ReactElement;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
}: DropdownMenuTriggerProps) => {
  const { refs, getReferenceProps, setHasFocusInside } =
    useContext(DropdownMenuContext);

  const handleFocus = useCallback(() => {
    setHasFocusInside(false);
  }, [setHasFocusInside]);

  return isValidElement<React.HTMLProps<HTMLButtonElement>>(children)
    ? cloneElement(children, {
        ref: refs.setReference,
        ...getReferenceProps({
          onFocus: handleFocus,
        }),
      })
    : null;
};
