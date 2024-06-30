import { Meta, StoryFn } from '@storybook/react';

import { Skeleton, SkeletonProps } from './skeleton';

const meta: Meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {
    height: 4,
    width: 96,
    rounded: 'sm',
  },
};

export const Basic: StoryFn = (args: SkeletonProps) => <Skeleton {...args} />;

export default meta;
