import { StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';
import { Label } from '../label';

import { Autocomplete, AutocompleteProps } from './autocomplete';

const SIZE_OPTIONS: InputBoxSize[] = ['sm', 'md', 'lg'];

const OPTIONS_LIST = ['Peter', 'Louis', 'Mag', 'Chris', 'Stewie', 'Bryan'];

const meta = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  args: {
    placeholder: 'Type to search',
  },
};

const Template: StoryFn<AutocompleteProps> = (args) => (
  <Box style={{ minHeight: '256px' }} width={80}>
    <Label htmlFor={args.id} mb={1}>
      Character
    </Label>

    <Autocomplete {...args} options={OPTIONS_LIST} />
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'autocomplete-basic',
};

export const Multiple = Template.bind({});

Multiple.args = {
  id: 'autocomplete-multiple',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  multiple: true,
  defaultValue: ['Peter', 'Chris', 'Stewie'],
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'autocomplete-invalid',
  invalid: true,
};

export const Success = Template.bind({});

Success.args = {
  id: 'autocomplete-success',
  success: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'autocomplete-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: 'autocomplete-readonly',
  readOnly: true,
};

export function Sizes(args: AutocompleteProps) {
  return (
    <Flex flexDirection="column" style={{ minHeight: '384px' }} width={80}>
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Label htmlFor={`autocomplete-size-${size}`} mb={1}>
            Character
          </Label>
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
    <Flex flexDirection="column" style={{ minHeight: '384px' }}>
      <Box mt={4}>
        <Label htmlFor="autocomplete-with-start-icon" mb={1}>
          With Start Icon
        </Label>

        <Autocomplete
          {...args}
          id="autocomplete-with-start-icon"
          options={OPTIONS_LIST}
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        />
      </Box>

      <Box mt={4}>
        <Label htmlFor="autocomplete-with-end-icon" mb={1}>
          With End Icon
        </Label>

        <Autocomplete
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="autocomplete-with-end-icon"
          options={OPTIONS_LIST}
        />
      </Box>
    </Flex>
  );
}

export default meta;
