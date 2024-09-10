import { Meta, StoryFn } from '@storybook/react';
import { BiCog, BiGridAlt, BiStats } from 'react-icons/bi';

import { Box } from '../box';
import { ListItem } from '../list-item';
import { Marker } from '../marker';

import { UList, UListProps } from './u-list';

const meta: Meta = {
  title: 'Typography/UList',
  component: UList,
};

const Template: StoryFn<UListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <UList {...args}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>
  </Box>
);

export const Basic = Template.bind({});

export const DiscType = Template.bind({});

DiscType.args = {
  type: 'disc',
};

export const DashType = Template.bind({});

DashType.args = {
  type: 'dash',
};

export const NoneType = Template.bind({});

NoneType.args = {
  type: 'none',
};

export const WithIcons: StoryFn<UListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <UList {...args} type="none">
      <ListItem>
        <Marker role="none">
          <BiGridAlt />
        </Marker>
        Item 1
      </ListItem>
      <ListItem>
        <Marker role="none">
          <BiStats />
        </Marker>
        Item 2
      </ListItem>
      <ListItem>
        <Marker role="none">
          <BiCog />
        </Marker>
        Item 3
      </ListItem>
    </UList>
  </Box>
);

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
