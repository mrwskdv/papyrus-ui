import { Atoms, atoms, MarginAtoms, partitionAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { FC } from 'react';

import * as S from './divider.css';

export type DividerDirection = 'horizontal' | 'vertical';

export interface DividerProps extends MarginAtoms {
  color?: Atoms['color'];
  direction?: DividerDirection;
  className?: string;
}

export const Divider: FC<DividerProps> = ({
  direction = 'horizontal',
  className,
  ...props
}) => {
  const [atomsProps, restProps] = partitionAtoms(props);
  return (
    <div
      className={cn(
        S.root,
        S.rootDirection[direction],
        atoms(atomsProps),
        className,
      )}
      {...restProps}
    />
  );
};
