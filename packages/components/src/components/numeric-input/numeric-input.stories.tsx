import { capitalize } from 'lodash';
import { BiInfoCircle, BiSolidPurchaseTag } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';
import { Label } from '../label';

import { NumericInput, NumericInputProps } from './numeric-input';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/NumericInput',
  component: NumericInput,

  args: {
    allowNegative: false,
    decimalScale: 2,
    defaultValue: 1999,
    fixedDecimalScale: true,
    placeholder: '$ 0.00',
    prefix: '$ ',
    thousandSeparator: true,
  },
};

export function Basic(args: NumericInputProps) {
  return (
    <>
      <Label htmlFor="numeric-input-basic" mb={1}>
        Max Price
      </Label>
      <NumericInput {...args} id="numeric-input-basic" />
    </>
  );
}

export function Invalid(args: NumericInputProps) {
  return (
    <>
      <Label htmlFor="numeric-input-invalid" mb={1}>
        Max Price
      </Label>
      <NumericInput {...args} id="numeric-input-invalid" invalid />
    </>
  );
}

export function Success(args: NumericInputProps) {
  return (
    <>
      <Label htmlFor="numeric-input-success" mb={1}>
        Max Price
      </Label>
      <NumericInput {...args} id="numeric-input-success" success />
    </>
  );
}

export function Disabled(args: NumericInputProps) {
  return (
    <>
      <Label htmlFor="numeric-input-disabled" mb={1}>
        Max Price
      </Label>
      <NumericInput {...args} disabled id="numeric-input-disabled" />
    </>
  );
}

export function ReadOnly(args: NumericInputProps) {
  return (
    <>
      <Label htmlFor="numeric-input-basic" mb={1}>
        Max Price
      </Label>
      <NumericInput {...args} id="numeric-input-read-only" readOnly />
    </>
  );
}

export function Sizes(args: NumericInputProps) {
  return (
    <Flex flexDirection="column">
      {sizes.map((size, i) => (
        <Box key={i} mt={i && 4}>
          <Label htmlFor={`numeric-input-size-${size}`} mb={1}>
            {capitalize(size)}
          </Label>
          <NumericInput
            {...args}
            id={`numeric-input-size-${size}`}
            size={size}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: NumericInputProps) {
  return (
    <Flex flexDirection="column">
      <Box mt={4}>
        <Label htmlFor="numeric-input-with-start-icon" mb={1}>
          With Start Icon
        </Label>

        <NumericInput
          {...args}
          id="numeric-input-with-start-icon"
          startIcon={
            <Icon color="neutral500">
              <BiSolidPurchaseTag name="purchase-tag" />
            </Icon>
          }
        />
      </Box>

      <Box mt={4}>
        <Label htmlFor="numeric-input-with-end-icon" mb={1}>
          With End Icon
        </Label>

        <NumericInput
          {...args}
          endIcon={
            <Icon color="primary400">
              <BiInfoCircle />
            </Icon>
          }
          id="numeric-input-with-end-icon"
        />
      </Box>
    </Flex>
  );
}
