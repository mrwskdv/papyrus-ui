import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../../box';

import { RangeSkeleton, RangeSkeletonProps } from './range-skeleton';

const meta: Meta<RangeSkeletonProps> = {
  title: 'Feedback/Skeleton/RangeSkeleton',
  component: RangeSkeleton,
};

const Template: StoryFn<RangeSkeletonProps> = (args) => (
  <Box w={96}>
    <RangeSkeleton {...args} />
  </Box>
);

export const Basic = Template.bind({});

export default meta;
