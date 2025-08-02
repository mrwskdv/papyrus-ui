import { readFileSync } from 'fs';
import { resolve } from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import type { PackageJson } from './src/types';

const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, 'package.json'), 'utf-8'),
) as PackageJson;

// Build configuration:
// - target: 'node18' - ensures Node.js built-ins are available
// - ssr: true - enables proper handling of Node.js modules and synchronous imports
// - preserveModules: true - keeps the module structure for proper resolution
export default defineConfig({
  build: {
    target: 'node18',
    ssr: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        prettier: resolve(__dirname, 'src/prettier.ts'),
      },
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.ts'),
        prettier: resolve(__dirname, 'src/prettier.ts'),
        'configs/base': resolve(__dirname, 'src/configs/base.ts'),
        'configs/react': resolve(__dirname, 'src/configs/react.ts'),
        'configs/typescript': resolve(__dirname, 'src/configs/typescript.ts'),
        'configs/storybook': resolve(__dirname, 'src/configs/storybook.ts'),
        'configs/jest': resolve(__dirname, 'src/configs/jest.ts'),
        'configs/jest-typescript': resolve(
          __dirname,
          'src/configs/jest-typescript.ts',
        ),
        'configs/nextjs': resolve(__dirname, 'src/configs/nextjs.ts'),
      },
      external: [
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        '@next/eslint-plugin-next',
      ],
      output: [
        {
          dir: 'dist/es',
          format: 'es',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          dir: 'dist/cjs',
          format: 'cjs',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
      ],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
