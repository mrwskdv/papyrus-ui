import { StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';

import { Textarea, TextareaProps } from './textarea';

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,

  args: {
    label: 'Bio',
    rows: 3,
    defaultValue: 'Frontend developer at OSS',
    placeholder: 'Tell about yourself',
  },
};

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

const Template: StoryFn<TextareaProps> = (args) => (
  <Box width={64}>
    <Textarea {...args} />
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'textarea-basic',
};

export function Sizes(args: TextareaProps) {
  return (
    <Flex flexDirection="column" width={64}>
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Textarea {...args} id={`textarea-size-${size}`} size={size} />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: TextareaProps) {
  return (
    <Flex flexDirection="column" width={64}>
      <Box mb={4}>
        <Textarea
          {...args}
          id="textarea-with-start-icon"
          label="With Start Icon"
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        />
      </Box>

      <Box>
        <Textarea
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="textarea-with-end-icon"
          label="With End Icon"
        />
      </Box>
    </Flex>
  );
}

export const Description = Template.bind({});

Description.args = {
  id: 'textarea-description',
  description: 'This is a description.',
};

export const Message = Template.bind({});

Message.args = {
  id: 'textarea-message',
  description: 'This is a message',
};

export const Invalid = Template.bind({});

Message.args = {
  id: 'textarea-invalid',
  invalid: true,
  description: 'Something went wrong',
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'textarea-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

Disabled.args = {
  id: 'textarea-readonly',
  readOnly: true,
};

export default meta;
