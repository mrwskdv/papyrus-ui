import { StoryFn, Meta } from '@storybook/react';

import { Box } from '../box';

import { Text, TextProps } from './text';

const meta: Meta = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'This is a text',
  },
};

export const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children:
    'This is a default text using the primary font-family and medium size.',
  size: 'md',
  fontVariant: 'primary',
};

export const SmallText = Template.bind({});

SmallText.args = {
  children: 'This is a small text using the primary font-family.',
  size: 'sm',
};

export const PrimaryFont = Template.bind({});

PrimaryFont.args = {
  children: 'This text uses the primary font-family.',
  size: 'md',
  fontVariant: 'primary',
};

export const SecondaryFont = Template.bind({});

SecondaryFont.args = {
  children: 'This text uses the secondary font-family.',
  size: 'md',
  fontVariant: 'secondary',
};

export const BoldText = Template.bind({});

BoldText.args = {
  children: 'This text is bold.',
  size: 'md',
  fontVariant: 'primary',
  bold: true,
};

export const TruncateLongText: StoryFn<TextProps> = (args) => (
  <Box maxWidth="sm">
    <Text {...args} />
  </Box>
);

TruncateLongText.args = {
  children:
    'This is a very long text that will be truncated with an ellipsis if it exceeds the width of its container.',
  size: 'md',
  fontVariant: 'primary',
  truncate: true,
};

export const ColoredText = Template.bind({});

ColoredText.args = {
  children: 'This text uses the color property from the theme.',
  size: 'md',
  fontVariant: 'primary',
  color: 'success500',
};

export const HighlightText = Template.bind({});

HighlightText.args = {
  children: 'This text is highlighted.',
  size: 'md',
  fontVariant: 'primary',
  highlight: true,
};

export default meta;
