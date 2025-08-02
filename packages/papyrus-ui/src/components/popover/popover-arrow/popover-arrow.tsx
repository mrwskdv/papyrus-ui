import { FloatingArrow } from '@floating-ui/react';
import type { FloatingArrowProps } from '@floating-ui/react';
import { useContext } from 'react';
import type { FC } from 'react';

import { PopoverContext } from '../popover.context';

export type PopoverArrowProps = Omit<FloatingArrowProps, 'context' | 'ref'>;

export const PopoverArrow: FC<PopoverArrowProps> = props => {
  const { arrowRef, context } = useContext(PopoverContext);
  return <FloatingArrow {...props} ref={arrowRef} context={context} />;
};
