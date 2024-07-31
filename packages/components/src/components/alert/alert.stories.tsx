import { Meta, StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';

import { Avatar } from '../avatar';
import { Box } from '../box';
import { Icon } from '../icon';
import { Text } from '../text';

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
  <Box width={80}>
    <Alert {...args} />
  </Box>
);

export const Basic = Template.bind({});

const VARIANTS: AlertVariant[] = ['primary', 'success', 'warning', 'danger'];

export const Variants: StoryFn<AlertProps> = (args) => (
  <Box width={80}>
    {VARIANTS.map((variant, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          fontSize="xl"
          fontWeight="bold"
          letterSpacing="tight"
          lineHeight="tight"
          mb={4}
          mt={i > 0 ? 8 : 0}
        >
          {capitalize(variant)}
        </Text>

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
  icon: <Icon name="bell" />,
};

export const WithAvatar = Template.bind({});

WithAvatar.args = {
  icon: (
    <Avatar rounded size="md">
      <img alt="Profile" src="https://i.pravatar.cc/300" />
    </Avatar>
  ),
};

export default meta;
