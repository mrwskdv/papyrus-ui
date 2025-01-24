import { StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';

import { TextInput, TextInputProps } from './text-input';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/TextInput',
  component: TextInput,

  args: {
    label: 'First Name',
    defaultValue: 'Bob',
    placeholder: 'First Name',
  },
};

const Template: StoryFn<TextInputProps> = (args) => (
  <Box width={64}>
    <TextInput {...args} />
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'text-input-basic',
};

export const Clearable = Template.bind({});

Clearable.args = {
  id: 'text-input-clearable',
  clearable: true,
};

export function Sizes(args: TextInputProps) {
  return (
    <Flex direction="column" width={64}>
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <TextInput {...args} id={`text-input-size-${size}`} size={size} />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: TextInputProps) {
  return (
    <Flex direction="column" width={64}>
      <Box mb={4}>
        <TextInput
          {...args}
          id="text-input-with-start-icon"
          label="With Start Icon"
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        />
      </Box>

      <Box>
        <TextInput
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="text-input-with-end-icon"
          label="With End Icon"
        />
      </Box>
    </Flex>
  );
}

export const Description = Template.bind({});

Description.args = {
  id: 'text-input-description',
  description: 'This is a description.',
};

export const Message = Template.bind({});

Message.args = {
  id: 'text-input-message',
  description: 'This is a message',
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'text-input-invalid',
  invalid: true,
  description: 'Something went wrong',
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'text-input-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: 'text-input-readonly',
  readOnly: true,
};
