import type { Meta, StoryFn } from '@storybook/react';

import { Skeleton } from './skeleton';
import type { SkeletonProps } from './skeleton';

const meta: Meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {
    className: 'w-64 h-10 rounded-lg',
  },
};

export const Basic: StoryFn<SkeletonProps> = args => <Skeleton {...args} />;

export default meta;
