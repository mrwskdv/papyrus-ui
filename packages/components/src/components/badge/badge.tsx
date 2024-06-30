import { atoms, Atoms, MarginAtoms } from '@papyrus-ui/styles';
import cn from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';

import { Box } from '../box';

import * as S from './badge.css';

type BadgePosition = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

export interface BadgeProps extends MarginAtoms {
  /**
   * Background color of the badge.
   */
  bg?: Atoms['bg'];

  /**
   * The content to be displayed within the badge. Can be a numerical value, text, or any ReactNode.
   */
  content?: ReactNode;

  /**
   * The children of the badge component. Usually, the element to which the badge is applied.
   */
  children?: ReactNode;

  /**
   * Additional class name(s) to be applied to the badge component.
   */
  className?: string;

  /**
   * If set to true, displays a dot without any numerical value within the badge.
   */
  dot?: boolean;

  /**
   * The maximum count to be displayed in the badge before showing an overflow indicator.
   */
  overflowCount?: number;

  /**
   * The horizontal offset of the badge from its default position in pixels.
   */
  offsetX?: number;

  /**
   * The vertical offset of the badge from its default position in pixels.
   */
  offsetY?: number;

  /**
   * The position of the badge relative to its parent element.
   */
  position?: BadgePosition;

  /**
   * If set to true, displays the badge even when the count is zero.
   */
  showZero?: boolean;

  /**
   * The title of the badge. This is used for accessibility purposes.
   */
  title?: string;
}

const transformStyle: Record<BadgePosition, string> = {
  'top-start': 'translate(-50%, -50%)',
  'top-end': 'translate(50%, -50%)',
  'bottom-start': 'translate(-50%, 50%)',
  'bottom-end': 'translate(50%, 50%)',
};

const transformOriginStyle: Record<BadgePosition, string> = {
  'top-start': 'bottom left',
  'top-end': 'bottom right',
  'bottom-start': 'top left',
  'bottom-end': 'top right',
};

export const Badge: FC<BadgeProps> = ({
  bg = 'primary500',
  children,
  content,
  dot = false,
  offsetX = 0,
  offsetY = 0,
  overflowCount = 99,
  position = 'top-end',
  showZero,
  title,
  ...props
}) => {
  const top = position.includes('top') ? 0 - offsetY : undefined;
  const bottom = position.includes('bottom') ? 0 - offsetY : undefined;
  const insetInlineStart = position.includes('start') ? 0 - offsetX : undefined;
  const insetInlineEnd = position.includes('end') ? 0 - offsetX : undefined;

  const positionStyle: CSSProperties = {
    position: 'absolute',
    top,
    bottom,
    insetInlineStart,
    insetInlineEnd,
    transform: transformStyle[position],
    transformOrigin: transformOriginStyle[position],
  };

  const badgeContent =
    typeof content === 'number' && content > overflowCount
      ? `${overflowCount}+`
      : content;

  const badgeStyle: CSSProperties | undefined = children
    ? positionStyle
    : undefined;

  return (
    <Box as="span" display="inline-block" position="relative" {...props}>
      {children}

      {typeof badgeContent === 'object' && (
        <Box display="block" style={badgeStyle} title={title}>
          {badgeContent}
        </Box>
      )}

      {dot &&
        typeof badgeContent !== 'object' &&
        (badgeContent !== 0 || showZero) && (
          <Box
            bg={bg}
            data-testid="badge-dot"
            display="block"
            height={2}
            rounded="full"
            style={badgeStyle}
            title={title}
            width={2}
          />
        )}

      {!dot &&
        typeof badgeContent !== 'object' &&
        (badgeContent !== 0 || showZero) && (
          <span
            className={cn(S.counter, atoms({ bg }))}
            style={badgeStyle}
            title={title}
          >
            {badgeContent}
          </span>
        )}
    </Box>
  );
};

Badge.displayName = 'Badge';
