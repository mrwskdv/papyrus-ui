import { BiSolidLike } from 'react-icons/bi';

import { Box } from '../box';
import { Flex } from '../flex';

import { Button, ButtonProps, ButtonSize, ButtonVariant } from './button';

const variants: ButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'plain',
  'info',
  'success',
  'warning',
  'danger',
  'ghost',
];

const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/Button',
  component: Button,

  args: {
    children: 'Click me',
  },
};

export function Basic(args: ButtonProps) {
  return <Button {...args} />;
}

export function Variants(args: ButtonProps) {
  return (
    <Flex mt="-4" mx="-2" wrap="wrap">
      {variants.map((variant, i) => (
        <Box key={i} mt={4} px={2} w="auto">
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

export function Sizes(args: ButtonProps) {
  return (
    <Flex align="center" mt="-4" mx="-2" wrap="wrap">
      {sizes.map((size, i) => (
        <Box key={i} mt={4} px={2}>
          <Button {...args} size={size}>
            {size}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: ButtonProps) {
  return (
    <Flex mt="-4" mx="-2" wrap="wrap">
      <Box mt={4} px={2}>
        <Button {...args} startIcon={<BiSolidLike />}>
          Start icon
        </Button>
      </Box>

      <Box mt={4} px={2}>
        <Button {...args} endIcon={<BiSolidLike />}>
          End icon
        </Button>
      </Box>
    </Flex>
  );
}

export function Loading(args: ButtonProps) {
  return <Button {...args} loading />;
}

export function Disabled(args: ButtonProps) {
  return <Button {...args} disabled />;
}

export function AsLink(args: ButtonProps) {
  return <Button {...args} as="a" href="#" />;
}

export function Rounded(args: ButtonProps) {
  return <Button {...args} rounded />;
}
