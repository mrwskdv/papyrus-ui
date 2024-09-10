import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';

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

export const TruncateLongText: StoryFn<LabelProps> = (args) => (
  <Box maxWidth="sm">
    <Label {...args} />
  </Box>
);

TruncateLongText.args = {
  display: 'block',
  children:
    'This is a very long text that will be truncated with an ellipsis if it exceeds the width of its container.',
  truncate: true,
};

export const ColoredText = Template.bind({});

ColoredText.args = {
  color: 'success500',
  children: 'This text uses the color property from the theme.',
};

export const HighlightText = Template.bind({});

HighlightText.args = {
  children: 'This text is highlighted.',
  highlight: true,
};

export default meta;
