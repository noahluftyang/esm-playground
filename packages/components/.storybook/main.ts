import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
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
  framework: "@storybook/react-vite",
};

export default config;
