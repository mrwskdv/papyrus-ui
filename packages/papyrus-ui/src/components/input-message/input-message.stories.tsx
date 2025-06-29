import { Meta, StoryFn } from "@storybook/react";

import { InputMessage, InputMessageProps } from "./input-message";

const meta: Meta = {
  title: "Inputs/InputMessage",
  args: {
    children: "This is an input message",
  },
};

const Template: StoryFn<InputMessageProps> = (args) => (
  <InputMessage {...args} />
);

export const Basic = Template.bind({});

export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
  children: "This is an invalid message",
};

export default meta;
