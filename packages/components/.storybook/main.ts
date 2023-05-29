import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-highlight",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "msw-storybook-addon",
  ],
};

export default config;
