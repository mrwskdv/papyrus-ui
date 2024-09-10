import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';
import { Label } from '../label';

import { TextInput, TextInputProps } from './text-input';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/TextInput',
  component: TextInput,

  args: {
    defaultValue: 'Bob',
    placeholder: 'First Name',
  },
};

export function Basic(args: TextInputProps) {
  return (
    <>
      <Label htmlFor="text-input-basic" mb={1}>
        First Name
      </Label>
      <TextInput {...args} id="text-input-basic" />
    </>
  );
}

export function Invalid(args: TextInputProps) {
  return (
    <>
      <Label htmlFor="text-input-invalid" mb={1}>
        First Name
      </Label>
      <TextInput {...args} id="text-input-invalid" invalid />
    </>
  );
}

export function Success(args: TextInputProps) {
  return (
    <>
      <Label htmlFor="text-input-success" mb={1}>
        First Name
      </Label>
      <TextInput {...args} id="text-input-success" success />
    </>
  );
}

export function Disabled(args: TextInputProps) {
  return (
    <>
      <Label htmlFor="text-input-disabled" mb={1}>
        First Name
      </Label>
      <TextInput
        {...args}
        disabled
        id="text-input-disabled"
        value="Disabled value"
      />
    </>
  );
}

export function ReadOnly(args: TextInputProps) {
  return (
    <>
      <Label htmlFor="text-input-read-only" mb={1}>
        First Name
      </Label>
      <TextInput
        {...args}
        id="text-input-read-only"
        readOnly
        value="Readonly value"
      />
    </>
  );
}

export function Sizes(args: TextInputProps) {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Label htmlFor={`text-input-size-${size}`} mb={1}>
            First Name
          </Label>
          <TextInput {...args} id={`text-input-size-${size}`} size={size} />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: TextInputProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Label htmlFor="text-input-with-start-icon" mb={1}>
          With Start Icon
        </Label>

        <TextInput
          {...args}
          id="text-input-with-start-icon"
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        />
      </Box>

      <Box mt={4}>
        <Label htmlFor="text-input-with-end-icon" mb={1}>
          With End Icon
        </Label>

        <TextInput
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="text-input-with-end-icon"
        />
      </Box>
    </Flex>
  );
}

export function Clearable(args: TextInputProps) {
  return (
    <>
      <Label htmlFor="text-input-clearable" mb={1}>
        First Name
      </Label>
      <TextInput {...args} clearable id="text-input-clearable" />
    </>
  );
}
