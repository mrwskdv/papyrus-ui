import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';
import { Label } from '../label';

import { Textarea, TextareaProps } from './textarea';

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,

  args: {
    defaultValue: 'Front-end developer at OSS',
    placeholder: 'Tell about yourself',
  },
};

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export function Basic(args: TextareaProps): JSX.Element {
  return (
    <>
      <Label htmlFor="textarea-basic" mb={1}>
        Bio
      </Label>
      <Textarea {...args} id="textarea-basic" />
    </>
  );
}

export function Success(args: TextareaProps): JSX.Element {
  return (
    <>
      <Label as="label" htmlFor="textarea-success" mb={1}>
        Bio
      </Label>
      <Textarea {...args} id="textarea-success" success />
    </>
  );
}

export function Invalid(args: TextareaProps): JSX.Element {
  return (
    <>
      <Label as="label" htmlFor="textarea-invalid" mb={1}>
        Bio
      </Label>
      <Textarea {...args} id="textarea-invalid" invalid />
    </>
  );
}

export function WithIcon(args: TextareaProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Label htmlFor="textarea-with-start-icon" mb={1}>
          With Start Icon
        </Label>

        <Textarea
          {...args}
          id="textarea-with-start-icon"
          startIcon={
            <Icon color="neutral500">
              <BiSearch />
            </Icon>
          }
        />
      </Box>

      <Box mt={4}>
        <Label htmlFor="textarea-with-end-icon" mb={1}>
          With End Icon
        </Label>

        <Textarea
          {...args}
          id="textarea-with-end-icon"
          startIcon={
            <Icon color="neutral500">
              <BiInfoCircle />
            </Icon>
          }
        />
      </Box>
    </Flex>
  );
}

export function Disabled(args: TextareaProps): JSX.Element {
  return (
    <>
      <Label htmlFor="textarea-disabled" mb={1}>
        Bio
      </Label>
      <Textarea {...args} disabled id="textarea-disabled" />
    </>
  );
}

export function ReadOnly(args: TextareaProps): JSX.Element {
  return (
    <>
      <Label htmlFor="textarea-read-only" mb={1}>
        Bio
      </Label>
      <Textarea {...args} id="textarea-read-only" readOnly />
    </>
  );
}

export function Sizes(args: TextareaProps): JSX.Element {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Label htmlFor={`textarea-size-${size}`} mb={1}>
            Bio
          </Label>
          <Textarea
            {...args}
            id={`textarea-size-${size}`}
            size={size}
            value={size}
          />
        </Box>
      ))}
    </Flex>
  );
}

export default meta;
