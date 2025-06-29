import { StoryFn } from '@storybook/react';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';

import { Icon } from '../icon';
import { InputBoxSize } from '../input-box';

import { TimeInput, TimeInputProps } from './time-input';

const sizes: InputBoxSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/TimeInput',
  component: TimeInput,

  args: {
    label: 'Time',
    defaultValue: '12:30',
    placeholder: 'HH:MM',
  },
};

const Template: StoryFn<TimeInputProps> = (args) => (
  <div className="w-64">
    <TimeInput {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  id: 'time-input-basic',
};

export const Hour12 = Template.bind({});

Hour12.args = {
  id: 'time-input-hour12',
  hour12: true,
  defaultValue: '12:30',
};

export const Seconds = Template.bind({});

Seconds.args = {
  id: 'time-input-seconds',
  seconds: true,
  defaultValue: '12:30:45',
  placeholder: 'HH:MM:SS',
};

export function Sizes(args: TimeInputProps) {
  return (
    <div className="flex flex-col w-64">
      {sizes.map((size, i) => (
        <div key={i} className={i ? 'mt-4' : ''}>
          <TimeInput {...args} id={`time-input-size-${size}`} size={size} />
        </div>
      ))}
    </div>
  );
}

export function WithIcon(args: TimeInputProps) {
  return (
    <div className="flex flex-col w-64">
      <div className="mb-4">
        <TimeInput
          {...args}
          id="time-input-with-start-icon"
          label="With Start Icon"
          startIcon={
            <Icon className="text-neutral-600">
              <BiSearch />
            </Icon>
          }
        />
      </div>

      <div>
        <TimeInput
          {...args}
          endIcon={
            <Icon className="text-info-600">
              <BiInfoCircle />
            </Icon>
          }
          id="time-input-with-end-icon"
          label="With End Icon"
        />
      </div>
    </div>
  );
}

export const Description = Template.bind({});

Description.args = {
  id: 'time-input-description',
  description: 'This is a description.',
};

export const Message = Template.bind({});

Message.args = {
  id: 'time-input-message',
  description: 'This is a message',
};

export const Invalid = Template.bind({});

Invalid.args = {
  id: 'time-input-invalid',
  invalid: true,
  description: 'Something went wrong',
};

export const Disabled = Template.bind({});

Disabled.args = {
  id: 'time-input-disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  id: 'time-input-readonly',
  readOnly: true,
};
