import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';

import { Avatar, AvatarProps, AvatarSize } from './avatar';

const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    placeholder: 'Peter Griffin',
  },
};

export function Basic(args: AvatarProps) {
  return (
    <Flex>
      <Box mr={2}>
        <Avatar {...args}>
          <img alt="Profile" src="https://i.pravatar.cc/300" />
        </Avatar>
      </Box>

      <Box mr={2}>
        <Avatar {...args} bg="accent400" />
      </Box>

      <Box>
        <Avatar {...args} icon={<Icon name="user" />} />
      </Box>
    </Flex>
  );
}

export function Sizes(args: AvatarProps) {
  return (
    <Flex alignItems="center">
      {sizes.map((size, i) => (
        <Box key={i} ml={i && 2}>
          <Avatar {...args} size={size}>
            <img alt="Profile" src="https://i.pravatar.cc/300" />
          </Avatar>
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: AvatarProps) {
  return (
    <Flex>
      <Box mr={2}>
        <Avatar {...args} rounded>
          <img alt="Profile" src="https://i.pravatar.cc/300" />
        </Avatar>
      </Box>

      <Box>
        <Avatar {...args} icon={<Icon name="user" />} rounded />
      </Box>
    </Flex>
  );
}
