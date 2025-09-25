import type { StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Icon } from '../icon';
import type { InputBoxSize, InputBoxVariant } from '../input-box';

import { Textarea } from './textarea';
import type { TextareaProps } from './textarea';

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,

  args: {
    label: 'Bio',
    rows: 3,
    defaultValue: 'Frontend developer at OSS',
    placeholder: 'Tell about yourself',
  },
};

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];
const variants: InputBoxVariant[] = ['primary', 'secondary'];

const Template: StoryFn<TextareaProps> = args => (
  <div className='w-64'>
    <Textarea {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'textarea-basic',
};

export function Sizes(args: TextareaProps) {
  return (
    <div className='flex flex-col w-64'>
      {sizes.map((size, i) => (
        <div key={i} className={i ? 'mt-4' : ''}>
          <Textarea {...args} id={`textarea-size-${size}`} size={size} />
        </div>
      ))}
    </div>
  );
}

export function Variants(args: TextareaProps) {
  return (
    <div className='flex flex-col w-64'>
      {variants.map((variant, i) => (
        <div key={i} className={i ? 'mt-4' : ''}>
          <Textarea
            {...args}
            id={`textarea-variant-${variant}`}
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
}

export function WithIcon(args: TextareaProps) {
  return (
    <div className='flex flex-col w-64'>
      <div className='mb-4'>
        <Textarea
          {...args}
          id='textarea-with-start-icon'
          label='With Start Icon'
          startIcon={
            <Icon className='text-neutral-950'>
              <BiSearch />
            </Icon>
          }
        />
      </div>

      <div>
        <Textarea
          {...args}
          endIcon={
            <Icon className='text-info-600'>
              <BiInfoCircle />
            </Icon>
          }
          id='textarea-with-end-icon'
          label='With End Icon'
        />
      </div>
    </div>
  );
}

export const Description = Template.bind({});

Description.args = {
  id: 'textarea-description',
  description: 'This is a description.',
};

export const Message = Template.bind({});

Message.args = {
  id: 'textarea-message',
  description: 'This is a message',
};

export const Invalid = Template.bind({});

Message.args = {
  id: 'textarea-invalid',
  invalid: true,
  description: 'Something went wrong',
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'textarea-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

Disabled.args = {
  id: 'textarea-readonly',
  readOnly: true,
};

export default meta;
