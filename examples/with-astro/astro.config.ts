import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react(), mdx()],
  output: "server"
});