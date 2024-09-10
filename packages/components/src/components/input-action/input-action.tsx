import { Atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../flex';

import * as S from './input-action.css';

export interface InputActionProps
  extends HTMLAttributes<HTMLSpanElement>,
    Pick<Atoms, 'ms' | 'me'> {
  children?: ReactNode;
}

export const InputAction: FC<InputActionProps> = ({
  className,
  children,
  ...props
}): JSX.Element => (
  <Flex
    alignItems="center"
    className={cn(S.root, className)}
    justifyContent="center"
    minWidth={6}
    {...props}
  >
    {children}
  </Flex>
);
