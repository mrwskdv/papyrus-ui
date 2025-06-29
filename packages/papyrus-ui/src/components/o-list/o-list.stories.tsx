import { Meta, StoryFn } from "@storybook/react";

import { OList, OListProps } from "./o-list";

const meta: Meta = {
  title: "Typography/OList",
  component: OList,
};

const Template: StoryFn<OListProps> = (args) => (
  <div className="min-w-0 sm:min-w-96">
    <OList {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </OList>
  </div>
);

export const Basic = Template.bind({});

export const SmallText = Template.bind({});

SmallText.args = {
  size: "sm",
};

export const PrimaryFont = Template.bind({});

PrimaryFont.args = {
  fontVariant: "primary",
};

export const SecondaryFont = Template.bind({});

SecondaryFont.args = {
  fontVariant: "secondary",
};

export const BoldText = Template.bind({});

BoldText.args = {
  bold: true,
};

export default meta;
