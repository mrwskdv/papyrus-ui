import { Meta, StoryFn } from '@storybook/react';

import { UList } from '../u-list';

import { ListItem, ListItemProps } from './list-item';

const meta: Meta = {
  title: 'Typography/ListItem',
  component: ListItem,
  args: {
    children: 'List Item',
  },
};

export const Basic: StoryFn<ListItemProps> = (args) => (
  <UList>
    <ListItem {...args} />
  </UList>
);

export default meta;
