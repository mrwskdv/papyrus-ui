import { BiSolidLike } from 'react-icons/bi';

import { Avatar } from '../avatar';

import {
  IconButton,
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './icon-button';

const variants: IconButtonVariant[] = [
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

const sizes: IconButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/IconButton',
  component: IconButton,

  args: {
    children: <BiSolidLike />,
  },
};

export function Basic(args: IconButtonProps) {
  return <IconButton {...args} />;
}

export function Variants(args: IconButtonProps) {
  return (
    <div className="flex flex-wrap -mt-4 -mx-2">
      {variants.map((variant, i) => (
        <div
          key={i}
          className="mt-4 px-2"
          title={`${variant} variant IconButton`}
        >
          <IconButton
            {...args}
            title={`${variant} variant IconButton`}
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
}

export function Sizes(args: IconButtonProps) {
  return (
    <div className="flex items-center flex-wrap -mt-4 -mx-2">
      {sizes.map((size, i) => (
        <div key={i} className="mt-4 px-2">
          <IconButton {...args} size={size} title={`${size} size IconButton`} />
        </div>
      ))}
    </div>
  );
}

export function Rounded(args: IconButtonProps) {
  return <IconButton {...args} rounded />;
}

export function WithAvatar(args: IconButtonProps) {
  return (
    <IconButton
      {...args}
      avatar={
        <Avatar>
          <img alt="Profile" src="https://i.pravatar.cc/300" />
        </Avatar>
      }
      rounded
    />
  );
}
