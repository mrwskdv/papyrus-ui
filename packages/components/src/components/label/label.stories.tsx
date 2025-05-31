import { Meta, StoryFn } from '@storybook/react';

import { Label, LabelProps } from './label';

const meta: Meta = {
  title: 'Typography/Label',
  component: Label,
};

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'This is a label',
};

export default meta;
