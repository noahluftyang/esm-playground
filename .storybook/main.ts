import { dirname, join } from 'path';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [],
  framework: getAbsolutePath('@storybook/react-vite'),
  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
  },
  refs: {
    components: {
      title: '@noahluftyang/components',
      url: 'https://noahverse-components-storybook.netlify.app',
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
