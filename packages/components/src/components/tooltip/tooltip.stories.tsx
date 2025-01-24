import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';

import { Tooltip, TooltipProps } from './tooltip';

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    title: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});

export const Placement: StoryFn<TooltipProps> = () => (
  <Box px={24}>
    <Flex mt="-4" mx="-2" wrap="wrap">
      <Box mt={4} px={2} width="1/5" />

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="top-start" title="Top Start">
          <Button variant="tertiary">Top Start</Button>
        </Tooltip>
      </Flex>

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="top" title="Top">
          <Button variant="tertiary">Top</Button>
        </Tooltip>
      </Flex>

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="top-end" title="Top End">
          <Button variant="tertiary">Top End</Button>
        </Tooltip>
      </Flex>

      <Box mt={4} px={2} width="1/5" />

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="left-start" title="Left Start">
          <Button variant="tertiary">Left Start</Button>
        </Tooltip>
      </Flex>

      <Box mt={4} px={2} width="1/5" />

      <Box mt={4} px={2} width="1/5" />

      <Box mt={4} px={2} width="1/5" />

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="right-start" title="Right Start">
          <Button variant="tertiary">Right Start</Button>
        </Tooltip>
      </Flex>

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="left" title="Left">
          <Button variant="tertiary">Left</Button>
        </Tooltip>
      </Flex>

      <Box mt={4} px={2} width="1/5" />

      <Box mt={4} px={2} width="1/5" />

      <Box mt={4} px={2} width="1/5" />

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="right" title="Right">
          <Button variant="tertiary">Right</Button>
        </Tooltip>
      </Flex>

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="left-end" title="Left End">
          <Button variant="tertiary">Left End</Button>
        </Tooltip>
      </Flex>

      <Box mt={4} px={2} width="1/5" />

      <Box mt={4} px={2} width="1/5" />

      <Box mt={4} px={2} width="1/5" />

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="right-end" title="Right End">
          <Button variant="tertiary">Right End</Button>
        </Tooltip>
      </Flex>

      <Box mt={4} px={2} width="1/5" />

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="bottom-start" title="Bottom Start">
          <Button variant="tertiary">Bottom Start</Button>
        </Tooltip>
      </Flex>

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="bottom" title="Bottom">
          <Button variant="tertiary">Bottom</Button>
        </Tooltip>
      </Flex>

      <Flex justify="center" mt={4} px={2} width="1/5">
        <Tooltip placement="bottom-end" title="Bottom End">
          <Button variant="tertiary">Bottom End</Button>
        </Tooltip>
      </Flex>

      <Box mt={4} px={2} width="1/5" />
    </Flex>
  </Box>
);
export const OpenControlled = Template.bind({});

OpenControlled.args = {
  title: 'Controlled open tooltip',
  open: true,
};

export const TriggerOnClick = Template.bind({});

TriggerOnClick.args = {
  title: 'Tooltip triggered on click',
  trigger: 'click',
  children: <Button>Click me</Button>,
};

export default meta;
