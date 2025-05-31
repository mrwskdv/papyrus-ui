import { BiSolidLike } from 'react-icons/bi';

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
    <div className="flex flex-wrap -mt-4 -mx-2">
      {variants.map((variant, i) => (
        <div key={i} className="mt-4 px-2 w-auto">
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </div>
      ))}
    </div>
  );
}

export function Sizes(args: ButtonProps) {
  return (
    <div className="flex items-center flex-wrap -mt-4 -mx-2">
      {sizes.map((size, i) => (
        <div key={i} className="mt-4 px-2">
          <Button {...args} size={size}>
            {size}
          </Button>
        </div>
      ))}
    </div>
  );
}

export function WithIcon(args: ButtonProps) {
  return (
    <div className="flex flex-wrap -mt-4 -mx-2">
      <div className="mt-4 px-2">
        <Button {...args} startIcon={<BiSolidLike />}>
          Start icon
        </Button>
      </div>

      <div className="mt-4 px-2">
        <Button {...args} endIcon={<BiSolidLike />}>
          End icon
        </Button>
      </div>
    </div>
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
