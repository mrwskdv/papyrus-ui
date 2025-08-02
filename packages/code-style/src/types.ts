import type { Linter } from 'eslint';

/**
 * Interface for ESLint config objects with rules and recommended configs
 */
export interface ESLintConfig {
  rules?: Record<string, unknown>;
  configs?: {
    recommended?: {
      rules?: Record<string, unknown>;
    };
    [key: string]: { rules?: Record<string, unknown> } | undefined;
  };
}

/**
 * Interface for package.json structure
 */
export interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

/**
 * Interface for loaded config modules
 */
export interface LoadedConfig {
  default: Linter.Config[];
}
