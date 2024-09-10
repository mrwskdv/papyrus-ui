import { DesignTokens, Theme } from '../types';

export type NormalizedTheme<T extends Theme> = Record<keyof T, string>;

export type NormalizedTokens<T extends Theme> = DesignTokens<
  NormalizedTheme<T>
>;

export function normalizeTokens<T extends Theme>(
  designTokens: DesignTokens<T>,
): NormalizedTokens<T> {
  return Object.keys(designTokens).reduce((dt, themeKey) => {
    const key = themeKey as keyof DesignTokens<T>;

    const normalizedTheme = Object.keys(dt[key]).reduce(
      (t, token) => ({
        ...t,
        [token]: String(t[token]),
      }),
      {} as NormalizedTheme<T>,
    );

    return {
      ...dt,
      [themeKey]: normalizedTheme,
    };
  }, {} as DesignTokens<NormalizedTheme<T>>);
}
