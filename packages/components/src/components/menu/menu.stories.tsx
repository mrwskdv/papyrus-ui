import { atoms } from '@papyrus-ui/styles';
import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment, useState } from 'react';
import {
  BiCog,
  BiEnvelope,
  BiGridAlt,
  BiHome,
  BiLeftIndent,
  BiRightIndent,
  BiStats,
  BiSupport,
} from 'react-icons/bi';

import { Heading } from '../heading';
import { IconButton } from '../icon-button';

import { Menu, MenuProps } from './menu';

const variants: MenuProps['variant'][] = ['primary', 'secondary', 'ghost'];

const sizes: MenuProps['size'][] = ['sm', 'md', 'lg'];

export default {
  title: 'Navigation/Menu',
  component: Menu,
  args: {
    variant: 'primary',
  },
};

const Template: StoryFn<MenuProps> = (args) => (
  <Menu {...args}>
    <Menu.Item icon={<BiHome />} selected>
      Option 1
    </Menu.Item>

    <Menu.Item icon={<BiEnvelope />}>Option 2</Menu.Item>

    <Menu.Item disabled icon={<BiGridAlt />}>
      Option 3
    </Menu.Item>

    <Menu.Submenu icon={<BiStats />} label="Option 4">
      <Menu.Item>Option 4-1</Menu.Item>
      <Menu.Item>Option 4-2</Menu.Item>
      <Menu.Item>Option 4-3</Menu.Item>
    </Menu.Submenu>

    <Menu.Submenu icon={<BiCog />} label="Option 5">
      <Menu.Item>Option 5-1</Menu.Item>
      <Menu.Item>Option 5-2</Menu.Item>

      <Menu.Submenu label="Option 5-3">
        <Menu.Item>Option 5-3-1</Menu.Item>
        <Menu.Item>Option 5-3-2</Menu.Item>
        <Menu.Item>Option 5-3-3</Menu.Item>
      </Menu.Submenu>
    </Menu.Submenu>

    <Menu.Item danger icon={<BiSupport />}>
      Option 6
    </Menu.Item>
  </Menu>
);

export const Basic: StoryFn<MenuProps> = Template.bind({});

export const Size: StoryFn<MenuProps> = (args) => (
  <>
    {sizes.map((size, i) => (
      <Fragment key={i}>
        <Heading level={3} mb={1.5} mt={i > 0 ? 4 : 0}>
          {capitalize(size)}
        </Heading>

        <Template {...args} key={i} size={size} />
      </Fragment>
    ))}
  </>
);

export const Variant: StoryFn<MenuProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Fragment key={i}>
        <Heading level={3} mb={1.5} mt={i > 0 ? 4 : 0}>
          {capitalize(variant)}
        </Heading>

        <Template {...args} key={i} variant={variant} />
      </Fragment>
    ))}
  </>
);

export const Collapsed: StoryFn<MenuProps> = (args) => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapsedChange = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <IconButton
        className={atoms({
          m: 1,
        })}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <BiRightIndent /> : <BiLeftIndent />}
      </IconButton>

      <Template
        {...args}
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
      />
    </>
  );
};
