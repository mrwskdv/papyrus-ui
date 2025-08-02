import type { Meta, StoryFn } from '@storybook/react';

import { LabelSkeleton } from './label-skeleton';
import type { LabelSkeletonProps } from './label-skeleton';

const meta: Meta<LabelSkeletonProps> = {
  title: 'Feedback/Skeleton/LabelSkeleton',
  component: LabelSkeleton,
  args: {
    className: 'w-20',
  },
};

const Template: StoryFn<LabelSkeletonProps> = args => (
  <LabelSkeleton {...args} />
);

export const Basic = Template.bind({});

export default meta;
