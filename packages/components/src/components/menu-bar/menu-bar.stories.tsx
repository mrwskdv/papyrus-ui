import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';
import {
  BiCog,
  BiEnvelope,
  BiGridAlt,
  BiHome,
  BiStats,
  BiSupport,
} from 'react-icons/bi';

import { Box } from '../box';
import { Divider } from '../divider';
import { Heading } from '../heading';

import { MenuBar, MenuBarProps } from './menu-bar';

const variants: MenuBarProps['variant'][] = ['primary', 'secondary', 'ghost'];

const sizes: MenuBarProps['size'][] = ['sm', 'md', 'lg'];

export default {
  title: 'Navigation/MenuBar',
  component: MenuBar,
  args: {
    variant: 'primary',
  },
};

const Template: StoryFn<MenuBarProps> = (args) => (
  <Box height={64}>
    <MenuBar {...args}>
      <MenuBar.Item icon={<BiHome />} selected>
        Option 1
      </MenuBar.Item>

      <MenuBar.Item icon={<BiEnvelope />}>Option 2</MenuBar.Item>

      <MenuBar.Item disabled icon={<BiGridAlt />}>
        Option 3
      </MenuBar.Item>

      <MenuBar.Submenu icon={<BiStats />} label="Option 4">
        <MenuBar.Item>Option 4-1</MenuBar.Item>
        <MenuBar.Item>Option 4-2</MenuBar.Item>

        <MenuBar.Submenu label="Option 5-3">
          <MenuBar.Item>Option 4-3-1</MenuBar.Item>
          <MenuBar.Item>Option 4-3-2</MenuBar.Item>
          <MenuBar.Item>Option 4-3-3</MenuBar.Item>
        </MenuBar.Submenu>
      </MenuBar.Submenu>

      <MenuBar.Submenu icon={<BiCog />} label="Option 5">
        <MenuBar.Item>Option 5-1</MenuBar.Item>
        <MenuBar.Item>Option 5-2</MenuBar.Item>
        <MenuBar.Item>Option 5-3</MenuBar.Item>
      </MenuBar.Submenu>

      <MenuBar.Item danger icon={<BiSupport />}>
        Option 6
      </MenuBar.Item>
    </MenuBar>
    <Divider color="neutral200" />
  </Box>
);

export const Basic: StoryFn<MenuBarProps> = Template.bind({});

export const Size: StoryFn<MenuBarProps> = (args) => (
  <>
    {sizes.map((size, i) => (
      <Fragment key={i}>
        <Heading as="h3" mb={1.5} mt={i > 0 ? 4 : 0}>
          {capitalize(size)}
        </Heading>

        <Template {...args} key={i} size={size} />
      </Fragment>
    ))}
  </>
);

export const Variant: StoryFn<MenuBarProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Fragment key={i}>
        <Heading as="h3" mb={1.5} mt={i > 0 ? 4 : 0}>
          {capitalize(variant)}
        </Heading>

        <Template {...args} key={i} variant={variant} />
      </Fragment>
    ))}
  </>
);

export const Collapsed = Template.bind({});

Collapsed.args = {
  collapsed: true,
};
