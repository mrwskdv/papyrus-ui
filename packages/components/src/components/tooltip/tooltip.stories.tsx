import { Meta, StoryFn } from '@storybook/react';

import { Button } from '../button';

import { Tooltip, TooltipProps } from './tooltip';

const meta: Meta<TooltipProps> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    title: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});

export const Placement: StoryFn<TooltipProps> = () => (
  <div className="px-24">
    <div className="flex flex-wrap -mt-4 -mx-2">
      <div className="mt-4 px-2 w-1/5" />

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="top-start" title="Top Start">
          <Button variant="tertiary">Top Start</Button>
        </Tooltip>
      </div>

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="top" title="Top">
          <Button variant="tertiary">Top</Button>
        </Tooltip>
      </div>

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="top-end" title="Top End">
          <Button variant="tertiary">Top End</Button>
        </Tooltip>
      </div>

      <div className="mt-4 px-2 w-1/5" />

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="left-start" title="Left Start">
          <Button variant="tertiary">Left Start</Button>
        </Tooltip>
      </div>

      <div className="mt-4 px-2 w-1/5" />

      <div className="mt-4 px-2 w-1/5" />

      <div className="mt-4 px-2 w-1/5" />

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="right-start" title="Right Start">
          <Button variant="tertiary">Right Start</Button>
        </Tooltip>
      </div>

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="left" title="Left">
          <Button variant="tertiary">Left</Button>
        </Tooltip>
      </div>

      <div className="mt-4 px-2 w-1/5" />

      <div className="mt-4 px-2 w-1/5" />

      <div className="mt-4 px-2 w-1/5" />

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="right" title="Right">
          <Button variant="tertiary">Right</Button>
        </Tooltip>
      </div>

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="left-end" title="Left End">
          <Button variant="tertiary">Left End</Button>
        </Tooltip>
      </div>

      <div className="mt-4 px-2 w-1/5" />

      <div className="mt-4 px-2 w-1/5" />

      <div className="mt-4 px-2 w-1/5" />

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="right-end" title="Right End">
          <Button variant="tertiary">Right End</Button>
        </Tooltip>
      </div>

      <div className="mt-4 px-2 w-1/5" />

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="bottom-start" title="Bottom Start">
          <Button variant="tertiary">Bottom Start</Button>
        </Tooltip>
      </div>

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="bottom" title="Bottom">
          <Button variant="tertiary">Bottom</Button>
        </Tooltip>
      </div>

      <div className="flex justify-center mt-4 px-2 w-1/5">
        <Tooltip placement="bottom-end" title="Bottom End">
          <Button variant="tertiary">Bottom End</Button>
        </Tooltip>
      </div>

      <div className="mt-4 px-2 w-1/5" />
    </div>
  </div>
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
