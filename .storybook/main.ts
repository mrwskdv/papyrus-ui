import { dirname, join, resolve } from 'path';
import { StorybookConfig } from '@storybook/react-vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { mergeConfig } from 'vite';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],
  core: {
    disableTelemetry: true,
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      strictMode: true,
    },
  },
  staticDirs: ['./public'],
  stories: ['../packages/**/*.mdx', '../packages/**/*.stories.tsx'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            tailwindcss(resolve(__dirname, './tailwind.config.mjs')),
            autoprefixer(),
          ],
        },
      },
    });
  },
};

export default config;
