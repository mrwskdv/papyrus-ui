import { lightTheme } from '@papyrus-ui/styles';
import { Link, ThemeProvider } from '@papyrus-ui/components';
import { theme } from './theme';
import { FC } from 'react';

import '@papyrus-ui/styles/css/styles.css';
import '@papyrus-ui/components/css/components.css';

export const parameters = {
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
};

export const decorators = [
  (Story: FC) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
