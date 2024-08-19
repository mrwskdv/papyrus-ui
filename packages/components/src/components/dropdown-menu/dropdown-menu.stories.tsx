import { StoryFn } from '@storybook/react';

import { Box } from '../box';
import { Icon } from '../icon';
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
  <Box height={64}>
    <DropdownMenu {...args}>
      <DropdownMenu.Trigger>
        <IconButton>
          <Icon name="dots-vertical-rounded" />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item icon={<Icon name="home" />}>
          Option 1
        </DropdownMenu.Item>

        <DropdownMenu.Item icon={<Icon name="envelope" />}>
          Option 2
        </DropdownMenu.Item>

        <DropdownMenu.Item disabled icon={<Icon name="grid-alt" />}>
          Option 3
        </DropdownMenu.Item>

        <DropdownMenu.Submenu icon={<Icon name="stats" />} label="Option 4">
          <DropdownMenu.Item>Option 4-1</DropdownMenu.Item>
          <DropdownMenu.Item>Option 4-2</DropdownMenu.Item>
          <DropdownMenu.Item>Option 4-3</DropdownMenu.Item>
        </DropdownMenu.Submenu>

        <DropdownMenu.Submenu icon={<Icon name="cog" />} label="Option 5">
          <DropdownMenu.Item>Option 5-1</DropdownMenu.Item>
          <DropdownMenu.Item>Option 5-2</DropdownMenu.Item>

          <DropdownMenu.Submenu label="Option 5-3">
            <DropdownMenu.Item>Option 5-3-1</DropdownMenu.Item>
            <DropdownMenu.Item>Option 5-3-2</DropdownMenu.Item>
            <DropdownMenu.Item>Option 5-3-3</DropdownMenu.Item>
          </DropdownMenu.Submenu>
        </DropdownMenu.Submenu>

        <DropdownMenu.Item danger icon={<Icon name="support" />}>
          Option 6
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  </Box>
);
