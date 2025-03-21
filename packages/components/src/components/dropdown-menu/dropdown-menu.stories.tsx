import { StoryFn } from '@storybook/react';
import {
  BiCog,
  BiDotsVerticalRounded,
  BiEnvelope,
  BiGridAlt,
  BiHome,
  BiStats,
  BiSupport,
} from 'react-icons/bi';

import { Box } from '../box';
import { IconButton } from '../icon-button';

import { DropdownMenu, DropdownMenuProps } from './dropdown-menu';

export default {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
  args: {
    variant: 'primary',
  },
};

export const Basic: StoryFn<DropdownMenuProps> = (args) => (
  <Box h={64}>
    <DropdownMenu {...args}>
      <DropdownMenu.Trigger>
        <IconButton>
          <BiDotsVerticalRounded />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item icon={<BiHome />}>Option 1</DropdownMenu.Item>

        <DropdownMenu.Item icon={<BiEnvelope />}>Option 2</DropdownMenu.Item>

        <DropdownMenu.Item disabled icon={<BiGridAlt />}>
          Option 3
        </DropdownMenu.Item>

        <DropdownMenu.Submenu icon={<BiStats />} label="Option 4">
          <DropdownMenu.Item>Option 4-1</DropdownMenu.Item>
          <DropdownMenu.Item>Option 4-2</DropdownMenu.Item>
          <DropdownMenu.Item>Option 4-3</DropdownMenu.Item>
        </DropdownMenu.Submenu>

        <DropdownMenu.Submenu icon={<BiCog />} label="Option 5">
          <DropdownMenu.Item>Option 5-1</DropdownMenu.Item>
          <DropdownMenu.Item>Option 5-2</DropdownMenu.Item>

          <DropdownMenu.Submenu label="Option 5-3">
            <DropdownMenu.Item>Option 5-3-1</DropdownMenu.Item>
            <DropdownMenu.Item>Option 5-3-2</DropdownMenu.Item>
            <DropdownMenu.Item>Option 5-3-3</DropdownMenu.Item>
          </DropdownMenu.Submenu>
        </DropdownMenu.Submenu>

        <DropdownMenu.Item danger icon={<BiSupport />}>
          Option 6
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  </Box>
);
