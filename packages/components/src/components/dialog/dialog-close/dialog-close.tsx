'use client';

import cn from 'classnames';
import { FC, MouseEvent, useContext, ComponentType } from 'react';
import { BiX } from 'react-icons/bi';

import { ButtonProps } from '../../button';
import { Icon } from '../../icon';
import { DialogContext } from '../dialog.context';

export interface DialogCloseProps extends Omit<ButtonProps, 'as' | 'href'> {
  as?: ComponentType<ButtonProps>;
}

export const DialogClose: FC<DialogCloseProps> = ({
  as: Element,
  className,
  onClick,
  children,
  ...props
}) => {
  const { close } = useContext(DialogContext);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    close();
  };

  if (Element) {
    return (
      <Element {...props} className={className} onClick={handleClick}>
        {children}
      </Element>
    );
  }

  return (
    <Icon
      {...props}
      className={cn(
        'text-xl text-neutral-900 transition-colors cursor-pointer hover:text-neutral-600',
        className,
      )}
      color="neutral900"
      onClick={handleClick}
    >
      <BiX />
    </Icon>
  );
};
