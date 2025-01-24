import { faker } from '@faker-js/faker';
import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { useRef, useState } from 'react';
import { BiBell } from 'react-icons/bi';

import { Avatar } from '../avatar';
import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';

import { Snackbar, SnackbarProps } from './snackbar';
import { SnackbarItem, SnackbarItemVariant } from './snackbar-item';
import { SnackbarPlacement } from './snackbar.types';

const meta = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  subcomponents: {
    SnackbarItem,
  },
};

const AUTO_HIDE_DURATION = 3000;

const variants: SnackbarItemVariant[] = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];

const placements: SnackbarPlacement[] = [
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end',
];

interface SnackbarItemState {
  id: number;
  message: string;
  description: string;
  variant: SnackbarItemVariant;
  onDismiss: () => void;
  onHide: () => void;
}

export const Basic: StoryFn<SnackbarProps> = (args) => {
  const [items, setItems] = useState<ReadonlyArray<SnackbarItemState>>([]);

  const createdItems = useRef(0);

  const remove = (id: number) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onPush = () => {
    const id = createdItems.current + 1;

    const item = {
      id,
      message: capitalize(faker.lorem.words({ min: 1, max: 3 })),
      description: capitalize(faker.lorem.words({ min: 1, max: 6 })),
      variant: faker.helpers.arrayElement(variants),
      onDismiss: () => remove(id),
      onHide: () => remove(id),
    };

    setItems((prevState) => [item, ...prevState]);
    createdItems.current = id;
  };

  return (
    <Flex
      align="center"
      direction="column"
      height={64}
      justify="center"
      style={{
        width: '60vw',
      }}
    >
      <Button onClick={onPush}>Push Message</Button>

      <Snackbar {...args}>
        {items.map(({ id, description, ...props }) => (
          <Snackbar.Item
            {...props}
            key={id}
            autoHideDuration={AUTO_HIDE_DURATION}
          >
            {description}
          </Snackbar.Item>
        ))}
      </Snackbar>
    </Flex>
  );
};

export const Placement: StoryFn<SnackbarProps> = (args) => {
  const [items, setItems] = useState<
    Record<SnackbarPlacement, ReadonlyArray<SnackbarItemState>>
  >({
    'top-start': [],
    'top': [],
    'top-end': [],
    'bottom-start': [],
    'bottom': [],
    'bottom-end': [],
  });

  const createdItems = useRef(0);

  const remove = (placement: SnackbarPlacement, id: number) => {
    setItems((prevState) => ({
      ...prevState,
      [placement]: prevState[placement].filter((item) => item.id !== id),
    }));
  };

  const onPush = (placement: SnackbarPlacement) => {
    const id = createdItems.current + 1;

    const item = {
      id,
      message: capitalize(faker.lorem.words({ min: 1, max: 3 })),
      description: capitalize(faker.lorem.words({ min: 1, max: 6 })),
      variant: faker.helpers.arrayElement(variants),
      onDismiss: () => remove(placement, id),
      onHide: () => remove(placement, id),
    };

    setItems((prevState) => ({
      ...prevState,
      [placement]: [item, ...prevState[placement]],
    }));

    createdItems.current = id;
  };

  return (
    <Flex
      align="center"
      direction="column"
      height={64}
      justify="center"
      style={{
        width: '60vw',
      }}
    >
      <Flex justify="center" mt="-4" mx="-2" wrap="wrap">
        {placements.map((placement) => (
          <Box key={placement} mt={4} px={2}>
            <Button variant="tertiary" onClick={() => onPush(placement)}>
              {capitalize(placement)}
            </Button>
          </Box>
        ))}
      </Flex>

      {placements.map((placement) => (
        <Snackbar {...args} key={placement} placement={placement}>
          {items[placement].map(({ id, description, ...props }) => (
            <Snackbar.Item
              {...props}
              key={id}
              autoHideDuration={AUTO_HIDE_DURATION}
              message="This is a snackbar message"
            >
              {description}
            </Snackbar.Item>
          ))}
        </Snackbar>
      ))}
    </Flex>
  );
};

export const Variants: StoryFn<SnackbarProps> = (args) => (
  <Flex
    align="center"
    direction="column"
    height={96}
    justify="center"
    style={{
      width: '60vw',
    }}
  >
    <Snackbar {...args}>
      {variants.map((variant) => (
        <Snackbar.Item
          key={variant}
          message={capitalize(faker.lorem.words({ min: 1, max: 3 }))}
          variant={variant}
          onDismiss={() => {
            // Do nothing
          }}
        >
          {capitalize(faker.lorem.words({ min: 1, max: 3 }))}
        </Snackbar.Item>
      ))}
    </Snackbar>
  </Flex>
);

export const WithAction: StoryFn<SnackbarProps> = (args) => (
  <Flex
    align="center"
    direction="column"
    height={64}
    justify="center"
    style={{
      width: '60vw',
    }}
  >
    <Snackbar {...args}>
      <Snackbar.Item
        actionLabel="View More"
        message={capitalize(faker.lorem.words({ min: 1, max: 3 }))}
        onActionClick={() => {
          // Do nothing
        }}
        onDismiss={() => {
          // Do nothing
        }}
      >
        {capitalize(faker.lorem.words({ min: 1, max: 3 }))}
      </Snackbar.Item>
    </Snackbar>
  </Flex>
);

export const WithCustomIcon: StoryFn<SnackbarProps> = (args) => (
  <Flex
    align="center"
    direction="column"
    height={64}
    justify="center"
    style={{
      width: '60vw',
    }}
  >
    <Snackbar {...args}>
      <Snackbar.Item
        icon={<BiBell />}
        message={capitalize(faker.lorem.words({ min: 1, max: 3 }))}
        onDismiss={() => {
          // Do nothing
        }}
      >
        {capitalize(faker.lorem.words({ min: 1, max: 3 }))}
      </Snackbar.Item>
    </Snackbar>
  </Flex>
);

export const WithAvatar: StoryFn<SnackbarProps> = (args) => (
  <Flex
    align="center"
    direction="column"
    height={64}
    justify="center"
    style={{
      width: '60vw',
    }}
  >
    <Snackbar {...args}>
      <Snackbar.Item
        icon={
          <Avatar size="md">
            <img alt="Profile" src="https://i.pravatar.cc/300" />
          </Avatar>
        }
        message={capitalize(faker.lorem.words({ min: 1, max: 3 }))}
        onDismiss={() => {
          // Do nothing
        }}
      >
        {capitalize(faker.lorem.words({ min: 1, max: 3 }))}
      </Snackbar.Item>
    </Snackbar>
  </Flex>
);

export default meta;
