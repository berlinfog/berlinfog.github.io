import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://berlinfog.github.io",
  output: "static",
  integrations: [sitemap()],
});
