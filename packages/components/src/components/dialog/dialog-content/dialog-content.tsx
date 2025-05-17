'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react';
import { fadeInStyle, fadeStyle } from '@papyrus-ui/style-utils';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';
import { Transition } from 'react-transition-group';

import { ANIMATION_DURATION } from '../dialog.constants';
import { DialogContext } from '../dialog.context';

import * as S from './dialog-content.css';

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: ANIMATION_DURATION,
};

export const DialogContent: FC<DialogContentProps> = ({
  children,
  className,
  ...props
}) => {
  const {
    context,
    getFloatingProps,
    isOpen,
    refs,
    size,
    labelId,
    descriptionId,
  } = useContext(DialogContext);

  return (
    <Transition
      in={isOpen}
      mountOnEnter
      nodeRef={refs.floating}
      timeout={TRANSITION_TIMEOUT}
      unmountOnExit
    >
      {(status) => (
        <FloatingPortal>
          <FloatingOverlay
            className={cn(
              S.root,
              S.rootSize[size],
              fadeStyle,
              status === 'entered' && fadeInStyle,
              className,
            )}
            data-testid="overlay"
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                ref={refs.setFloating}
                aria-describedby={descriptionId}
                aria-labelledby={labelId}
                className={cn(S.content, S.contentSize[size])}
                {...getFloatingProps(props)}
              >
                {children}
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </Transition>
  );
};
