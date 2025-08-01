/**
 * @papyrus-ui/code-style
 *
 * Shareable ESLint configurations for JavaScript and TypeScript projects.
 * Supports ESLint 9+ flat config format.
 */

import { existsSync, readFileSync } from 'fs';
import { createRequire } from 'module';
import { resolve } from 'path';

import type { Linter } from 'eslint';

import type { PackageJson } from './types';

const require = createRequire(import.meta.url);

interface ConfigModule {
  default: Linter.Config[];
}

function assertConfigModule(module: unknown): asserts module is ConfigModule {
  const record = module as Record<string, unknown>;
  if (
    !module ||
    typeof module !== 'object' ||
    !('default' in record) ||
    !Array.isArray(record.default)
  ) {
    throw new Error('Invalid module format');
  }
}

const safeRequire = (path: string): ConfigModule => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const module = require(path);
  assertConfigModule(module);
  return module;
};

const configLoaders = {
  base: () => safeRequire('./configs/base').default,
  react: () => safeRequire('./configs/react').default,
  typescript: () => safeRequire('./configs/typescript').default,
  jest: () => safeRequire('./configs/jest').default,
  'jest-typescript': () => safeRequire('./configs/jest-typescript').default,
  storybook: () => safeRequire('./configs/storybook').default,
  next: () => safeRequire('./configs/nextjs').default,
} as const;

interface ImportResolverSettings {
  node?: {
    extensions?: string[];
    moduleDirectory?: string[];
    paths?: string[];
    project?: string | string[];
  };
  typescript?: {
    alwaysTryTypes?: boolean;
    project?: string | string[];
  };
}

interface ESLintSettings {
  'import/resolver'?: ImportResolverSettings;
  [key: string]: unknown;
}

const createConfig = (options?: {
  libs?: string[];
  typescript?: boolean;
  project?: string | string[];
}) => {
  let configs: Linter.Config[] = [];
  const detectedLibs = new Set<string>();

  // Try to detect dependencies from package.json
  try {
    const packageJsonPath = resolve(process.cwd(), 'package.json');
    if (existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(
        readFileSync(packageJsonPath, 'utf8'),
      ) as PackageJson;

      const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      // Detect React
      if (allDeps?.react) {
        detectedLibs.add('react');
      }

      // Detect TypeScript
      if (allDeps?.typescript) {
        detectedLibs.add('typescript');
      }

      // Detect Jest
      if (allDeps?.jest) {
        detectedLibs.add('jest');
      }

      // Detect Storybook
      if (
        Object.keys(allDeps || {}).some(
          dep => dep === 'storybook' || dep.startsWith('@storybook/'),
        )
      ) {
        detectedLibs.add('storybook');
      }

      // Detect Next.js
      if (allDeps?.next) {
        detectedLibs.add('next');
      }
    }
  } catch (error) {
    console.warn('Failed to read package.json:', error);
  }

  // Use explicit libs if provided, otherwise use detected ones
  const libsToUse = options?.libs || Array.from(detectedLibs);
  console.log(
    'Applied Papyrus UI configs for the following libraries:\n',
    ...libsToUse.map(lib => `  — ${lib[0].toUpperCase()}${lib.slice(1)}\n`),
  );

  // Always include base config
  const baseConfigs = configLoaders.base();

  // Add base configs first
  configs.push(...baseConfigs);

  // Add React config if needed
  if (libsToUse.includes('react')) {
    const reactConfigs = configLoaders.react();
    configs.push(...reactConfigs);
  }

  // Add Storybook config if needed
  if (libsToUse.includes('storybook')) {
    const storybookConfigs = configLoaders.storybook();
    configs.push(...storybookConfigs);
  }

  // Add Next.js config if needed
  if (libsToUse.includes('next')) {
    const nextConfigs = configLoaders.next();
    configs.push(...nextConfigs);
  }

  // Add TypeScript config if needed
  const shouldUseTypeScript =
    options?.typescript !== false &&
    (options?.typescript === true || libsToUse.includes('typescript'));

  if (shouldUseTypeScript) {
    const typescriptConfig = configLoaders.typescript();
    configs.push(...typescriptConfig);

    // Apply project configuration only when TypeScript is used
    const project = options?.project || './tsconfig.json';
    configs = configs.map(config => {
      const currentSettings = (config.settings || {}) as ESLintSettings;
      const currentResolver = currentSettings['import/resolver'] || {};

      return {
        ...config,
        settings: {
          ...currentSettings,
          'import/resolver': {
            ...currentResolver,
            node: {
              ...(currentResolver.node || {}),
              project,
            },
            typescript: {
              alwaysTryTypes: true,
              project,
            },
          },
        },
      };
    });
  }

  // Add Jest config if needed
  if (libsToUse.includes('jest')) {
    const jestConfigs = configLoaders.jest();
    configs.push(...jestConfigs);

    // Add Jest TypeScript config if TypeScript is enabled
    if (shouldUseTypeScript) {
      const jestTsConfigs = configLoaders['jest-typescript']();
      configs.push(...jestTsConfigs);
    }
  }

  return configs;
};

export default createConfig;
