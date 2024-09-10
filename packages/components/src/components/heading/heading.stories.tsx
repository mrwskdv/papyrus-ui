import { Meta, StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';

import { Box } from '../box';
import { Flex } from '../flex';
import { TextProps } from '../text';

import { Heading, HeadingLevel, HeadingProps, HeadingVariant } from './heading';

const meta: Meta = {
  title: 'Typography/Heading',
  component: Heading,
};

const levels: HeadingLevel[] = [1, 2, 3, 4, 5, 6];

const variants: HeadingVariant[] = ['primary', 'secondary'];

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'This is a heading',
};

export const VariantsAndSizes: StoryFn<HeadingProps> = (args) => (
  <Flex flexWrap="wrap" mt="-8" mx="-8">
    {variants.map((variant) => (
      <Box
        key={variant}
        mt={8}
        px={8}
        width={{ mobile: 'full', desktop: '1/2' }}
      >
        <Heading as="h4" color="neutral500" level={6} mb={4}>
          {capitalize(variant)} Variant
        </Heading>

        <Flex flexDirection="column" mt="-4">
          {levels.map((level) => (
            <Box key={level} mt={4}>
              <Heading
                {...args}
                as="div"
                fontVariant={variant}
                level={level}
                whiteSpace="nowrap"
              >
                Heading H{level}
              </Heading>
            </Box>
          ))}
        </Flex>
      </Box>
    ))}
  </Flex>
);

export const TruncateLongText: StoryFn<TextProps> = (args) => (
  <Box maxWidth="sm">
    <Heading {...args} />
  </Box>
);

TruncateLongText.args = {
  children:
    'This is a very long text that will be truncated with an ellipsis if it exceeds the width of its container.',
  size: 'md',
  fontVariant: 'primary',
  truncate: true,
};

export const ColoredText = Template.bind({});
ColoredText.args = {
  children: 'This text uses the color property from the theme.',
  color: 'success500',
};

export const HighlightText = Template.bind({});
HighlightText.args = {
  children: 'This text is highlighted.',
  highlight: true,
};

export default meta;
