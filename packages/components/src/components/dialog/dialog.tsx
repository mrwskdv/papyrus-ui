'use client';

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useTimeout } from '../../utils/use-timeout';

import { DialogBody } from './dialog-body';
import { DialogClose } from './dialog-close';
import { DialogContent } from './dialog-content';
import { DialogDescription } from './dialog-description';
import { DialogFooter } from './dialog-footer';
import { DialogHeader } from './dialog-header';
import { DialogTitle } from './dialog-title';
import { DialogTrigger } from './dialog-trigger';
import { ANIMATION_DURATION } from './dialog.constants';
import { DialogContext, DialogContextType } from './dialog.context';
import { DialogSize } from './dialog.types';

export interface DialogProps {
  isOpen?: boolean;
  size?: DialogSize;
  onClose?: () => void;
  onAfterClose?: () => void;
  children?: ReactNode;
}

const DialogComponent: FC<DialogProps> = ({
  isOpen,
  size = 'md',
  onClose,
  onAfterClose,
  children,
}) => {
  const { setTimeout, clearTimeout } = useTimeout();
  // Set initial isOpen state as false to have an animation on first isOpen
  const [isOpenState, setIsOpenState] = useState(false);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();
  const isControlled = isOpen !== undefined;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setIsOpenState(nextOpen);
      } else if (!nextOpen) {
        onClose?.();
      }
    },
    [isControlled, onClose],
  );

  const { refs, context } = useFloating({
    open: isOpenState,
    onOpenChange: setOpen,
  });

  const click = useClick(context, {
    enabled: !isControlled,
  });

  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const dialogCxt = useMemo<DialogContextType>(
    () => ({
      context,
      descriptionId,
      isOpen: isOpenState,
      labelId,
      refs,
      size,
      close,
      getFloatingProps,
      getReferenceProps,
      setDescriptionId,
      setLabelId,
    }),
    [
      context,
      descriptionId,
      isOpenState,
      labelId,
      refs,
      size,
      close,
      getFloatingProps,
      getReferenceProps,
    ],
  );

  useEffect(() => {
    if (isControlled) {
      setIsOpenState(isOpen);
    }
  }, [isControlled, isOpen]);

  useEffect(() => {
    if (!isOpenState) {
      setTimeout(() => {
        onAfterClose?.();
      }, ANIMATION_DURATION);
    }

    return () => {
      clearTimeout();
    };
  }, [clearTimeout, onAfterClose, isOpen, isOpenState, setTimeout]);

  return (
    <DialogContext.Provider value={dialogCxt}>
      {children}
    </DialogContext.Provider>
  );
};

DialogComponent.displayName = 'Dialog';

export const Dialog = Object.assign(DialogComponent, {
  Content: DialogContent,
  Close: DialogClose,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Title: DialogTitle,
  Trigger: DialogTrigger,
  Description: DialogDescription,
});
