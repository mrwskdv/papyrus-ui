import { Meta, StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';

import { Box } from '../box';
import { Heading } from '../heading';

import {
  InputMessage,
  InputMessageProps,
  InputMessageVariant,
} from './input-message';

const meta: Meta = {
  title: 'Inputs/InputMessage',
  args: {
    variant: 'primary',
    children: 'This is an input message',
  },
};

const Template: StoryFn<InputMessageProps> = (args) => (
  <InputMessage {...args} />
);

export const Basic = Template.bind({});

const VARIANTS: InputMessageVariant[] = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];

export const Variants: StoryFn<InputMessageProps> = (args) => (
  <Box width={80}>
    {VARIANTS.map((variant, i) => (
      <Fragment key={i}>
        <Heading level={3} mb={1.5} mt={i > 0 ? 4 : 0}>
          {capitalize(variant)}
        </Heading>

        <Template {...args} variant={variant}>
          This is {variant} input message
        </Template>
      </Fragment>
    ))}
  </Box>
);

export default meta;
