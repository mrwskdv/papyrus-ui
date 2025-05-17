import { atoms, Atoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { startCase } from 'lodash';
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  ImgHTMLAttributes,
  isValidElement,
  ReactElement,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Text } from '../text';

import * as S from './avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Background color for the avatar.
   */
  bg?: Atoms['bg'];

  /**
   * image element to be rendered within the avatar.
   */
  children?: ReactElement | null;

  /**
   * Additional class name(s) to apply to the avatar component.
   */
  className?: string;

  /**
   * icon to be rendered within the avatar.
   */
  icon?: ReactElement;

  /**
   * Placeholder text to display in case the avatar content is not available.
   */
  placeholder?: string;

  /**
   * Size of the avatar.
   */
  size?: AvatarSize;
}

function formatText(str = ''): string {
  return startCase(str)
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

export const Avatar: FC<AvatarProps> = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      bg = 'primary400',
      icon,
      placeholder,
      size = 'md',
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        S.root,
        S.rootSize[size],
        atoms({
          bg,
        }),
        className,
      )}
      {...props}
    >
      {!children && !icon && (
        <Text
          as="span"
          bold
          className={cn(S.text, S.textSize[size])}
          color="white"
          whiteSpace="nowrap"
        >
          {formatText(placeholder)}
        </Text>
      )}

      {!children &&
        isValidElement<IconBaseProps>(icon) &&
        cloneElement(icon, {
          className: cn(S.icon, S.iconSize[size], icon.props.className),
        })}

      {children &&
        isValidElement<ImgHTMLAttributes<HTMLImageElement>>(children) &&
        cloneElement(children, {
          className: cn(S.image, children.props.className),
        })}
    </span>
  ),
);

Avatar.displayName = 'Avatar';
