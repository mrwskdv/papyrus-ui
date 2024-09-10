import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';
import { Label } from '../label';

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
    defaultValue: 0,
  },
};

export function Basic(args: SelectProps) {
  return (
    <>
      <Label htmlFor="select-basic" mb={1}>
        Character
      </Label>
      <Select {...args} id="select-basic">
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Invalid(args: SelectProps) {
  return (
    <>
      <Label htmlFor="select-invalid" mb={1}>
        Character
      </Label>
      <Select {...args} id="select-invalid" invalid>
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Success(args: SelectProps) {
  return (
    <>
      <Label htmlFor="select-success" mb={1}>
        Character
      </Label>
      <Select {...args} id="select-success" success>
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function WithIcon(args: SelectProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Label htmlFor="select-with-start-icon" mb={1}>
          With Start Icon
        </Label>

        <Select
          {...args}
          id="select-with-start-icon"
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

      <Box mt={4}>
        <Label htmlFor="select-with-end-icon" mb={1}>
          With End Icon
        </Label>

        <Select
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="select-with-end-icon"
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

export function Disabled(args: SelectProps) {
  return (
    <>
      <Label htmlFor="select-disabled" mb={1}>
        Character
      </Label>
      <Select {...args} disabled id="select-disabled">
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Multiple(args: SelectProps<true>) {
  return (
    <>
      <Label htmlFor="select-multiple" mb={1}>
        Character
      </Label>
      <Select {...args} id="select-multiple" multiple>
        {SELECT_OPTIONS.map((val, idx) => (
          <option key={idx} value={idx}>
            {val}
          </option>
        ))}
      </Select>
    </>
  );
}

export function Sizes(args: SelectProps) {
  return (
    <Flex flexDirection="column">
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Label htmlFor={`select-size-${size}`} mb={1}>
            Character
          </Label>
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
