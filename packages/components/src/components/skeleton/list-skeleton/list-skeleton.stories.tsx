import { Meta, StoryFn } from '@storybook/react';

import { ListItemSkeleton } from '../list-item-skeleton';

import { ListSkeleton, ListSkeletonProps } from './list-skeleton';

const meta: Meta = {
  title: 'Feedback/Skeleton/ListSkeleton',
  component: ListSkeleton,
  args: {
    fontVariant: 'primary',
    size: 'md',
  },
};

const Template: StoryFn<ListSkeletonProps> = (args) => (
  <ListSkeleton {...args}>
    <ListItemSkeleton className="w-96" />
    <ListItemSkeleton className="w-96" />
  </ListSkeleton>
);

export const Basic = Template.bind({});

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
};

export default meta;
