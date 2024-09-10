export interface Theme {
  [key: string]: string | number;
}

export interface DesignTokens<T extends Theme> {
  lightMode: T;
}
