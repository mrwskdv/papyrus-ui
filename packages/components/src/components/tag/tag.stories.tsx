import { StoryFn } from '@storybook/react';
import { toUpper } from 'lodash';

import { Tag, TagProps, TagSize, TagVariant } from './tag';

const sizes: TagSize[] = ['sm', 'md'];

const variants: TagVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'ghost',
];

export default {
  title: 'Data Display/Tag',
  component: Tag,

  args: {
    children: 'tag title',
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
  <div className="flex items-center -mt-2 -mx-1 flex-wrap">
    {variants.map((variant, i) => (
      <div key={i} className="mt-2 px-1">
        <Tag {...args} variant={variant}>
          {toUpper(variant)}
        </Tag>
      </div>
    ))}
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
  children: 'Clickable Tag',
};

export const Removable = Template.bind({});

Removable.args = {
  removable: true,
  onClick: () => {
    // do nothing
  },
  children: 'Removable Tag',
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  removable: true,
  onClick: () => {
    // do nothing
  },
  children: 'Disabled Tag',
};
