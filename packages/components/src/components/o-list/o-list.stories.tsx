import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';
import { ListItem } from '../list-item';

import { OList, OListProps } from './o-list';

const meta: Meta = {
  title: 'Typography/OList',
  component: OList,
};

export const Basic: StoryFn<OListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <OList {...args}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </OList>
  </Box>
);

export default meta;
