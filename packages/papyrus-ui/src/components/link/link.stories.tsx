import { StoryFn } from "@storybook/react";
import type { Meta } from "@storybook/react";

import { Text } from "../text";

import { Link, LinkProps } from "./link";

const meta: Meta = {
  title: "Typography/Link",
  component: Link,
  args: {
    href: "#",
    children: "This is a link",
  },
};

const Template: StoryFn<LinkProps> = (args: LinkProps) => (
  <Text>
    <Link {...args} />
  </Text>
);

export const Basic = Template.bind({});

export const AsButton = Template.bind({});

AsButton.args = {
  as: "button",
  href: undefined,
  children: "This is a button",
};

export const Disabled = Template.bind({});

Disabled.args = {
  as: "button",
  href: undefined,
  disabled: true,
  children: "This is a button",
};

export default meta;
