import { Meta, StoryFn } from '@storybook/react';
import { BiCheck } from 'react-icons/bi';

import { Icon } from '../icon';
import { ListItem } from '../list-item';
import { UList } from '../u-list';

import { Marker, MarkerProps } from './marker';

const meta: Meta = {
  title: 'Typography/Marker',
  component: Marker,
  args: {
    children: (
      <Icon>
        <BiCheck />
      </Icon>
    ),
  },
};

export const Basic: StoryFn<MarkerProps> = (args) => (
  <UList type="none">
    <ListItem>
      <Marker {...args} />
      List Item
    </ListItem>
  </UList>
);

export default meta;
