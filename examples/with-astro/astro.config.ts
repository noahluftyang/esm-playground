import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react()],
  output: "server",
});
