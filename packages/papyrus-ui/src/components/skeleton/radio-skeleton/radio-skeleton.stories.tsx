import { Meta, StoryFn } from '@storybook/react';

import { TextSkeleton } from '../text-skeleton';

import { RadioSkeleton, RadioSkeletonProps } from './radio-skeleton';

const meta: Meta<RadioSkeletonProps> = {
  title: 'Feedback/Skeleton/RadioSkeleton',
  component: RadioSkeleton,
  args: {
    children: (
      <>
        <TextSkeleton className="w-40" />
        <TextSkeleton className="w-40" />
      </>
    ),
  },
};

const Template: StoryFn<RadioSkeletonProps> = (args) => (
  <RadioSkeleton {...args} />
);

export const Basic = Template.bind({});

export default meta;
