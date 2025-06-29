import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import packageJson from './package.json';

const peerDeps = Object.keys(packageJson.peerDependencies);
const deps = Object.keys(packageJson.dependencies);

const external = peerDeps.concat(deps).map((dep) => {
  return new RegExp(`^${dep}(/.*)?$`);
});

const outputSharedOptions = {
  dir: 'dist',
  assetFileNames: '[name][extname]',
  preserveModules: true,
  preserveModulesRoot: 'src',
};

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/plugin/index.ts'),
      ],
    },
    rollupOptions: {
      external,
      output: [
        {
          ...outputSharedOptions,
          entryFileNames: 'es/[name].js',
          exports: 'named',
          format: 'es',
          generatedCode: {
            constBindings: true,
            preset: 'es2015',
          },
        },
        {
          ...outputSharedOptions,
          entryFileNames: 'cjs/[name].js',
          format: 'cjs',
          generatedCode: {
            constBindings: true,
            preset: 'es2015',
          },
        },
      ],
    },
    sourcemap: true,
  },
  plugins: [
    react(),
    dts({
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
});
