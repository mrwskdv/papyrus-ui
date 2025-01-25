import { StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';

import { Select, SelectProps } from './select';

const SIZE_OPTIONS: InputBoxSize[] = ['sm', 'md', 'lg'];

const SELECT_OPTIONS = [
  'Choose a person',
  'Peter',
  'Louis',
  'Mag',
  'Chris',
  'Stewie',
  'Bryan',
];

export default {
  title: 'Inputs/Select',
  component: Select,
  args: {
    label: 'Character',
    defaultValue: 0,
    children: SELECT_OPTIONS.map((val, idx) => (
      <option key={idx} value={idx}>
        {val}
      </option>
    )),
  },
};

const Template: StoryFn<SelectProps> = (args) => (
  <Box w={64}>
    <Select {...args} />
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'select-basic',
};
export const Multiple = Template.bind({});

Multiple.args = {
  id: 'select-multiple',
  multiple: true as never,
};

export function Sizes(args: SelectProps) {
  return (
    <Flex direction="column" w={64}>
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Select {...args} id={`select-size-${size}`} size={size}>
            {SELECT_OPTIONS.map((val, idx) => (
              <option key={idx} value={idx}>
                {val}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: SelectProps) {
  return (
    <Flex direction="column" w={64}>
      <Box mb={4}>
        <Select
          {...args}
          id="select-with-start-icon"
          label="With Start Icon"
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        >
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      </Box>

      <Box>
        <Select
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="select-with-end-icon"
          label="With End Icon"
        >
          {SELECT_OPTIONS.map((val, idx) => (
            <option key={idx} value={idx}>
              {val}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
}

export const Description = Template.bind({});

Description.args = {
  id: 'select-description',
  description: 'This is a description',
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'select-invalid',
  invalid: true,
  message: 'Something wend wrong',
};

export const Message = Template.bind({});

Message.args = {
  id: 'select-message',
  message: 'This is a message',
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'select-disabled',
  disabled: true,
};
