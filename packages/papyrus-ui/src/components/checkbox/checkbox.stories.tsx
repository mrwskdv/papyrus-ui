import { Meta, StoryFn } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./checkbox";

const meta: Meta<CheckboxProps> = {
  title: "Inputs/Checkbox",
  component: Checkbox,

  args: {
    name: "checkbox",
    value: "true",
    id: "checkbox",
    children: "Checkbox",
  },
};

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  id: "checkbox-disabled",

  disabled: true,
};

export default meta;
