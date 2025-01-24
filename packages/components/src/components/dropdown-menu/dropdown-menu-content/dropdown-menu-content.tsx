'use client';

import { FloatingFocusManager, FloatingList } from '@floating-ui/react';
import { FC, HTMLAttributes, useContext } from 'react';
import { Transition } from 'react-transition-group';

import { Listbox } from '../../listbox';
import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuContentProps
  extends HTMLAttributes<HTMLDivElement> {
  initialFocus?: number;
  returnFocus?: boolean;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

export const DropdownMenuContent: FC<DropdownMenuContentProps> = ({
  children,
  initialFocus = 0,
  returnFocus = true,
  ...props
}) => {
  const {
    context,
    elementsRef,
    floatingStyles,
    getFloatingProps,
    isOpen,
    labelsRef,
    refs,
  } = useContext(DropdownMenuContext);

  return (
    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
      <Transition
        in={isOpen}
        mountOnEnter
        timeout={TRANSITION_TIMEOUT}
        unmountOnExit
      >
        {(status) => (
          <FloatingFocusManager
            context={context}
            initialFocus={initialFocus}
            modal={false}
            returnFocus={returnFocus}
          >
            <Listbox
              ref={refs.setFloating}
              maxHeight={80}
              maxWidth="xs"
              style={floatingStyles}
              visible={status === 'entered'}
              {...getFloatingProps(props)}
            >
              {children}
            </Listbox>
          </FloatingFocusManager>
        )}
      </Transition>
    </FloatingList>
  );
};

DropdownMenuContent.displayName = 'DropdownMenuContent';
