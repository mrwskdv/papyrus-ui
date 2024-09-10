import { Label } from '../label';

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
      <Label htmlFor="range-basic" mb={1}>
        Zoom
      </Label>
      <Range {...args} id="range-basic" />
    </>
  );
}

export function Disabled(args: RangeProps) {
  return (
    <>
      <Label htmlFor="range-disabled" mb={1}>
        Zoom
      </Label>
      <Range {...args} disabled id="range-disabled" />
    </>
  );
}
