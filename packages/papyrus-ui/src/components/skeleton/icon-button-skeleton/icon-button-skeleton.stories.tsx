import { Meta, StoryFn } from '@storybook/react';

import {
  IconButtonSkeleton,
  IconButtonSkeletonProps,
} from './icon-button-skeleton';

const meta: Meta<IconButtonSkeletonProps> = {
  title: 'Feedback/Skeleton/IconButtonSkeleton',
  component: IconButtonSkeleton,
  args: {
    rounded: false,
    size: 'md',
  },
};

const Template: StoryFn<IconButtonSkeletonProps> = (args) => (
  <IconButtonSkeleton {...args} />
);

export const Basic = Template.bind({});

export const SizeSm = Template.bind({});

SizeSm.args = {
  size: 'sm',
};

export const SizeLg = Template.bind({});

SizeLg.args = {
  size: 'lg',
};

export const Rounded = Template.bind({});

Rounded.args = {
  rounded: true,
};

export default meta;
