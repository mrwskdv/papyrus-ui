import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { fadeInStyle, fadeStyle } from '@papyrus-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { Transition } from 'react-transition-group';

import { useMergeRefs } from '../../../utils/use-merge-refs';
import { Box } from '../../box';
import { PopoverContext } from '../popover.context';

export type PopoverContentProps = HTMLAttributes<HTMLDivElement>;

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, style, children, ...props }, ref) => {
    const { context, floatingStyles, modal, open, refs, getFloatingProps } =
      useContext(PopoverContext);

    const meredRef = useMergeRefs(ref, refs.setFloating);

    return (
      <Transition
        in={open}
        mountOnEnter
        timeout={TRANSITION_TIMEOUT}
        unmountOnExit
      >
        {(status) => (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={modal}>
              <Box
                ref={meredRef}
                className={cn(
                  fadeStyle,
                  status === 'entered' && fadeInStyle,
                  className,
                )}
                style={{
                  ...floatingStyles,
                  ...style,
                }}
                zIndex={40}
                {...getFloatingProps(props)}
              >
                {children}
              </Box>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </Transition>
    );
  },
);

PopoverContent.displayName = 'PopoverContent';
