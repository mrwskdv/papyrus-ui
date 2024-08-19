import { atoms } from '@papyrus-ui/styles';
import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment, useCallback, useState } from 'react';

import { Icon } from '../icon';
import { IconButton } from '../icon-button';
import { Text } from '../text';

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
    <Menu.Item icon={<Icon name="home" />} selected>
      Option 1
    </Menu.Item>

    <Menu.Item icon={<Icon name="envelope" />}>Option 2</Menu.Item>

    <Menu.Item disabled icon={<Icon name="grid-alt" />}>
      Option 3
    </Menu.Item>

    <Menu.Submenu icon={<Icon name="stats" />} label="Option 4">
      <Menu.Item>Option 4-1</Menu.Item>
      <Menu.Item>Option 4-2</Menu.Item>
      <Menu.Item>Option 4-3</Menu.Item>
    </Menu.Submenu>

    <Menu.Submenu icon={<Icon name="cog" />} label="Option 5">
      <Menu.Item>Option 5-1</Menu.Item>
      <Menu.Item>Option 5-2</Menu.Item>

      <Menu.Submenu label="Option 5-3">
        <Menu.Item>Option 5-3-1</Menu.Item>
        <Menu.Item>Option 5-3-2</Menu.Item>
        <Menu.Item>Option 5-3-3</Menu.Item>
      </Menu.Submenu>
    </Menu.Submenu>

    <Menu.Item danger icon={<Icon name="support" />}>
      Option 6
    </Menu.Item>
  </Menu>
);

export const Basic: StoryFn<MenuProps> = Template.bind({});

export const Size: StoryFn<MenuProps> = (args) => (
  <>
    {sizes.map((size, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })}
          fontFamily="secondary"
          fontSize="2xl"
          fontWeight="semiBold"
          letterSpacing="wide"
          lineHeight="tight"
        >
          {capitalize(size)}
        </Text>

        <Template {...args} key={i} size={size} />
      </Fragment>
    ))}
  </>
);

export const Variant: StoryFn<MenuProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })}
          fontFamily="secondary"
          fontSize="2xl"
          fontWeight="semiBold"
          letterSpacing="wide"
          lineHeight="tight"
        >
          {capitalize(variant)}
        </Text>

        <Template {...args} key={i} variant={variant} />
      </Fragment>
    ))}
  </>
);

export const Collapsed: StoryFn<MenuProps> = (args) => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapsedChange = useCallback((collapsed: boolean) => {
    setCollapsed(collapsed);
  }, []);

  return (
    <>
      <IconButton
        className={atoms({
          m: 1,
        })}
        onClick={() => setCollapsed(!collapsed)}
      >
        <Icon name={collapsed ? 'right-indent' : 'left-indent'} />
      </IconButton>

      <Template
        {...args}
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
      />
    </>
  );
};
