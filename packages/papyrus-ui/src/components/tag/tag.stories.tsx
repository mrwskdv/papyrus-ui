import { StoryFn } from "@storybook/react";
import { toUpper } from "lodash";

import { Tag, TagProps, TagSize, TagVariant } from "./tag";

const sizes: TagSize[] = ["sm", "md"];

const variants: TagVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "danger",
  "ghost",
];

export default {
  title: "Data Display/Tag",
  component: Tag,

  args: {
    children: "tag title",
  },
};

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Basic = Template.bind({});

export const Sizes: StoryFn<TagProps> = (args) => (
  <div className="flex items-center -mt-2 -mx-1 flex-wrap">
    {sizes.map((size, i) => (
      <div key={i} className="mt-2 px-1">
        <Tag {...args} size={size}>
          {toUpper(size)}
        </Tag>
      </div>
    ))}
  </div>
);

export const Variants: StoryFn<TagProps> = (args) => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-wrap justify-center -mt-4 -mx-2">
      {variants
        .filter((variant) => variant !== "ghost")
        .map((variant, i) => (
          <div key={i} className="mt-2 px-1">
            <Tag {...args} variant={variant}>
              {toUpper(variant)}
            </Tag>
          </div>
        ))}
    </div>
    <div className="bg-gradient-to-br from-secondary-800 to-primary-900 py-2">
      <div className="flex flex-wrap justify-center -mt-4 -mx-2">
        {variants
          .filter((variant) => variant === "ghost")
          .map((variant, i) => (
            <div key={i} className="mt-4 px-2">
              <Tag {...args} variant={variant}>
                {toUpper(variant)}
              </Tag>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export const Rounded = Template.bind({});

Rounded.args = {
  rounded: true,
};

export const Clickable = Template.bind({});

Clickable.args = {
  onClick: () => {
    // do nothing
  },
  children: "Clickable Tag",
};

export const Removable = Template.bind({});

Removable.args = {
  removable: true,
  onClick: () => {
    // do nothing
  },
  children: "Removable Tag",
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  removable: true,
  onClick: () => {
    // do nothing
  },
  children: "Disabled Tag",
};
