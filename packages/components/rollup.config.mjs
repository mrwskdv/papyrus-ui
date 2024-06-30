import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import banner2 from "rollup-plugin-banner2";
import copy from "rollup-plugin-copy";

const outputSharedOptions = {
  dir: '.',
  exports: 'named',
  generatedCode: {
    constBindings: true,
    preset: 'es2015',
  },
  preserveModules: true,
  sourcemap: true,
};

const clientComponents = new Set();
export default [
  {
    input: 'src/index.ts',
    output: {
      ...outputSharedOptions,
      assetFileNames({ name }) {
        return name.replace(/^src\//, 'dist/es/');
      },
      entryFileNames({ name }) {
        return `dist/es/${name.replace(/\.css$/, '.css.vanilla')}.js`;
      },
      format: 'es',
      preserveModulesRoot: 'src',
    },
    plugins: [
      nodeResolve(),
      externals(),
      typescript({
        noForceEmit: true,
      }),
      vanillaExtractPlugin({
        identifiers: 'short',
      }),
    ],
    treeshake: {
      moduleSideEffects(id) {
        return /\.css$/.test(id);
      },
    },
    onwarn(warning, warn, ...props) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        const path = warning.id.split('/');
        const fileWithExt = path[path.length - 1];
        const fileName = fileWithExt.replace('.tsx', '')

        clientComponents.add(fileName)

        return;
      }

      warn(warning);
    }
  },
  {
    input: 'dist/es/index.js',
    output: [
      {
        ...outputSharedOptions,
        format: 'es',
        preserveModulesRoot: 'dist/es',
        assetFileNames({ name }) {
          return name;
        },
        entryFileNames({ name }) {
          return `dist/es/${name}.js`;
        },
      },
      {
        ...outputSharedOptions,
        format: 'commonjs',
        preserveModulesRoot: 'dist/es',
        assetFileNames({ name }) {
          return name;
        },
        entryFileNames({ name }) {
          return `dist/cjs/${name}.js`;
        },
      },
    ],
    plugins: [
      nodeResolve(),
      externals(),
      banner2(({ name }) => {
        const path = name.split('/')
        const fileName = path[path.length - 1]

        if (clientComponents.has(fileName)) {
          clientComponents.delete(fileName);
          return `'use client';\n\n`
        }
      }),
      postcss({
        extract: 'css/components.css',
        sourceMap: true,
      }),
      del({
        targets: ['dist/es/**/*.css'],
        hook: 'buildEnd',
      }),
    ],
  },
  {
    input: 'css/components.css',
    output: [
      {
        file: 'css/components.min.css',
        sourcemap: true
      },
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        modules: false,
        sourceMap: true,
      }),
    ],
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') {
        return
      }

      warn(warning)
    }
  },
];
