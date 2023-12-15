import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  refs: {
    components: {
      title: '@noahluftyang/components',
      url: 'https://noahverse-components-storybook.netlify.app',
    },
  },
};

export default config;
