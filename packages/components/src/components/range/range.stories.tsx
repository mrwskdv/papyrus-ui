import { Text } from '../text';

import { Range, RangeProps } from './range';

export default {
  title: 'Inputs/Range',
  component: Range,

  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
  },
};

export function Basic(args: RangeProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="range-basic"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Zoom
      </Text>
      <Range {...args} id="range-basic" />
    </>
  );
}

export function Disabled(args: RangeProps) {
  return (
    <>
      <Text
        as="label"
        fontSize="sm"
        fontWeight="semiBold"
        htmlFor="range-disabled"
        letterSpacing="widest"
        lineHeight="snug"
        mb={1}
      >
        Zoom
      </Text>
      <Range {...args} disabled id="range-disabled" />
    </>
  );
}
