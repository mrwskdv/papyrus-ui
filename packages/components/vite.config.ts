import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import packageJson from './package.json';

const peerDeps = Object.keys(packageJson.peerDependencies);
const deps = Object.keys(packageJson.dependencies);

const external = peerDeps.concat(deps).map((dep) => {
  return new RegExp(`^${dep}(/.*)?$`);
});

const outputSharedOptions = {
  dir: 'dist',
  assetFileNames: 'css/[name][extname]',
  preserveModules: true,
  preserveModulesRoot: 'src',
};

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/plugins/tailwindcss/index.ts'),
      ],
    },
    rollupOptions: {
      external,
      output: [
        {
          ...outputSharedOptions,
          entryFileNames({ name }) {
            return `es/${name.replace(/\.css$/, '.css.vanilla')}.js`;
          },
          exports: 'named',
          format: 'es',
          generatedCode: {
            constBindings: true,
            preset: 'es2015',
          },
        },
        {
          ...outputSharedOptions,
          entryFileNames({ name }) {
            return `cjs/${name.replace(/\.css$/, '.css.vanilla')}.js`;
          },
          format: 'cjs',
          generatedCode: {
            constBindings: true,
            preset: 'es2015',
          },
        },
      ],
      treeshake: {
        moduleSideEffects(id) {
          return /\.css$/.test(id);
        },
      },
    },
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    dts({
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
});
