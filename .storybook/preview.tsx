import { Link } from 'papyrus-ui';
import { theme } from './theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Decorator, Preview } from '@storybook/react';

import './style.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    backgrounds: {
      default: 'White',
      values: [
        {
          name: 'Primary',
          value: '#056CF2',
        },
        {
          name: 'Tertiary',
          value: '#f7f7f7',
        },
        {
          name: 'White',
          value: '#ffffff',
        },
        {
          name: 'Black',
          value: '#000000',
        },
      ],
    },
    controls: {
      hideNoControlsWarning: true,
    },
    docs: {
      theme,
      components: {
        a: Link,
      },
    },
  },
};

export const decorators: Decorator[] = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
