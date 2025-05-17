'use client';

import { lightMode } from '@papyrus-ui/theme';
import { FC, ReactNode, useLayoutEffect } from 'react';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: string;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = lightMode,
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
