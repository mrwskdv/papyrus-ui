'use client';

import { lightTheme } from '@papyrus-ui/styles';
import { FC, ReactNode, useLayoutEffect } from 'react';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: string;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = lightTheme,
  children,
}): JSX.Element => {
  useLayoutEffect(() => {
    document.documentElement.classList.add(theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  return <>{children}</>;
};
