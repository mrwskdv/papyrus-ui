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
    variant: 'secondary',
  },
};

const Template: StoryFn<MenuProps> = (args) => (
  <div className={args.collapsed ? '' : 'w-48'}>
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
  </div>
);

export const Basic: StoryFn<MenuProps> = Template.bind({});

export const Size: StoryFn<MenuProps> = (args) => (
  <>
    {sizes.map((size, i) => (
      <Fragment key={i}>
        <Heading className={`mb-1.5 mt-${i > 0 ? '6' : '0'}`} level={3}>
          {capitalize(size)}
        </Heading>

        <Template {...args} key={i} size={size} />
      </Fragment>
    ))}
  </>
);

export const Variant: StoryFn<MenuProps> = (args) => (
  <div className="flex flex-col gap-4">
    {variants.map((variant, i) => (
      <div
        key={i}
        className={
          variant === 'ghost'
            ? 'bg-gradient-to-br from-secondary-800 to-primary-900 px-2 py-4'
            : 'px-2'
        }
      >
        <Heading
          className={variant === 'ghost' ? 'text-white mb-3' : 'mb-3'}
          level={3}
        >
          {capitalize(variant)}
        </Heading>

        <Template {...args} key={i} variant={variant} />
      </div>
    ))}
  </div>
);

export const Collapsed: StoryFn<MenuProps> = (args) => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapsedChange = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <IconButton
        className="m-1"
        variant="secondary"
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
