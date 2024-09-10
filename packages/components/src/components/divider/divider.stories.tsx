import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';
import { Flex } from '../flex';
import { Heading } from '../heading';

import { Divider, DividerProps } from './divider';

const meta: Meta = {
  title: 'Layout/Divider',
};

export const Basic: StoryFn<DividerProps> = (args) => (
  <Box width={80}>
    <Divider {...args} />
  </Box>
);

export const Direction: StoryFn<DividerProps> = (args) => (
  <>
    <Heading level={3} mb={4}>
      Horizontal
    </Heading>

    <Box width={80}>
      <Divider {...args} direction="horizontal" />
    </Box>

    <Heading level={3} mb={4} mt={8}>
      Vertical
    </Heading>

    <Flex height={48} justifyContent="center">
      <Divider {...args} direction="vertical" />
    </Flex>
  </>
);
export default meta;
