import { Meta, StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';
import { BiBell } from 'react-icons/bi';

import { Avatar } from '../avatar';
import { Box } from '../box';
import { Heading } from '../heading';

import { Alert, AlertProps, AlertVariant } from './alert';

const meta: Meta = {
  title: 'Feedback/Alert',
  args: {
    variant: 'primary',
    message: 'Alert message',
    children: 'Alert description',
  },
};

const Template: StoryFn<AlertProps> = (args) => (
  <Box w={80}>
    <Alert {...args} />
  </Box>
);

export const Basic = Template.bind({});

const VARIANTS: AlertVariant[] = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];

export const Variants: StoryFn<AlertProps> = (args) => (
  <Box w={80}>
    {VARIANTS.map((variant, i) => (
      <Fragment key={i}>
        <Heading level={3} mb={1.5} mt={i > 0 ? 4 : 0}>
          {capitalize(variant)}
        </Heading>

        <Template
          {...args}
          message={`${capitalize(variant)} Alert`}
          variant={variant}
        />
      </Fragment>
    ))}
  </Box>
);

export const WithCloseButton = Template.bind({});

WithCloseButton.args = {
  onClose: () => {
    // Do nothing
  },
};

export const WithCustomIcon = Template.bind({});

WithCustomIcon.args = {
  icon: <BiBell />,
};

export const WithAvatar = Template.bind({});

WithAvatar.args = {
  icon: (
    <Avatar size="md">
      <img alt="Profile" src="https://i.pravatar.cc/300" />
    </Avatar>
  ),
};

export default meta;
