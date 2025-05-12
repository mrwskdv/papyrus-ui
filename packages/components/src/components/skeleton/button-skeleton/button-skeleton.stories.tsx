import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../../box';

import { ButtonSkeleton, ButtonSkeletonProps } from './button-skeleton';

const meta: Meta<ButtonSkeletonProps> = {
  title: 'Feedback/Skeleton/ButtonSkeleton',
  component: ButtonSkeleton,
  args: {
    block: false,
    rounded: false,
    size: 'md',
  },
};

const Template: StoryFn<ButtonSkeletonProps> = (args) => (
  <ButtonSkeleton {...args} />
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

export const Block: StoryFn<ButtonSkeletonProps> = (args) => (
  <Box w={96}>
    <Template {...args} block />{' '}
  </Box>
);

export const Rounded = Template.bind({});

Rounded.args = {
  rounded: true,
};

export default meta;
