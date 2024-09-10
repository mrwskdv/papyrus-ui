import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';

import { Caption, CaptionProps } from './caption';

const meta: Meta = {
  title: 'Typography/Caption',
  component: Caption,
};

const Template: StoryFn<CaptionProps> = (args) => <Caption {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'This is a caption',
};

export const TruncateLongText: StoryFn<CaptionProps> = (args) => (
  <Box maxWidth="sm">
    <Caption {...args} />
  </Box>
);

TruncateLongText.args = {
  children:
    'This is a very long text that will be truncated with an ellipsis if it exceeds the width of its container.',
  truncate: true,
};

export const ColoredText = Template.bind({});

ColoredText.args = {
  color: 'neutral500',
  children: 'This text uses the color property from the theme.',
};

export const HighlightText = Template.bind({});

HighlightText.args = {
  children: 'This text is highlighted.',
  highlight: true,
};

export default meta;
