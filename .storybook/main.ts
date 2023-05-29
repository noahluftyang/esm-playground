import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  refs: {
    components: {
      title: "@noahluftyang/components",
      url: "http://localhost:7007",
    },
  },
};

export default config;
