import { StoryFn } from "@storybook/react";

import { Radio, RadioProps } from "./radio";

export default {
  title: "Inputs/Radio",
  component: Radio,

  args: {
    name: "radio",
    value: "true",
    id: "radio",
    children: "Radio",
  },
};

const Template: StoryFn<RadioProps> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
