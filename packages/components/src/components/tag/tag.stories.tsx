import { toUpper } from 'lodash';

import { Box } from '../box';
import { Flex } from '../flex';

import { Tag, TagProps, TagSize } from './tag';

const sizes: TagSize[] = ['sm', 'md'];

export default {
  title: 'Data Display/Tag',
  component: Tag,

  args: {
    children: 'tag title',
  },
};

export function Basic(args: TagProps) {
  return <Tag {...args} />;
}

export function Sizes(args: TagProps) {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-2" mx="-1">
      {sizes.map((size, i) => (
        <Box key={i} mt={2} px={1}>
          <Tag {...args} size={size}>
            {toUpper(size)}
          </Tag>
        </Box>
      ))}
    </Flex>
  );
}

export function Color(args: TagProps) {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-2" mx="-1">
      <Box mt={2} px={1}>
        <Tag {...args}>Default</Tag>
      </Box>

      <Box mt={2} px={1}>
        <Tag {...args} bg="highlight" color="white">
          Accent
        </Tag>
      </Box>

      <Box mt={2} px={1}>
        <Tag
          {...args}
          bg="neutral50"
          borderColor="neutral200"
          color="neutral700"
        >
          Secondary
        </Tag>
      </Box>
    </Flex>
  );
}

export function Rounded(args: TagProps) {
  return (
    <Tag {...args} rounded>
      Rounded tag
    </Tag>
  );
}

export function Clickable(args: TagProps) {
  return (
    <Tag {...args} onClick={() => console.log('tag clicked')}>
      Clickable tag
    </Tag>
  );
}

export function Removable(args: TagProps) {
  return (
    <Tag {...args} removable onClick={() => console.log('Remove')}>
      Removable tag
    </Tag>
  );
}
