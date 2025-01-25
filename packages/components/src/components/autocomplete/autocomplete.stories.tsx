import { Meta, StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';

import { Autocomplete, AutocompleteProps } from './autocomplete';

const SIZE_OPTIONS: InputBoxSize[] = ['sm', 'md', 'lg'];

const OPTIONS_LIST = ['Peter', 'Louis', 'Mag', 'Chris', 'Stewie', 'Bryan'];

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    label: 'Character',
    placeholder: 'Type to search',
  },
};

const Template: StoryFn<AutocompleteProps> = (args) => (
  <Box style={{ minHeight: '256px' }} w={64}>
    <Autocomplete {...args} options={OPTIONS_LIST} />
  </Box>
);

export const Basic = Template.bind({
  id: 'autocomplete-basic',
});

export const Multiple = Template.bind({});

Multiple.args = {
  id: 'autocomplete-multiple',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  multiple: true,
  defaultValue: ['Chris', 'Bryan'],
};

export const Description = Template.bind({});

Description.args = {
  id: 'autocomplete-description',
  description: 'This is a description.',
};

export const Message = Template.bind({});

Message.args = {
  id: 'autocomplete-message',
  message: 'Just a hint',
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'autocomplete-invalid',
  invalid: true,
  message: 'Something went wrong',
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'autocomplete-disabled',
  disabled: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  multiple: true,
  value: ['Chris', 'Bryan'],
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: 'autocomplete-readonly',
  readOnly: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  multiple: true,
  value: ['Chris', 'Bryan'],
};

export function Sizes(args: AutocompleteProps) {
  return (
    <Flex direction="column" style={{ minHeight: '384px' }} w={64}>
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Autocomplete
            {...args}
            id={`autocomplete-size-${size}`}
            options={OPTIONS_LIST}
            size={size}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: AutocompleteProps) {
  return (
    <Flex direction="column" style={{ minHeight: '384px' }} w={64}>
      <Box mt={4}>
        <Autocomplete
          {...args}
          id="autocomplete-with-start-icon"
          label="With Start Icon"
          options={OPTIONS_LIST}
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        />
      </Box>

      <Box mt={4}>
        <Autocomplete
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="autocomplete-with-end-icon"
          label="With End Icon"
          options={OPTIONS_LIST}
        />
      </Box>
    </Flex>
  );
}

export default meta;
