import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';
import { ListItem } from '../list-item';

import { OList, OListProps } from './o-list';

const meta: Meta = {
  title: 'Typography/OList',
  component: OList,
};

const Template: StoryFn<OListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <OList {...args}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </OList>
  </Box>
);

export const Basic = Template.bind({});

export const SmallText = Template.bind({});

SmallText.args = {
  size: 'sm',
};

export const PrimaryFont = Template.bind({});

PrimaryFont.args = {
  fontVariant: 'primary',
};

export const SecondaryFont = Template.bind({});

SecondaryFont.args = {
  fontVariant: 'secondary',
};

export const BoldText = Template.bind({});

BoldText.args = {
  bold: true,
};

export const ColoredText = Template.bind({});

ColoredText.args = {
  color: 'success500',
};

export default meta;
