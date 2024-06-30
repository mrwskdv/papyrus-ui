import { Atoms } from '@papyrus-ui/styles';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../flex';

export interface InputActionProps
  extends HTMLAttributes<HTMLSpanElement>,
    Pick<Atoms, 'ms' | 'me'> {
  children?: ReactNode;
}

export const InputAction: FC<InputActionProps> = ({
  children,
  ...props
}): JSX.Element => (
  <Flex
    alignItems="center"
    justifyContent="center"
    lineHeight="none"
    minWidth={6}
    {...props}
  >
    {children}
  </Flex>
);
