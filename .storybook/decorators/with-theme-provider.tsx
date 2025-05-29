import React, { FC } from 'react';
import { ThemeProvider } from '@papyrus-ui/components';
import { lightMode } from '@papyrus-ui/theme';
import { Decorator } from '@storybook/react';

export function withThemeProvider(): Decorator {
  return (Story: FC) => {
    return (
      <ThemeProvider theme={lightMode}>
        <Story />
      </ThemeProvider>
    );
  };
}
