import { Meta, StoryFn } from "@storybook/react";

import { CaptionSkeleton, CaptionSkeletonProps } from "./caption-skeleton";

const meta: Meta<CaptionSkeletonProps> = {
  title: "Feedback/Skeleton/CaptionSkeleton",
  component: CaptionSkeleton,
  args: {
    className: "w-9",
  },
};

const Template: StoryFn<CaptionSkeletonProps> = (args) => (
  <CaptionSkeleton {...args} />
);

export const Basic = Template.bind({});

export default meta;
