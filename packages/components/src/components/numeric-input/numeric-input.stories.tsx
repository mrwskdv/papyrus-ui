import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { BiInfoCircle, BiSolidPurchaseTag } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';

import { NumericInput, NumericInputProps } from './numeric-input';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/NumericInput',
  component: NumericInput,

  args: {
    label: 'Max Price',
    allowNegative: false,
    decimalScale: 2,
    defaultValue: 1999,
    fixedDecimalScale: true,
    placeholder: '$ 0.00',
    prefix: '$ ',
    thousandSeparator: true,
  },
};

const Template: StoryFn<NumericInputProps> = (args) => (
  <Box width={64}>
    <NumericInput {...args} />
  </Box>
);

export const Basic = Template.bind({});

export function Sizes(args: NumericInputProps) {
  return (
    <Flex direction="column" width={64}>
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <NumericInput
            {...args}
            id={`numeric-input-size-${size}`}
            label={capitalize(size)}
            size={size}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: NumericInputProps) {
  return (
    <Flex direction="column" width={64}>
      <Box mb={4}>
        <NumericInput
          {...args}
          id="numeric-input-with-start-icon"
          label="With Start Icon"
          startIcon={
            <Icon color="neutral500">
              <BiSolidPurchaseTag name="purchase-tag" />
            </Icon>
          }
        />
      </Box>

      <Box>
        <NumericInput
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="numeric-input-with-end-icon"
          label="With End Icon"
        />
      </Box>
    </Flex>
  );
}

export const Description = Template.bind({});

Description.args = {
  id: 'numeric-input-description',
  description: 'This is a description.',
};

export const Message = Template.bind({});

Message.args = {
  id: 'numeric-input-message',
  message: 'This is a message',
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'numeric-input-invalid',
  invalid: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'numeric-input-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: 'numeric-input-basic',
  readOnly: true,
};
