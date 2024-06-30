import {
  autoUpdate,
  flip,
  offset as offsetFn,
  OffsetOptions,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { PopoverContent } from './popover-content';
import { PopoverTrigger } from './popover-trigger';
import { PopoverContext, PopoverContextType } from './popover.context';

export interface PopoverProps {
  initialOpen?: boolean;
  offset?: OffsetOptions;
  open?: boolean;
  overflowPadding?: number;
  modal?: boolean;
  placement?: Placement;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const DEFAULT_OFFSET: OffsetOptions = {
  mainAxis: 5,
  alignmentAxis: -5,
};

const PopoverComponent: React.FC<PopoverProps> = ({
  initialOpen = false,
  offset = DEFAULT_OFFSET,
  open,
  overflowPadding = 4,
  modal = false,
  placement = 'bottom',
  onOpenChange,
  children,
}) => {
  const [openState, setOpenState] = useState(() => open ?? initialOpen);
  const isControlled = open !== undefined;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (isControlled) {
        onOpenChange?.(nextOpen);
      } else {
        setOpenState(nextOpen);
      }
    },
    [isControlled, onOpenChange],
  );

  const { context, floatingStyles, refs } = useFloating({
    placement,
    open: openState,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offsetFn(offset),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: overflowPadding,
      }),
      shift({ padding: overflowPadding }),
    ],
  });

  const click = useClick(context, {
    enabled: !isControlled,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const closePopover = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const popoverCxt = useMemo<PopoverContextType>(
    () => ({
      context,
      closePopover,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      open: openState,
      modal,
      refs,
    }),
    [
      closePopover,
      context,
      floatingStyles,
      getFloatingProps,
      getReferenceProps,
      modal,
      openState,
      refs,
    ],
  );

  useEffect(() => {
    if (open !== undefined) {
      setOpenState(open);
    }
  }, [open, setOpen]);

  return (
    <PopoverContext.Provider value={popoverCxt}>
      {children}
    </PopoverContext.Provider>
  );
};

export const Popover = Object.assign(PopoverComponent, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
