import { Meta, StoryFn } from '@storybook/react';

import { Caption, CaptionProps } from './caption';

const meta: Meta = {
  title: 'Typography/Caption',
  component: Caption,
};

const Template: StoryFn<CaptionProps> = (args) => <Caption {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'This is a caption',
};

export default meta;
