import { Meta, StoryFn } from "@storybook/react";

import { Skeleton, SkeletonProps } from "./skeleton";

const meta: Meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  args: {
    height: 32,
    width: 96,
    rounded: "lg",
  },
};

export const Basic: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;

export default meta;
