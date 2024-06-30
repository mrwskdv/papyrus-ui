'use client';

import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from '@floating-ui/react';
import { fadeInStyle, fadeStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { useContext } from 'react';
import { Transition } from 'react-transition-group';

import { Flex } from '../../flex';
import { DropdownMenuContext } from '../dropdown-menu.context';

export interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialFocus?: number;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  initialFocus = 0,
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
          <FloatingPortal>
            <FloatingFocusManager
              context={context}
              initialFocus={initialFocus}
              modal={false}
            >
              <Flex
                ref={refs.setFloating}
                bg="white"
                border={1}
                borderColor="neutral100"
                className={cn(
                  fadeStyle,
                  status === 'entered' && fadeInStyle,
                  className,
                )}
                flexDirection="column"
                maxHeight={80}
                maxWidth="xs"
                py={0.5}
                rounded="lg"
                shadow="lg"
                style={floatingStyles}
                zIndex={10}
                {...getFloatingProps(props)}
              >
                {children}
              </Flex>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </Transition>
    </FloatingList>
  );
};

DropdownMenuContent.displayName = 'DropdownMenuContent';
