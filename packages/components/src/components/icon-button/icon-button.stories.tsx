import { BiSolidLike } from 'react-icons/bi';

import { Avatar } from '../avatar';
import { Box } from '../box';
import { Flex } from '../flex';

import {
  IconButton,
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './icon-button';

const variants: IconButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'plain',
  'info',
  'success',
  'warning',
  'danger',
  'ghost',
];

const sizes: IconButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/IconButton',
  component: IconButton,

  args: {
    children: <BiSolidLike />,
  },
};

export function Basic(args: IconButtonProps) {
  return <IconButton {...args} />;
}

export function Variants(args: IconButtonProps) {
  return (
    <Flex flexWrap="wrap" mt="-4" mx="-2">
      {variants.map((variant, i) => (
        <Box key={i} mt={4} px={2} title={`${variant} variant IconButton`}>
          <IconButton
            {...args}
            title={`${variant} variant IconButton`}
            variant={variant}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function Sizes(args: IconButtonProps) {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-4" mx="-2">
      {sizes.map((size, i) => (
        <Box key={i} mt={4} px={2}>
          <IconButton {...args} size={size} title={`${size} size IconButton`} />
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: IconButtonProps) {
  return <IconButton {...args} rounded />;
}

export function WithAvatar(args: IconButtonProps) {
  return (
    <IconButton
      {...args}
      avatar={
        <Avatar>
          <img alt="Profile" src="https://i.pravatar.cc/300" />
        </Avatar>
      }
      rounded
    />
  );
}
