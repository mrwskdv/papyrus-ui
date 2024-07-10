'use client';

import {
  cloneElement,
  FC,
  HTMLProps,
  isValidElement,
  ReactElement,
  useCallback,
  useContext,
} from 'react';

import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuTriggerProps {
  children: ReactElement;
}

export const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ({
  children,
}: DropdownMenuTriggerProps) => {
  const { refs, getReferenceProps, setActiveIndex } =
    useContext(DropdownMenuContext);

  const handleFocus = useCallback(() => {
    setActiveIndex(null);
  }, [setActiveIndex]);

  return isValidElement<HTMLProps<HTMLButtonElement>>(children)
    ? cloneElement(children, {
        ref: refs.setReference,
        ...getReferenceProps({
          onFocus: handleFocus,
        }),
      })
    : null;
};
