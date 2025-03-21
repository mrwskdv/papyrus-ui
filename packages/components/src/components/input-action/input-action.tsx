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
    align="center"
    className={cn(S.root, className)}
    justify="center"
    minW={6}
    {...props}
  >
    {children}
  </Flex>
);
