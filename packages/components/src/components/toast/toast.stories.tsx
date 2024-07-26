import { atoms } from '@papyrus-ui/styles';
import { StoryFn } from '@storybook/react';

import { Avatar } from '../avatar';
import { Icon } from '../icon';

import { Toast, ToastProps, ToastVariant } from './toast';

const variants: ToastVariant[] = ['primary', 'success', 'warning', 'danger'];

export default {
  title: 'Feedback/Toast',
  component: Toast,

  args: {
    message: 'This is a toast message',
    children: 'This is a toast description',
    onDismiss: () => {
      // Do nothing
    },
  },
};

const Template: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Basic = Template.bind({});

export const Variants: StoryFn<ToastProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Toast
        {...args}
        key={i}
        className={atoms({ mb: 2 })}
        message={`This is a ${variant} message`}
        variant={variant}
      />
    ))}
  </>
);

export const WithAction = Template.bind({});

WithAction.args = {
  actionLabel: 'View More',
  onActionClick: () => {
    // Do nothing
  },
};

export const WithCustomIcon: StoryFn<ToastProps> = Template.bind({});

WithCustomIcon.args = {
  icon: <Icon name="bell" />,
};

export const WithAvatar: StoryFn<ToastProps> = Template.bind({});

WithAvatar.args = {
  icon: (
    <Avatar rounded size="md">
      <img alt="Profile" src="https://i.pravatar.cc/300" />
    </Avatar>
  ),
};
