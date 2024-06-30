import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';
import { Icon } from '../icon';
import { ListItem } from '../list-item';
import { Marker } from '../marker';
import { Text } from '../text';

import { UList, UListProps } from './u-list';

const meta: Meta = {
  title: 'Typography/UList',
  component: UList,
};

export const Basic: StoryFn<UListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <UList {...args}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>
  </Box>
);

export const Types: StoryFn<UListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <Text as="h3" fontWeight="semiBold" lineHeight="tight" mb={3}>
      Disc
    </Text>

    <UList {...args} mb={8} type="disc">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>

    <Text as="h3" fontWeight="semiBold" lineHeight="tight" mb={3}>
      Dash
    </Text>

    <UList {...args} mb={8} type="dash">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>

    <Text as="h3" fontWeight="semiBold" lineHeight="tight" mb={3}>
      None
    </Text>

    <UList {...args} type="none">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>
  </Box>
);

export const WithIcons: StoryFn<UListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <UList {...args} type="none">
      <ListItem>
        <Marker role="none">
          <Icon name="grid-alt" />
        </Marker>
        Item 1
      </ListItem>
      <ListItem>
        <Marker role="none">
          <Icon name="stats" />
        </Marker>
        Item 2
      </ListItem>
      <ListItem>
        <Marker role="none">
          <Icon name="cog" />
        </Marker>
        Item 3
      </ListItem>
    </UList>
  </Box>
);

export default meta;
