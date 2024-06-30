import { Meta, StoryFn } from '@storybook/react';

import { Icon } from '../icon';
import { ListItem } from '../list-item';
import { UList } from '../u-list';

import { Marker, MarkerProps } from './marker';

const meta: Meta = {
  title: 'Typography/Marker',
  component: Marker,
  args: {
    children: <Icon name="check" />,
  },
};

export const Basic: StoryFn<MarkerProps> = (args) => (
  <UList>
    <ListItem>
      <Marker {...args} />
      List Item
    </ListItem>
  </UList>
);

export default meta;
