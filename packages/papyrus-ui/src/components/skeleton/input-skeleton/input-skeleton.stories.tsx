import { Meta, StoryFn } from "@storybook/react";

import { InputSkeleton, InputSkeletonProps } from "./input-skeleton";

const meta: Meta<InputSkeletonProps> = {
  title: "Feedback/Skeleton/InputSkeleton",
  component: InputSkeleton,
  args: {
    size: "md",
  },
};

const Template: StoryFn<InputSkeletonProps> = (args) => (
  <div className="w-96">
    <InputSkeleton {...args} />
  </div>
);

export const Basic = Template.bind({});

export const SizeSm = Template.bind({});

SizeSm.args = {
  size: "sm",
};

export const SizeLg = Template.bind({});

SizeLg.args = {
  size: "lg",
};

export default meta;
